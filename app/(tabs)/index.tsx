import { Heatmap } from '@/components/Heatmap';
import { GlassCard } from '@/components/ui/GlassCard';
import { ThemedBackground } from '@/components/ui/ThemedBackground';
import { Colors } from '@/constants/theme';
import { Bell, Flame } from 'lucide-react-native';
import React from 'react';
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const MOCK_HEATMAP = Array.from({ length: 20 }).map((_, i) => ({
  id: String(i),
  value: Math.floor(Math.random() * 100) + 40,
  label: `Slot ${i + 1}`,
}));

export default function DashboardScreen() {
  return (
    <ThemedBackground>
      <ScrollView contentContainerStyle={styles.scrollContent}>

        {/* Header */}
        <View style={styles.header}>
          <View>
            <Text style={styles.greeting}>Good Evening,</Text>
            <Text style={styles.username}>HighRoller99</Text>
          </View>
          <TouchableOpacity style={styles.iconBtn}>
            <Bell color={Colors.dark.text} size={24} />
          </TouchableOpacity>
        </View>

        {/* Quick Stats */}
        <View style={styles.statsRow}>
          <GlassCard style={{ flex: 1, marginRight: 8 }}>
            <View style={styles.statItem}>
              <Text style={styles.statLabel}>Session EV</Text>
              <Text style={[styles.statValue, { color: Colors.dark.success }]}>+12.5%</Text>
            </View>
          </GlassCard>
          <GlassCard style={{ flex: 1, marginLeft: 8 }}>
            <View style={styles.statItem}>
              <Text style={styles.statLabel}>RTP Trend</Text>
              <Text style={[styles.statValue, { color: Colors.dark.danger }]}>-2.4%</Text>
            </View>
          </GlassCard>
        </View>

        {/* Heatmap */}
        <GlassCard intensity={40}>
          <Heatmap data={MOCK_HEATMAP} />
        </GlassCard>

        {/* Hot Slots (Horizontal) */}
        <Text style={styles.sectionTitle}>🔥 Today's Hot Slots</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.horizontalScroll}>
          {[1, 2, 3, 4].map(i => (
            <GlassCard key={i} style={styles.horizontalCard} variant="highlight">
              <Flame color={Colors.dark.tint} size={32} />
              <Text style={styles.cardTitle}>Sweet Bonanza</Text>
              <Text style={styles.cardSubtitle}>RTP: 98.2%</Text>
            </GlassCard>
          ))}
        </ScrollView>
        <View style={{ height: 80 }} />
      </ScrollView>
    </ThemedBackground>
  );
}

const styles = StyleSheet.create({
  scrollContent: {
    padding: 16,
    paddingTop: 60,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 24,
  },
  greeting: {
    color: Colors.dark.textDim,
    fontSize: 14,
  },
  username: {
    color: Colors.dark.text,
    fontSize: 24,
    fontWeight: 'bold',
  },
  iconBtn: {
    padding: 8,
    backgroundColor: 'rgba(255,255,255,0.1)',
    borderRadius: 20,
  },
  statsRow: {
    flexDirection: 'row',
    marginBottom: 16,
  },
  statItem: {
    alignItems: 'center',
  },
  statLabel: {
    color: Colors.dark.textDim,
    fontSize: 12,
  },
  statValue: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 4,
  },
  sectionTitle: {
    color: Colors.dark.text,
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 24,
    marginBottom: 12,
  },
  horizontalScroll: {
    overflow: 'visible',
  },
  horizontalCard: {
    width: 140,
    height: 160,
    marginRight: 16,
    alignItems: 'center',
    justifyContent: 'center',
  },
  cardTitle: {
    color: Colors.dark.text,
    fontWeight: 'bold',
    marginTop: 12,
  },
  cardSubtitle: {
    color: Colors.dark.success,
    marginTop: 4,
    fontWeight: '900',
  }
});
