import React, { useState } from 'react';
import { StyleSheet, Text, View, Switch, ScrollView } from 'react-native';
import { ThemedBackground } from '@/components/ui/ThemedBackground';
import { GlassCard } from '@/components/ui/GlassCard';
import { Colors } from '@/constants/theme';

export default function NotificationsScreen() {
    const [rtpAlert, setRtpAlert] = useState(true);
    const [bonusAlert, setBonusAlert] = useState(false);
    const [newsAlert, setNewsAlert] = useState(true);

    return (
        <ThemedBackground>
            <View style={styles.container}>
                <Text style={styles.title}>Alerts & Signals</Text>

                <GlassCard style={styles.card}>
                    <View style={styles.row}>
                        <View>
                            <Text style={styles.settingLabel}>RTP Spikes (>98%)</Text>
                            <Text style={styles.settingDesc}>Get notified when a slot runs hot.</Text>
                        </View>
                        <Switch
                            value={rtpAlert}
                            onValueChange={setRtpAlert}
                            trackColor={{ false: '#767577', true: Colors.dark.tint }}
                            thumbColor={rtpAlert ? '#fff' : '#f4f3f4'}
                        />
                    </View>

                    <View style={styles.divider} />

                    <View style={styles.row}>
                        <View>
                            <Text style={styles.settingLabel}>Bonus Frequency Increase</Text>
                            <Text style={styles.settingDesc}>Alert when bonus hit rate doubles.</Text>
                        </View>
                        <Switch
                            value={bonusAlert}
                            onValueChange={setBonusAlert}
                            trackColor={{ false: '#767577', true: Colors.dark.tint }}
                            thumbColor={bonusAlert ? '#fff' : '#f4f3f4'}
                        />
                    </View>
                </GlassCard>

                <Text style={styles.sectionHeader}>Recent Signals</Text>
                <ScrollView>
                    {[1, 2, 3].map(i => (
                        <GlassCard key={i} style={styles.alertItem}>
                            <Text style={styles.alertTime}>14:05 PM</Text>
                            <Text style={styles.alertTitle}>Gate of Olympus - RTP Spike</Text>
                            <Text style={styles.alertBody}>RTP jumped to 102% in the last 15 minutes.</Text>
                        </GlassCard>
                    ))}
                </ScrollView>

            </View>
        </ThemedBackground>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 16,
        paddingTop: 20,
        flex: 1,
    },
    title: {
        fontSize: 28,
        fontWeight: 'bold',
        color: Colors.dark.text,
        marginBottom: 24,
    },
    card: {
        padding: 16,
        marginBottom: 32,
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginVertical: 8,
    },
    settingLabel: {
        fontSize: 16,
        color: Colors.dark.text,
        fontWeight: '600',
    },
    settingDesc: {
        fontSize: 12,
        color: Colors.dark.textDim,
        marginTop: 2,
        maxWidth: 250,
    },
    divider: {
        height: 1,
        backgroundColor: 'rgba(255,255,255,0.1)',
        marginVertical: 12,
    },
    sectionHeader: {
        color: Colors.dark.textDim,
        textTransform: 'uppercase',
        marginBottom: 12,
    },
    alertItem: {
        padding: 12,
        marginBottom: 8,
    },
    alertTime: {
        fontSize: 10,
        color: Colors.dark.textDim,
        marginBottom: 4,
    },
    alertTitle: {
        fontSize: 14,
        color: Colors.dark.tint,
        fontWeight: 'bold',
    },
    alertBody: {
        fontSize: 14,
        color: Colors.dark.text,
        marginTop: 4,
    }
});
