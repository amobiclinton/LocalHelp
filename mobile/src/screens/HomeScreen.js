import React from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import theme from '../theme';

export default function HomeScreen({ navigation }) {
  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <Text style={styles.eyebrow}>LocalHelp</Text>
      <Text style={styles.title}>What do you need help with?</Text>

      <View style={styles.askBox}>
        <TextInput
          placeholder="Ask a question nearby..."
          placeholderTextColor={theme.colors.muted}
          style={styles.input}
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
    flex: 1,
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
    flex: 1,
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
