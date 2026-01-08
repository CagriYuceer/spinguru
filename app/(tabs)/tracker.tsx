import { GlassCard } from '@/components/ui/GlassCard';
import { ThemedBackground } from '@/components/ui/ThemedBackground';
import { Colors } from '@/constants/theme';
import { Plus } from 'lucide-react-native';
import React from 'react';
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function TrackerScreen() {
    return (
        <ThemedBackground>
            <View style={styles.container}>
                <View style={styles.header}>
                    <Text style={styles.headerTitle}>Bonus Tracker</Text>
                    <TouchableOpacity style={styles.addBtn}>
                        <Plus color="#000" size={24} />
                    </TouchableOpacity>
                </View>

                <ScrollView contentContainerStyle={styles.content}>
                    {/* Stats */}
                    <View style={styles.statsGrid}>
                        <GlassCard style={styles.statCard}>
                            <Text style={styles.statLabel}>Avg X</Text>
                            <Text style={styles.statValue}>142x</Text>
                        </GlassCard>
                        <GlassCard style={styles.statCard}>
                            <Text style={styles.statLabel}>Frequency</Text>
                            <Text style={styles.statValue}>1/89</Text>
                        </GlassCard>
                        <GlassCard style={styles.statCard}>
                            <Text style={styles.statLabel}>Profit</Text>
                            <Text style={[styles.statValue, { color: Colors.dark.success }]}>+$2,450</Text>
                        </GlassCard>
                    </View>

                    <Text style={styles.sectionTitle}>Recent Bonuses</Text>

                    {/* Entries */}
                    {[1, 2, 3, 4, 5].map((i) => (
                        <GlassCard key={i} style={styles.entryCard}>
                            <View style={styles.entryRow}>
                                <View>
                                    <Text style={styles.entrySlot}>Gates of Olympus</Text>
                                    <Text style={styles.entryTime}>14:32 • $2.00 Bet</Text>
                                </View>
                                <View style={{ alignItems: 'flex-end' }}>
                                    <Text style={[styles.entryMulti, { color: i === 1 ? Colors.dark.success : Colors.dark.tint }]}>
                                        {i === 1 ? '500x' : '42x'}
                                    </Text>
                                    <Text style={styles.entryWin}>${i === 1 ? '1,000' : '84'}</Text>
                                </View>
                            </View>
                        </GlassCard>
                    ))}

                </ScrollView>
            </View>
        </ThemedBackground>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 60,
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 16,
        marginBottom: 16,
    },
    headerTitle: {
        color: Colors.dark.text,
        fontSize: 28,
        fontWeight: 'bold',
    },
    addBtn: {
        width: 44,
        height: 44,
        borderRadius: 22,
        backgroundColor: Colors.dark.tint,
        justifyContent: 'center',
        alignItems: 'center',
    },
    content: {
        padding: 16,
        paddingBottom: 100,
    },
    statsGrid: {
        flexDirection: 'row',
        gap: 8,
        marginBottom: 24,
    },
    statCard: {
        flex: 1,
        alignItems: 'center',
        padding: 12,
    },
    statLabel: {
        color: Colors.dark.textDim,
        fontSize: 12,
    },
    statValue: {
        color: Colors.dark.text,
        fontSize: 18,
        fontWeight: 'bold',
        marginTop: 4,
    },
    sectionTitle: {
        color: Colors.dark.text,
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 12,
    },
    entryCard: {
        marginBottom: 12,
    },
    entryRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    entrySlot: {
        color: Colors.dark.text,
        fontWeight: 'bold',
        fontSize: 16,
    },
    entryTime: {
        color: Colors.dark.textDim,
        fontSize: 12,
        marginTop: 4,
    },
    entryMulti: {
        fontSize: 18,
        fontWeight: '900',
    },
    entryWin: {
        color: Colors.dark.textDim,
        fontSize: 12,
        marginTop: 2,
    }
});
