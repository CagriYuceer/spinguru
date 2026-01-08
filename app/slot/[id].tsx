import { GlassCard } from '@/components/ui/GlassCard';
import { ThemedBackground } from '@/components/ui/ThemedBackground';
import { Colors } from '@/constants/theme';
import { useLocalSearchParams } from 'expo-router';
import React from 'react';
import { Dimensions, ScrollView, StyleSheet, Text, View } from 'react-native';
import { LineChart } from 'react-native-gifted-charts';

const SCREEN_WIDTH = Dimensions.get('window').width;

export default function SlotDetailScreen() {
    const { id } = useLocalSearchParams();

    // Mock Data for the chart
    const lineData = [
        { value: 92, label: '10:00' },
        { value: 95, label: '11:00' },
        { value: 98, label: '12:00' },
        { value: 94, label: '13:00' },
        { value: 89, label: '14:00' },
        { value: 97, label: '15:00' },
    ];

    return (
        <ThemedBackground>
            <ScrollView contentContainerStyle={styles.container}>
                <Text style={styles.title}>Gates of Olympus #{id}</Text>
                <Text style={styles.provider}>Pragmatic Play</Text>

                {/* Recommendation Indicator */}
                <View style={styles.indicatorContainer}>
                    <View style={styles.gauge}>
                        <Text style={styles.gaugeValue}>HOT 🔥</Text>
                    </View>
                    <Text style={styles.gaugeLabel}>Strong Buy Signal</Text>
                </View>

                {/* RTP Chart */}
                <GlassCard style={styles.chartCard} intensity={10}>
                    <Text style={styles.chartTitle}>RTP History (Last 24h)</Text>
                    <LineChart
                        data={lineData}
                        color={Colors.dark.success}
                        thickness={3}
                        width={SCREEN_WIDTH - 80}
                        yAxisTextStyle={{ color: Colors.dark.textDim }}
                        xAxisLabelTextStyle={{ color: Colors.dark.textDim, fontSize: 10 }}
                        hideRules
                        hideYAxisText={false}
                        yAxisThickness={0}
                        xAxisThickness={1}
                        xAxisColor={Colors.dark.textDim}
                    />
                </GlassCard>

                {/* Stats Grid */}
                <View style={styles.statsGrid}>
                    <GlassCard style={styles.statBox}>
                        <Text style={styles.statLabel}>Volatility</Text>
                        <Text style={[styles.statValue, { color: Colors.dark.danger }]}>EXTREME</Text>
                    </GlassCard>
                    <GlassCard style={styles.statBox}>
                        <Text style={styles.statLabel}>Max Win</Text>
                        <Text style={styles.statValue}>5,000x</Text>
                    </GlassCard>
                    <GlassCard style={styles.statBox}>
                        <Text style={styles.statLabel}>EV</Text>
                        <Text style={[styles.statValue, { color: Colors.dark.success }]}>+4.2%</Text>
                    </GlassCard>
                </View>

                {/* Description / Analysis */}
                <GlassCard>
                    <Text style={styles.analysisTitle}>Analyst Verdict</Text>
                    <Text style={styles.analysisText}>
                        The slot is currently paying out above its theoretical RTP. Volatility remains high, but entry frequency for the bonus round has increased by 15% in the last hour.
                    </Text>
                </GlassCard>

            </ScrollView>
        </ThemedBackground>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 16,
        paddingTop: 20,
    },
    title: {
        fontSize: 28,
        fontWeight: 'bold',
        color: Colors.dark.text,
    },
    provider: {
        fontSize: 16,
        color: Colors.dark.textDim,
        marginBottom: 24,
    },
    indicatorContainer: {
        alignItems: 'center',
        marginBottom: 24,
    },
    gauge: {
        paddingHorizontal: 24,
        paddingVertical: 12,
        backgroundColor: Colors.dark.success,
        borderRadius: 30,
        shadowColor: Colors.dark.success,
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 0.8,
        shadowRadius: 20,
        elevation: 10,
    },
    gaugeValue: {
        color: '#000',
        fontWeight: '900',
        fontSize: 20,
    },
    gaugeLabel: {
        color: Colors.dark.text,
        marginTop: 12,
        fontSize: 16,
        fontWeight: '600',
    },
    chartCard: {
        padding: 16,
        marginBottom: 16,
        alignItems: 'center',
    },
    chartTitle: {
        color: Colors.dark.text,
        marginBottom: 16,
        alignSelf: 'flex-start',
        fontWeight: 'bold',
    },
    statsGrid: {
        flexDirection: 'row',
        gap: 12,
        justifyContent: 'space-between',
        marginBottom: 16,
    },
    statBox: {
        flex: 1,
        padding: 12,
        alignItems: 'center',
    },
    statLabel: {
        color: Colors.dark.textDim,
        fontSize: 10,
        textTransform: 'uppercase',
    },
    statValue: {
        color: Colors.dark.text,
        fontSize: 16,
        fontWeight: 'bold',
        marginTop: 4,
    },
    analysisTitle: {
        color: Colors.dark.tint,
        fontWeight: 'bold',
        marginBottom: 8,
    },
    analysisText: {
        color: Colors.dark.textDim,
        lineHeight: 22,
    }
});
