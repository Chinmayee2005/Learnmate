import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import Welcome from './pages/welcome/Welcome';
import SignupForm from './pages/SignUp/SignupForm';
<<<<<<< HEAD
import Dashboard from './pages/Dashboard';
import Profile from './pages/profile/profile';
=======
import SigninForm from './pages/SignIn/SigninForm';
>>>>>>> 048aa488e60620a31b080c0b2eaecf1b9cfa6968

function App() {
  return (
    <Routes>
      <Route path="/" element={<Welcome />} />
<<<<<<< HEAD
      <Route path="/signup" element={<SignupForm />} />
      <Route element={<Layout />}>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/profile" element={<Profile />} />
=======
      <Route path="/signup" element={<SignupForm/>}/>
      <Route path="/signin" element={<SigninForm/>}/>
      <Route path="/" element={<Layout />}>
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="profile" element={<Profile />} />
>>>>>>> 048aa488e60620a31b080c0b2eaecf1b9cfa6968
      </Route>
    </Routes>
  );
}

export default App;