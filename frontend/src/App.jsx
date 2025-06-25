import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import Welcome from './pages/Welcome';
import Profile from './pages/Profile';
import Dashboard from './pages/Dashboard';
import SignupForm from './pages/SignUp/SignupForm';
import SigninForm from './pages/SignIn/SigninForm';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Welcome />} />
      <Route path="/signup" element={<SignupForm/>}/>
      <Route path="/signin" element={<SigninForm/>}/>
      <Route path="/" element={<Layout />}>
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="profile" element={<Profile />} />
      </Route>
    </Routes>
  );
}

export default App;
