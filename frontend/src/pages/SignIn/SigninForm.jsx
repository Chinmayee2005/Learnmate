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
      } else {
        setError(response.data.message || 'Authentication failed');
      }
    } catch (err) {
      setError('Server error. Try again.');
    }

    setIsLoading(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#1e0837] via-[#2a104b] to-[#1e0837] flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <div className="bg-[#2c1445] text-white rounded-3xl p-8 md:p-10 shadow-[8px_8px_20px_#1e0837,-8px_-8px_20px_#36125e]">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-2">Welcome Back</h2>
            <p className="text-purple-300">Login using your voice password</p>
          </div>

          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium mb-2 text-purple-200">
                <Mail className="inline w-4 h-4 mr-2" />
                Email Address
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className={`w-full px-4 py-3 rounded-xl bg-[#351a5b] text-white border ${
                  error && !email ? 'border-red-500' : 'border-transparent'
                } focus:outline-none focus:ring-2 focus:ring-purple-500`}
                placeholder="Enter your email"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2 text-purple-200">
                <Mic className="inline w-4 h-4 mr-2" />
                Record Voice Password
              </label>
              <div className="flex items-center space-x-4">
                <button
                  onClick={isRecording ? stopRecording : startRecording}
                  className={`px-6 py-2 rounded-xl font-medium transition-all duration-200 ${
                    isRecording ? 'bg-red-600 hover:bg-red-700 text-white' : 'bg-purple-700 hover:bg-purple-800 text-white'
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

            {error && <p className="text-red-400 text-sm mt-1">{error}</p>}

            <button
              onClick={handleSubmit}
              disabled={isLoading}
              className="w-full flex items-center justify-center px-6 py-3 bg-gradient-to-r from-purple-700 to-pink-700 text-white rounded-xl hover:from-purple-800 hover:to-pink-800 font-medium transition-all duration-200 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
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
              <button className="text-sm text-purple-400 hover:underline hover:text-purple-200">
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
