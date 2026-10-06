import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
  Alert,
} from 'react-native';
import { saveAuthToken } from '../services/auth';
import { apiPost } from '../services/api';
import theme from '../theme';

export default function AuthScreen({ navigation }) {
  const [isLogin, setIsLogin] = useState(true);
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async () => {
    if (!email || !password || (!isLogin && !fullName)) {
      Alert.alert('Missing fields', 'Please fill in the required information.');
      return;
    }

    setLoading(true);

    try {
      const payload = isLogin
        ? { email, password }
        : { fullName, email, password, city: 'Karu', district: 'Abuja' };

      const endpoint = isLogin ? '/auth/login' : '/auth/register';
      const response = await apiPost(endpoint, payload);

      if (!response.token) {
        throw new Error('Authentication failed');
      }

      await saveAuthToken(response.token);
      navigation.replace('Home');
    } catch (error) {
      Alert.alert('Authentication error', error.message || 'Something went wrong.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      style={styles.container}
    >
      <View style={styles.card}>
        <Text style={styles.brand}>LocalHelp</Text>
        <Text style={styles.title}>{isLogin ? 'Welcome back' : 'Create your account'}</Text>
        <Text style={styles.subtitle}>
          {isLogin ? 'Sign in to ask and reply nearby.' : 'Join your local community in Karu, Abuja.'}
        </Text>

        {!isLogin && (
          <TextInput
            value={fullName}
            onChangeText={setFullName}
            placeholder="Full name"
            placeholderTextColor={theme.colors.muted}
            style={styles.input}
            autoCapitalize="words"
          />
        )}

        <TextInput
          value={email}
          onChangeText={setEmail}
          placeholder="Email address"
          placeholderTextColor={theme.colors.muted}
          keyboardType="email-address"
          autoCapitalize="none"
          style={styles.input}
        />

        <TextInput
          value={password}
          onChangeText={setPassword}
          placeholder="Password"
          placeholderTextColor={theme.colors.muted}
          secureTextEntry
          style={styles.input}
        />

        <TouchableOpacity style={styles.primaryButton} onPress={handleSubmit} disabled={loading}>
          <Text style={styles.primaryButtonText}>{loading ? 'Please wait...' : isLogin ? 'Log In' : 'Create Account'}</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => setIsLogin(!isLogin)}>
          <Text style={styles.toggleText}>
            {isLogin ? 'Need an account? Sign up' : 'Already have an account? Log in'}
          </Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: theme.colors.background,
    padding: 20,
  },
  card: {
    backgroundColor: theme.colors.white,
    borderRadius: 20,
    padding: 24,
    shadowColor: '#000',
    shadowOpacity: 0.08,
    shadowRadius: 12,
    elevation: 4,
  },
  brand: {
    color: theme.colors.primary,
    fontWeight: '800',
    fontSize: 28,
    marginBottom: 8,
  },
  title: {
    color: theme.colors.text,
    fontSize: 26,
    fontWeight: '800',
    marginBottom: 8,
  },
  subtitle: {
    color: theme.colors.muted,
    fontSize: 15,
    marginBottom: 16,
  },
  input: {
    backgroundColor: '#F3F6F9',
    borderColor: theme.colors.border,
    borderWidth: 1,
    borderRadius: 12,
    padding: 14,
    fontSize: 16,
    marginBottom: 12,
    color: theme.colors.text,
  },
  primaryButton: {
    backgroundColor: theme.colors.primary,
    borderRadius: 12,
    padding: 16,
    alignItems: 'center',
    marginTop: 10,
  },
  primaryButtonText: {
    color: theme.colors.white,
    fontWeight: '700',
    fontSize: 16,
  },
  toggleText: {
    marginTop: 18,
    textAlign: 'center',
    color: theme.colors.primary,
    fontWeight: '600',
  },
});
