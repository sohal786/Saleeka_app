import React, { useState } from 'react';
import { TextInput, Button, Text, View } from 'react-native';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { useRouter } from 'expo-router';
import { FIREBASE_AUTH } from '../../firebaseConfig';

export default function SignupScreen() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  const handleSignup = async () => {
    try {
      await createUserWithEmailAndPassword(FIREBASE_AUTH, email, password);
      router.push('camera'); // Navigate to the camera screen after signup
    } catch (e: any) {
      setError(e.message);
      console.log('Signup error:', e.message);
    }
  };

  return (
    <View>
      <Text>Signup</Text>
      {error && <Text>{error}</Text>}
      <TextInput
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
      />
      <TextInput
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <Button title="Signup" onPress={handleSignup} />
      <Button title="Go to Login" onPress={() => router.push('auth/login')} />
    </View>
  );
}
