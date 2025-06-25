import React, { useState, useRef } from 'react';
import axios from 'axios';
import {
  Mail,
  Mic,
  LogIn,
  ArrowLeft,
  StopCircle
} from 'lucide-react';

const SigninForm = () => {
  const [email, setEmail] = useState('');
  const [recordedBlob, setRecordedBlob] = useState(null);
  const [error, setError] = useState('');
  const [isRecording, setIsRecording] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const mediaRecorderRef = useRef(null);
  const audioChunksRef = useRef([]);

  const startRecording = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      audioChunksRef.current = [];
      mediaRecorderRef.current = new MediaRecorder(stream);
      mediaRecorderRef.current.ondataavailable = (e) => {
        audioChunksRef.current.push(e.data);
      };
      mediaRecorderRef.current.onstop = () => {
        const blob = new Blob(audioChunksRef.current, { type: 'audio/webm' });
        setRecordedBlob(blob);
      };
      mediaRecorderRef.current.start();
      setIsRecording(true);
      setError('');
    } catch (err) {
      console.error('Recording error:', err);
      setError('Microphone permission denied or not available');
    }
  };

  const stopRecording = () => {
    if (mediaRecorderRef.current) {
      mediaRecorderRef.current.stop();
      setIsRecording(false);
    }
  };

  const handleSubmit = async () => {
    if (!email.trim() || !recordedBlob) {
      setError('Please enter email and record your voice');
      return;
    }

    setIsLoading(true);
    const form = new FormData();
    form.append('email', email);
    form.append('voicePassword', recordedBlob, 'voice.webm');

    try {
      const response = await axios.post('http://localhost:5000/api/signin', form, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });

      if (response.data.success) {
        alert('Login successful!');
        // Redirect/token handling
      } else {
        setError(response.data.message || 'Authentication failed');
      }
    } catch (err) {
      setError('Server error. Try again.');
    }

    setIsLoading(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-100 via-pink-50 to-blue-100 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-10">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-800 mb-2">Welcome Back</h2>
            <p className="text-gray-600">Login using your voice password</p>
          </div>

          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                <Mail className="inline w-4 h-4 mr-2" />
                Email Address
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className={`w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200 ${error && !email ? 'border-red-500 bg-red-50' : 'border-gray-300'}`}
                placeholder="Enter your email"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                <Mic className="inline w-4 h-4 mr-2" />
                Record Voice Password
              </label>

              <div className="flex items-center space-x-4">
                <button
                  onClick={isRecording ? stopRecording : startRecording}
                  className={`px-6 py-2 rounded-xl text-white font-medium transition-all duration-200 ${
                    isRecording
                      ? 'bg-red-600 hover:bg-red-700'
                      : 'bg-purple-600 hover:bg-purple-700'
                  }`}
                >
                  {isRecording ? (
                    <>
                      <StopCircle className="inline w-4 h-4 mr-2" />
                      Stop Recording
                    </>
                  ) : (
                    <>
                      <Mic className="inline w-4 h-4 mr-2" />
                      Start Recording
                    </>
                  )}
                </button>

                {recordedBlob && (
                  <audio controls src={URL.createObjectURL(recordedBlob)} className="w-40" />
                )}
              </div>
            </div>

            {error && <p className="text-red-500 text-sm mt-1">{error}</p>}

            <button
              onClick={handleSubmit}
              disabled={isLoading}
              className="w-full flex items-center justify-center px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-xl hover:from-purple-700 hover:to-blue-700 font-medium transition-all duration-200 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isLoading ? (
                <>
                  <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                  Signing in...
                </>
              ) : (
                <>
                  <LogIn className="w-4 h-4 mr-2" />
                  Sign In
                </>
              )}
            </button>

            <div className="text-center mt-4">
              <button className="text-sm text-purple-600 hover:underline">
                <ArrowLeft className="inline w-4 h-4 mr-1" />
                Back to Signup
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SigninForm;
