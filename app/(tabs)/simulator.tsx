import { GlassCard } from '@/components/ui/GlassCard';
import { ThemedBackground } from '@/components/ui/ThemedBackground';
import { Colors } from '@/constants/theme';
import { Play } from 'lucide-react-native';
import React from 'react';
import { ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

export default function SimulatorScreen() {
    return (
        <ThemedBackground>
            <View style={styles.container}>
                <Text style={styles.headerTitle}>Session Simulator</Text>

                <ScrollView contentContainerStyle={styles.content}>
                    <GlassCard style={styles.configCard}>
                        <Text style={styles.label}>Bankroll</Text>
                        <TextInput style={styles.input} placeholder="$1000" placeholderTextColor={Colors.dark.textDim} />

                        <Text style={styles.label}>Bet Size</Text>
                        <TextInput style={styles.input} placeholder="$2.00" placeholderTextColor={Colors.dark.textDim} />

                        <Text style={styles.label}>Volatility Profile</Text>
                        <View style={styles.pills}>
                            <TouchableOpacity style={[styles.pill, styles.activePill]}><Text style={styles.pillTextActive}>High</Text></TouchableOpacity>
                            <TouchableOpacity style={styles.pill}><Text style={styles.pillText}>Extreme</Text></TouchableOpacity>
                        </View>
                    </GlassCard>

                    <TouchableOpacity style={styles.simulateBtn}>
                        <Text style={styles.btnText}>RUN SIMULATION (500 SPINS)</Text>
                        <Play size={20} color="#000" fill="#000" style={{ marginLeft: 8 }} />
                    </TouchableOpacity>

                    {/* Results Placeholder */}
                    <GlassCard style={styles.resultCard}>
                        <Text style={styles.resultTitle}>Projected Outcome</Text>
                        <View style={styles.graphPlaceholder}>
                            <View style={[styles.bar, { height: '40%' }]} />
                            <View style={[styles.bar, { height: '60%' }]} />
                            <View style={[styles.bar, { height: '30%' }]} />
                            <View style={[styles.bar, { height: '80%', backgroundColor: Colors.dark.success }]} />
                            <View style={[styles.bar, { height: '50%' }]} />
                        </View>
                        <Text style={styles.explanation}>
                            Based on 10,000 iterations, you have a <Text style={{ color: Colors.dark.success }}>12% chance</Text> of doubling your balance.
                        </Text>
                    </GlassCard>

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
    headerTitle: {
        color: Colors.dark.text,
        fontSize: 28,
        fontWeight: 'bold',
        paddingHorizontal: 16,
        marginBottom: 16,
    },
    content: {
        padding: 16,
    },
    configCard: {
        padding: 16,
    },
    label: {
        color: Colors.dark.textDim,
        marginBottom: 8,
        marginTop: 8,
    },
    input: {
        backgroundColor: 'rgba(0,0,0,0.3)',
        color: Colors.dark.text,
        padding: 12,
        borderRadius: 8,
        borderWidth: 1,
        borderColor: 'rgba(255,255,255,0.1)',
    },
    pills: {
        flexDirection: 'row',
        marginTop: 12,
        gap: 12,
    },
    pill: {
        paddingHorizontal: 16,
        paddingVertical: 8,
        borderRadius: 20,
        borderWidth: 1,
        borderColor: Colors.dark.textDim,
    },
    activePill: {
        backgroundColor: Colors.dark.tint,
        borderColor: Colors.dark.tint,
    },
    pillText: {
        color: Colors.dark.textDim,
    },
    pillTextActive: {
        color: '#000',
        fontWeight: 'bold',
    },
    simulateBtn: {
        flexDirection: 'row',
        backgroundColor: Colors.dark.tint,
        padding: 16,
        borderRadius: 12,
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 24,
    },
    btnText: {
        color: '#000',
        fontWeight: '900',
        fontSize: 16,
    },
    resultCard: {
        padding: 16,
        minHeight: 200,
    },
    resultTitle: {
        color: Colors.dark.text,
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 16,
    },
    graphPlaceholder: {
        flexDirection: 'row',
        alignItems: 'flex-end',
        height: 100,
        gap: 8,
        justifyContent: 'space-between',
        marginBottom: 16,
    },
    bar: {
        width: 40,
        backgroundColor: 'rgba(255,255,255,0.2)',
        borderRadius: 4,
    },
    explanation: {
        color: Colors.dark.textDim,
        lineHeight: 20,
    }
});
