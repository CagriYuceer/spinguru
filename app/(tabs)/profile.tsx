import { GlassCard } from '@/components/ui/GlassCard';
import { ThemedBackground } from '@/components/ui/ThemedBackground';
import { Colors } from '@/constants/theme';
import { router } from 'expo-router';
import { Bell, ChevronRight, LogOut, Settings, Wallet } from 'lucide-react-native';
import React from 'react';
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function ProfileScreen() {
    return (
        <ThemedBackground>
            <ScrollView contentContainerStyle={styles.container}>

                <View style={styles.profileHeader}>
                    <View style={styles.avatar}>
                        <Text style={styles.avatarText}>HR</Text>
                    </View>
                    <Text style={styles.name}>HighRoller99</Text>
                    <Text style={styles.level}>Level 42 Analyst</Text>
                </View>

                <View style={styles.section}>
                    <Text style={styles.sectionHeader}>Management</Text>

                    <TouchableOpacity onPress={() => router.push('/bankroll')}>
                        <GlassCard style={styles.menuItem}>
                            <View style={styles.menuRow}>
                                <Wallet color={Colors.dark.success} size={24} />
                                <Text style={styles.menuText}>Bankroll Management</Text>
                                <ChevronRight color={Colors.dark.textDim} size={20} />
                            </View>
                        </GlassCard>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => router.push('/notifications')}>
                        <GlassCard style={styles.menuItem}>
                            <View style={styles.menuRow}>
                                <Bell color={Colors.dark.tint} size={24} />
                                <Text style={styles.menuText}>Notifications & Alerts</Text>
                                <ChevronRight color={Colors.dark.textDim} size={20} />
                            </View>
                        </GlassCard>
                    </TouchableOpacity>
                </View>

                <View style={styles.section}>
                    <Text style={styles.sectionHeader}>App Settings</Text>

                    <GlassCard style={styles.menuItem}>
                        <View style={styles.menuRow}>
                            <Settings color={Colors.dark.text} size={24} />
                            <Text style={styles.menuText}>Preferences</Text>
                            <ChevronRight color={Colors.dark.textDim} size={20} />
                        </View>
                    </GlassCard>

                    <GlassCard style={styles.menuItem}>
                        <View style={styles.menuRow}>
                            <LogOut color={Colors.dark.danger} size={24} />
                            <Text style={[styles.menuText, { color: Colors.dark.danger }]}>Sign Out</Text>
                        </View>
                    </GlassCard>
                </View>

            </ScrollView>
        </ThemedBackground>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 16,
        paddingTop: 80,
    },
    profileHeader: {
        alignItems: 'center',
        marginBottom: 32,
    },
    avatar: {
        width: 100,
        height: 100,
        borderRadius: 50,
        backgroundColor: Colors.dark.tint,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 16,
        borderWidth: 4,
        borderColor: 'rgba(255,255,255,0.1)',
    },
    avatarText: {
        fontSize: 32,
        fontWeight: 'bold',
        color: '#000',
    },
    name: {
        fontSize: 24,
        fontWeight: 'bold',
        color: Colors.dark.text,
    },
    level: {
        fontSize: 16,
        color: Colors.dark.textDim,
        marginTop: 4,
    },
    section: {
        marginBottom: 24,
    },
    sectionHeader: {
        fontSize: 14,
        color: Colors.dark.textDim,
        textTransform: 'uppercase',
        letterSpacing: 1,
        marginBottom: 8,
        marginLeft: 4,
    },
    menuItem: {
        padding: 16,
        marginVertical: 4,
    },
    menuRow: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 16,
    },
    menuText: {
        flex: 1,
        fontSize: 16,
        color: Colors.dark.text,
        fontWeight: '500',
    }
});
