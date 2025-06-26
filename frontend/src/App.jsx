import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import Welcome from './pages/welcome/Welcome';
import SignupForm from './pages/SignUp/SignupForm';
import Dashboard from './pages/Dashboard';
import Profile from './pages/profile/profile';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Welcome />} />
      <Route path="/signup" element={<SignupForm />} />
      <Route element={<Layout />}>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/profile" element={<Profile />} />
      </Route>
    </Routes>
  );
}

export default App;