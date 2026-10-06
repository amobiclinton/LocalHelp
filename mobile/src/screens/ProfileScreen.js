import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import theme from '../theme';

export default function ProfileScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.avatar} />
        <Text style={styles.name}>Ada Bello</Text>
        <Text style={styles.role}>Community Member</Text>
      </View>

      <View style={styles.statsRow}>
        <View style={styles.statBox}>
          <Text style={styles.statValue}>128</Text>
          <Text style={styles.statLabel}>Helpful</Text>
        </View>
        <View style={styles.statBox}>
          <Text style={styles.statValue}>4.8</Text>
          <Text style={styles.statLabel}>Rating</Text>
        </View>
        <View style={styles.statBox}>
          <Text style={styles.statValue}>22</Text>
          <Text style={styles.statLabel}>Saved</Text>
        </View>
      </View>

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Edit Profile</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.background,
    padding: 20,
  },
  header: {
    alignItems: 'center',
    marginTop: 30,
    marginBottom: 20,
  },
  avatar: {
    width: 90,
    height: 90,
    borderRadius: 45,
    backgroundColor: theme.colors.primary,
    marginBottom: 14,
  },
  name: {
    fontSize: 26,
    fontWeight: '800',
    color: theme.colors.text,
  },
  role: {
    color: theme.colors.muted,
    fontSize: 14,
  },
  statsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  statBox: {
    flex: 1,
    backgroundColor: theme.colors.white,
    borderRadius: theme.radius,
    padding: 16,
    marginRight: 10,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: theme.colors.border,
  },
  statValue: {
    fontWeight: '800',
    fontSize: 20,
    color: theme.colors.text,
  },
  statLabel: {
    color: theme.colors.muted,
    fontSize: 12,
  },
  button: {
    backgroundColor: theme.colors.primary,
    padding: 16,
    borderRadius: theme.radius,
    alignItems: 'center',
  },
  buttonText: {
    color: theme.colors.white,
    fontWeight: '700',
    fontSize: 16,
  },
});
