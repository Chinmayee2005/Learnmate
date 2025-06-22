import React, { useState, useRef } from 'react';
import { Mic, MicOff, Play, Pause, RotateCcw, CheckCircle } from 'lucide-react';

const VoicePassword = ({ onVoicePasswordChange, error }) => {
  const [isRecording, setIsRecording] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [audioBlob, setAudioBlob] = useState(null);
  const [duration, setDuration] = useState(0);
  const [recordingTime, setRecordingTime] = useState(0);
  
  const mediaRecorderRef = useRef(null);
  const audioRef = useRef(null);
  const intervalRef = useRef(null);

  const startRecording = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      const mediaRecorder = new MediaRecorder(stream);
      mediaRecorderRef.current = mediaRecorder;
      
      const chunks = [];
      mediaRecorder.ondataavailable = (event) => {
        chunks.push(event.data);
      };
      
      mediaRecorder.onstop = () => {
        const blob = new Blob(chunks, { type: 'audio/wav' });
        setAudioBlob(blob);
        onVoicePasswordChange(blob);
        stream.getTracks().forEach(track => track.stop());
      };
      
      mediaRecorder.start();
      setIsRecording(true);
      setRecordingTime(0);
      
      intervalRef.current = setInterval(() => {
        setRecordingTime(prev => prev + 1);
      }, 1000);
      
    } catch (error) {
      console.error('Error accessing microphone:', error);
      alert('Could not access microphone. Please ensure microphone permissions are granted.');
    }
  };

  const stopRecording = () => {
    if (mediaRecorderRef.current && isRecording) {
      mediaRecorderRef.current.stop();
      setIsRecording(false);
      clearInterval(intervalRef.current);
    }
  };

  const playRecording = () => {
    if (audioBlob) {
      const audioUrl = URL.createObjectURL(audioBlob);
      audioRef.current = new Audio(audioUrl);
      
      audioRef.current.onloadedmetadata = () => {
        setDuration(Math.floor(audioRef.current.duration));
      };
      
      audioRef.current.onended = () => {
        setIsPlaying(false);
      };
      
      audioRef.current.play();
      setIsPlaying(true);
    }
  };

  const pauseRecording = () => {
    if (audioRef.current) {
      audioRef.current.pause();
      setIsPlaying(false);
    }
  };

  const resetRecording = () => {
    setAudioBlob(null);
    setDuration(0);
    setRecordingTime(0);
    setIsPlaying(false);
    onVoicePasswordChange(null);
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current = null;
    }
  };

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <div className="space-y-6">
      <div className="bg-gradient-to-r from-purple-50 to-blue-50 rounded-xl p-6">
        <div className="text-center mb-6">
          <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
            <Mic className="w-10 h-10 text-purple-600" />
          </div>
          <h3 className="text-lg font-semibold text-gray-800 mb-2">Voice Password Setup</h3>
          <p className="text-sm text-gray-600">
            Record a unique phrase that you'll remember. This will be used for voice authentication.
          </p>
        </div>

        {!audioBlob ? (
          <div className="text-center space-y-4">
            {!isRecording ? (
              <button
                type="button"
                onClick={startRecording}
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-red-500 to-pink-500 text-white rounded-xl hover:from-red-600 hover:to-pink-600 font-medium transition-all duration-200 transform hover:scale-105"
              >
                <Mic className="w-5 h-5 mr-2" />
                Start Recording
              </button>
            ) : (
              <div className="space-y-4">
                <div className="flex items-center justify-center space-x-4">
                  <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
                  <span className="text-red-600 font-medium">Recording... {formatTime(recordingTime)}</span>
                  <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
                </div>
                <button
                  type="button"
                  onClick={stopRecording}
                  className="inline-flex items-center px-8 py-4 bg-gray-600 text-white rounded-xl hover:bg-gray-700 font-medium transition-all duration-200"
                >
                  <MicOff className="w-5 h-5 mr-2" />
                  Stop Recording
                </button>
              </div>
            )}
          </div>
        ) : (
          <div className="space-y-4">
            <div className="bg-white rounded-xl p-4 border-2 border-green-200">
              <div className="flex items-center justify-center space-x-4">
                <CheckCircle className="w-6 h-6 text-green-600" />
                <div className="text-center">
                  <p className="font-medium text-gray-800">Voice Password Recorded</p>
                  <p className="text-sm text-gray-600">Duration: {formatTime(duration)}</p>
                </div>
              </div>
            </div>

            <div className="flex justify-center space-x-3">
              <button
                type="button"
                onClick={isPlaying ? pauseRecording : playRecording}
                className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-xl hover:bg-blue-700 font-medium transition-all duration-200"
              >
                {isPlaying ? (
                  <>
                    <Pause className="w-4 h-4 mr-2" />
                    Pause
                  </>
                ) : (
                  <>
                    <Play className="w-4 h-4 mr-2" />
                    Play
                  </>
                )}
              </button>
              
              <button
                type="button"
                onClick={resetRecording}
                className="inline-flex items-center px-6 py-3 bg-gray-600 text-white rounded-xl hover:bg-gray-700 font-medium transition-all duration-200"
              >
                <RotateCcw className="w-4 h-4 mr-2" />
                Re-record
              </button>
            </div>
          </div>
        )}
      </div>

      {error && <p className="text-red-500 text-sm text-center">{error}</p>}

      <div className="bg-amber-50 border border-amber-200 rounded-xl p-4">
        <div className="flex items-start space-x-3">
          <div className="w-5 h-5 text-amber-600 mt-0.5">⚠️</div>
          <div>
            <p className="text-amber-800 text-sm font-medium mb-1">Tips for a good voice password:</p>
            <ul className="text-amber-700 text-xs space-y-1">
              <li>• Choose a phrase you'll remember easily</li>
              <li>• Speak clearly and at normal volume</li>
              <li>• Record in a quiet environment</li>
              <li>• Keep it between 3-10 seconds</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VoicePassword;