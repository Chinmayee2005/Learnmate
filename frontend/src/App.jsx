// src/App.jsx
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import Welcome from './pages/welcome/Welcome';
import SignupForm from './pages/SignUp/SignupForm';
import Dashboard from './pages/Dashboard';
import Profile from './pages/profile/profile';
import SigninForm from './pages/SignIn/SigninForm';

function App() {
  return (
    <Routes>
      {/* Public Routes */}
      <Route path="/" element={<Welcome />} />
      <Route path="/signup" element={<SignupForm />} />
      <Route path="/signin" element={<SigninForm />} />

      {/* Protected Routes with Layout */}
      <Route element={<Layout />}>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/profile" element={<Profile />} />
      </Route>
    </Routes>
  );
}

export default App;
