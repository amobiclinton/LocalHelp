import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Alert,
} from 'react-native';
import { getAuthToken, clearAuthToken } from '../services/auth';
import theme from '../theme';

export default function HomeScreen({ navigation }) {
  const [token, setToken] = useState(null);

  useEffect(() => {
    const loadToken = async () => {
      const savedToken = await getAuthToken();
      setToken(savedToken);
    };

    loadToken();
  }, []);

  const handleSignOut = async () => {
    await clearAuthToken();
    setToken(null);
    navigation.replace('Auth');
  };

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <Text style={styles.eyebrow}>LocalHelp</Text>
      <Text style={styles.title}>What do you need help with?</Text>

      {token ? (
        <View style={styles.authStateCard}>
          <Text style={styles.authStateTitle}>You're signed in</Text>
          <Text style={styles.authStateText}>You can ask a question or help someone nearby.</Text>
          <TouchableOpacity style={styles.signOutButton} onPress={handleSignOut}>
            <Text style={styles.signOutButtonText}>Sign Out</Text>
          </TouchableOpacity>
        </View>
      ) : (
        <View style={styles.authStateCard}>
          <Text style={styles.authStateTitle}>Join the community</Text>
          <Text style={styles.authStateText}>Create an account or log in to ask for local help.</Text>
          <TouchableOpacity style={styles.primaryButton} onPress={() => navigation.navigate('Auth')}>
            <Text style={styles.primaryButtonText}>Go to Login</Text>
          </TouchableOpacity>
        </View>
      )}

      <View style={styles.askBox}>
        <TextInput
          placeholder="Ask a question nearby..."
          placeholderTextColor={theme.colors.muted}
          style={styles.input}
          editable={Boolean(token)}
        />
      </View>

      <View style={styles.actionsRow}>
        <TouchableOpacity style={styles.primaryButton} onPress={() => navigation.navigate('AskQuestion')}>
          <Text style={styles.primaryButtonText}>Ask by Voice</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.secondaryButton} onPress={() => navigation.navigate('AskQuestion')}>
          <Text style={styles.secondaryButtonText}>Ask by Text</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity style={styles.categoryButton} onPress={() => navigation.navigate('QuestionDetail')}>
        <Text style={styles.categoryButtonText}>Browse Categories</Text>
      </TouchableOpacity>

      <Text style={styles.sectionTitle}>Trending nearby</Text>
      <View style={styles.card}>
        <Text style={styles.cardTitle}>Where can I buy good food near here?</Text>
        <Text style={styles.cardMeta}>Food • 2 replies • Karu</Text>
      </View>
      <View style={styles.card}>
        <Text style={styles.cardTitle}>Reliable dry cleaner in the area?</Text>
        <Text style={styles.cardMeta}>Cleaning • 5 replies • Abuja</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.background,
  },
  content: {
    padding: 20,
  },
  eyebrow: {
    color: theme.colors.primary,
    fontWeight: '700',
    fontSize: 14,
    marginBottom: 8,
  },
  title: {
    fontSize: 30,
    fontWeight: '800',
    color: theme.colors.text,
    marginBottom: 20,
  },
  authStateCard: {
    backgroundColor: theme.colors.white,
    borderRadius: theme.radius,
    borderWidth: 1,
    borderColor: theme.colors.border,
    padding: 16,
    marginBottom: 18,
  },
  authStateTitle: {
    color: theme.colors.text,
    fontWeight: '700',
    fontSize: 18,
    marginBottom: 4,
  },
  authStateText: {
    color: theme.colors.muted,
    fontSize: 14,
    marginBottom: 12,
  },
  askBox: {
    backgroundColor: theme.colors.white,
    borderRadius: theme.radius,
    padding: 12,
    borderWidth: 1,
    borderColor: theme.colors.border,
    marginBottom: 16,
  },
  input: {
    fontSize: 16,
    color: theme.colors.text,
  },
  actionsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 12,
    marginBottom: 16,
  },
  primaryButton: {
    backgroundColor: theme.colors.primary,
    padding: 16,
    borderRadius: theme.radius,
    alignItems: 'center',
  },
  primaryButtonText: {
    color: theme.colors.white,
    fontWeight: '700',
    fontSize: 16,
  },
  secondaryButton: {
    backgroundColor: theme.colors.white,
    padding: 16,
    borderRadius: theme.radius,
    borderWidth: 1,
    borderColor: theme.colors.border,
    alignItems: 'center',
  },
  secondaryButtonText: {
    color: theme.colors.text,
    fontWeight: '700',
    fontSize: 16,
  },
  signOutButton: {
    backgroundColor: '#EEF2F7',
    padding: 12,
    borderRadius: 10,
    alignItems: 'center',
  },
  signOutButtonText: {
    color: theme.colors.text,
    fontWeight: '700',
  },
  categoryButton: {
    backgroundColor: theme.colors.accent,
    padding: 16,
    borderRadius: theme.radius,
    marginBottom: 24,
    alignItems: 'center',
  },
  categoryButtonText: {
    color: theme.colors.text,
    fontWeight: '700',
    fontSize: 16,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: '700',
    marginBottom: 12,
    color: theme.colors.text,
  },
  card: {
    backgroundColor: theme.colors.white,
    borderRadius: theme.radius,
    padding: 16,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: theme.colors.border,
  },
  cardTitle: {
    fontSize: 17,
    color: theme.colors.text,
    fontWeight: '700',
    marginBottom: 6,
  },
  cardMeta: {
    fontSize: 13,
    color: theme.colors.muted,
  },
});
