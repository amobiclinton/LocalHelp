import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import theme from '../theme';

export default function QuestionDetailScreen() {
  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <Text style={styles.title}>Where can I buy good food around here?</Text>
      <Text style={styles.meta}>Food • Asked by Aisha • Karu</Text>

      <View style={styles.replyCard}>
        <Text style={styles.replyName}>Ada</Text>
        <Text style={styles.replyBody}>Try the place beside the market. They have good jollof and grilled chicken.</Text>
        <Text style={styles.replyMeta}>Helpful • 12 upvotes</Text>
      </View>

      <View style={styles.replyCard}>
        <Text style={styles.replyName}>Tosin</Text>
        <Text style={styles.replyBody}>I recommend the spot near the main junction. Clean, affordable and fast.</Text>
        <Text style={styles.replyMeta}>Helpful • 9 upvotes</Text>
      </View>

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Reply</Text>
      </TouchableOpacity>
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
  title: {
    fontSize: 26,
    fontWeight: '800',
    color: theme.colors.text,
    marginBottom: 8,
  },
  meta: {
    color: theme.colors.muted,
    fontSize: 14,
    marginBottom: 18,
  },
  replyCard: {
    backgroundColor: theme.colors.white,
    borderRadius: theme.radius,
    padding: 16,
    borderWidth: 1,
    borderColor: theme.colors.border,
    marginBottom: 14,
  },
  replyName: {
    fontWeight: '700',
    color: theme.colors.text,
    marginBottom: 8,
  },
  replyBody: {
    color: theme.colors.text,
    lineHeight: 22,
    marginBottom: 8,
  },
  replyMeta: {
    color: theme.colors.primary,
    fontWeight: '600',
    fontSize: 12,
  },
  button: {
    backgroundColor: theme.colors.primary,
    borderRadius: theme.radius,
    padding: 16,
    alignItems: 'center',
    marginTop: 10,
  },
  buttonText: {
    color: theme.colors.white,
    fontWeight: '700',
    fontSize: 16,
  },
});
