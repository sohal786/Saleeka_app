import React from 'react';
import { Link } from 'expo-router';
import LoginScreen from './auth/login';
import SignupScreen from './auth/signup';
import CameraScreen from './camera/CameraScreen';

export default function AppLayout() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginScreen />} exact />
        <Route path="/signup" element={<SignupScreen />} />
        <Route path="/camera" element={<CameraScreen />} />
      </Routes>
    </Router>
  );
}
