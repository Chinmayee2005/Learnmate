import React, { useState } from 'react';
import axios from 'axios';

import {
  User,
  Mail,
  Calendar,
  Users,
  Shield,
  Mic,
  CheckCircle,
  ArrowRight,
  ArrowLeft,
  Eye,
  EyeOff
} from 'lucide-react';
import InterestSelector from './InterestSelector';
import VoicePassword from './VoicePassword';
import StepIndicator from './StepIndicator';

const SignupForm = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    age: '',
    gender: '',
    interests: [],
    verificationCode: '',
    voicePassword: null,
    maxInterests: 5
  });
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  const totalSteps = 4;

  const validateStep = (step) => {
    const newErrors = {};

    switch (step) {
      case 1:
        if (!formData.fullName.trim()) newErrors.fullName = 'Full name is required';
        if (!formData.email.trim()) newErrors.email = 'Email is required';
        else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Email is invalid';
        if (!formData.age) newErrors.age = 'Age is required';
        else if (formData.age < 13 || formData.age > 120) newErrors.age = 'Age must be between 13 and 120';
        if (!formData.gender) newErrors.gender = 'Gender is required';
        break;
      case 2:
        if (formData.interests.length === 0) newErrors.interests = 'Please select at least one interest';
        break;
      case 3:
        if (!formData.verificationCode.trim()) newErrors.verificationCode = 'Verification code is required';
        else if (formData.verificationCode.length !== 6) newErrors.verificationCode = 'Code must be 6 digits';
        break;
      case 4:
        if (!formData.voicePassword) newErrors.voicePassword = 'Voice password is required';
        break;
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNext = async () => {
    if (validateStep(currentStep)) {
      setIsLoading(true);
  
      if (currentStep === 1) {
        try {
          const response = await axios.post('http://localhost:5000/api/send-code', {
            email: formData.email,
          });
          if (response.data.success) {
            setCurrentStep(currentStep + 1);
          } else {
            setErrors({ email: 'Failed to send verification code' });
          }
        } catch (error) {
          console.error('Error sending code:', error);
          setErrors({ email: 'Server error. Try again later.' });
        }
      } 
      
      else {
        setCurrentStep(currentStep + 1);
      }
  
      setIsLoading(false);
    }
  };
  
  

  const handlePrevious = () => {
    setCurrentStep(currentStep - 1);
    setErrors({});
  };

  const handleSubmit = async () => {
    if (validateStep(currentStep)) {
      setIsLoading(true);
      const form = new FormData();
      form.append('fullName', formData.fullName);
      form.append('email', formData.email);
      form.append('age', formData.age);
      form.append('gender', formData.gender);
      form.append('interests', JSON.stringify(formData.interests));
      form.append('verificationCode', formData.verificationCode);
      form.append('voicePassword', formData.voicePassword); // File/blob
  
      try {
        const response = await axios.post('http://localhost:5000/api/signup', form, {
          headers: { 'Content-Type': 'multipart/form-data' }
        });
  
        if (response.data.success) {
          alert('Signup complete!');
        } else {
          alert(response.data.message);
        }
      } catch (err) {
        alert('Error: ' + err.message);
      }
  
      setIsLoading(false);
    }
  };
  

  const updateFormData = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: '' }));
    }
  };

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return (
          <div className="space-y-6">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-2">Personal Information</h2>
              <p className="text-gray-600">Tell us about yourself</p>
            </div>

            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  <User className="inline w-4 h-4 mr-2" />
                  Full Name
                </label>
                <input
                  type="text"
                  value={formData.fullName}
                  onChange={(e) => updateFormData('fullName', e.target.value)}
                  className={`w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200 ${errors.fullName ? 'border-red-500 bg-red-50' : 'border-gray-300'
                    }`}
                  placeholder="Enter your full name"
                />
                {errors.fullName && <p className="text-red-500 text-sm mt-1">{errors.fullName}</p>}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  <Mail className="inline w-4 h-4 mr-2" />
                  Email Address
                </label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => updateFormData('email', e.target.value)}
                  className={`w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200 ${errors.email ? 'border-red-500 bg-red-50' : 'border-gray-300'
                    }`}
                  placeholder="Enter your email address"
                />
                {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    <Calendar className="inline w-4 h-4 mr-2" />
                    Age
                  </label>
                  <input
                    type="number"
                    value={formData.age}
                    onChange={(e) => updateFormData('age', parseInt(e.target.value))}
                    className={`w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200 ${errors.age ? 'border-red-500 bg-red-50' : 'border-gray-300'
                      }`}
                    placeholder="Your age"
                    min="13"
                    max="120"
                  />
                  {errors.age && <p className="text-red-500 text-sm mt-1">{errors.age}</p>}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    <Users className="inline w-4 h-4 mr-2" />
                    Gender
                  </label>
                  <select
                    value={formData.gender}
                    onChange={(e) => updateFormData('gender', e.target.value)}
                    className={`w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200 ${errors.gender ? 'border-red-500 bg-red-50' : 'border-gray-300'
                      }`}
                  >
                    <option value="">Select gender</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="non-binary">Non-binary</option>
                    <option value="prefer-not-to-say">Prefer not to say</option>
                  </select>
                  {errors.gender && <p className="text-red-500 text-sm mt-1">{errors.gender}</p>}
                </div>
              </div>
            </div>
          </div>
        );

      case 2:
        return (
          <div className="space-y-6">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-2">Your Interests</h2>
              <p className="text-gray-600">Select up to {formData.maxInterests} interests that match your preferences</p>
            </div>

            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Maximum Interests (1-10)
              </label>
              <input
                type="range"
                min="1"
                max="10"
                value={formData.maxInterests}
                onChange={(e) => updateFormData('maxInterests', parseInt(e.target.value))}
                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
              />
              <div className="flex justify-between text-xs text-gray-500 mt-1">
                <span>1</span>
                <span className="font-medium text-purple-600">{formData.maxInterests}</span>
                <span>10</span>
              </div>
            </div>

            <InterestSelector
              selectedInterests={formData.interests}
              maxInterests={formData.maxInterests}
              onInterestsChange={(interests) => updateFormData('interests', interests)}
            />
            {errors.interests && <p className="text-red-500 text-sm mt-2">{errors.interests}</p>}
          </div>
        );

      case 3:
        return (
          <div className="space-y-6">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-2">Email Verification</h2>
              <p className="text-gray-600">We've sent a 6-digit code to <strong>{formData.email}</strong></p>
            </div>

            <div className="bg-blue-50 border border-blue-200 rounded-xl p-4 mb-6">
              <div className="flex items-center">
                <Mail className="w-5 h-5 text-blue-600 mr-2" />
                <p className="text-blue-800 text-sm">
                  Check your email inbox and enter the verification code below
                </p>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                <Shield className="inline w-4 h-4 mr-2" />
                Verification Code
              </label>
              <input
                type="text"
                value={formData.verificationCode}
                onChange={(e) => updateFormData('verificationCode', e.target.value.replace(/\D/g, '').slice(0, 6))}
                className={`w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200 text-center text-2xl tracking-widest ${errors.verificationCode ? 'border-red-500 bg-red-50' : 'border-gray-300'
                  }`}
                placeholder="000000"
                maxLength="6"
              />
              {errors.verificationCode && <p className="text-red-500 text-sm mt-1">{errors.verificationCode}</p>}
            </div>

            <button
              type="button"
              className="w-full text-center text-purple-600 hover:text-purple-800 text-sm font-medium transition-colors duration-200"
            >
              Didn't receive the code? Resend
            </button>
          </div>
        );

      case 4:
        return (
          <div className="space-y-6">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-2">Voice Password</h2>
              <p className="text-gray-600">Record a unique voice password for enhanced security</p>
            </div>

            <VoicePassword
              onVoicePasswordChange={(voiceData) => updateFormData('voicePassword', voiceData)}
              error={errors.voicePassword}
            />
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-100 via-pink-50 to-blue-100 flex items-center justify-center p-4">
      <div className="w-full max-w-2xl">
        <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12">
          <StepIndicator currentStep={currentStep} totalSteps={totalSteps} />

          <div className="mt-8">
            {renderStep()}
          </div>

          <div className="flex justify-between mt-8 pt-6 border-t border-gray-200">
            {currentStep > 1 ? (
              <button
                onClick={handlePrevious}
                className="flex items-center px-6 py-3 text-gray-600 hover:text-gray-800 font-medium transition-colors duration-200"
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                Previous
              </button>
            ) : (
              <div></div>
            )}

            {currentStep < totalSteps ? (
              <button
                onClick={handleNext}
                disabled={isLoading}
                className="flex items-center px-8 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-xl hover:from-purple-700 hover:to-blue-700 font-medium transition-all duration-200 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isLoading ? (
                  <>
                    <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                    {currentStep === 1 ? 'Sending Code...' : 'Loading...'}
                  </>
                ) : (
                  <>
                    Next
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </>
                )}
              </button>
            ) : (
              <button
                onClick={handleSubmit}
                disabled={isLoading}
                className="flex items-center px-8 py-3 bg-gradient-to-r from-green-600 to-emerald-600 text-white rounded-xl hover:from-green-700 hover:to-emerald-700 font-medium transition-all duration-200 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isLoading ? (
                  <>
                    <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                    Creating Account...
                  </>
                ) : (
                  <>
                    <CheckCircle className="w-4 h-4 mr-2" />
                    Create Account
                  </>
                )}
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignupForm;