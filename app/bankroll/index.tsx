import { GlassCard } from '@/components/ui/GlassCard';
import { ThemedBackground } from '@/components/ui/ThemedBackground';
import { Colors } from '@/constants/theme';
import { Save } from 'lucide-react-native';
import React from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

export default function BankrollScreen() {
    return (
        <ThemedBackground>
            <View style={styles.container}>
                <Text style={styles.title}>Bankroll Management</Text>
                <Text style={styles.subtitle}>Set your limits to play responsibly.</Text>

                <GlassCard style={styles.card}>
                    <View style={styles.row}>
                        <Text style={styles.label}>Total Bankroll</Text>
                        <TextInput style={styles.input} defaultValue="$2,500.00" />
                    </View>
                </GlassCard>

                <Text style={styles.sectionHeader}>Session Limits</Text>

                <GlassCard style={styles.card}>
                    <View style={styles.inputGroup}>
                        <Text style={styles.label}>Daily Loss Limit</Text>
                        <TextInput style={[styles.input, { borderColor: Colors.dark.danger }]} defaultValue="$500.00" />
                    </View>

                    <View style={styles.divider} />

                    <View style={styles.inputGroup}>
                        <Text style={styles.label}>Take Profit Target</Text>
                        <TextInput style={[styles.input, { borderColor: Colors.dark.success }]} defaultValue="$3,500.00" />
                    </View>
                </GlassCard>

                <TouchableOpacity style={styles.saveBtn}>
                    <Save color="#000" size={20} style={{ marginRight: 8 }} />
                    <Text style={styles.saveText}>Update Limits</Text>
                </TouchableOpacity>

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
    },
    subtitle: {
        fontSize: 16,
        color: Colors.dark.textDim,
        marginBottom: 32,
    },
    card: {
        padding: 16,
        marginBottom: 24,
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    label: {
        color: Colors.dark.text,
        fontSize: 16,
        marginBottom: 8,
    },
    input: {
        backgroundColor: 'rgba(0,0,0,0.4)',
        color: Colors.dark.text,
        fontSize: 20,
        padding: 12,
        borderRadius: 8,
        borderWidth: 1,
        borderColor: 'rgba(255,255,255,0.1)',
        textAlign: 'right',
        minWidth: 150,
    },
    sectionHeader: {
        color: Colors.dark.textDim,
        textTransform: 'uppercase',
        marginBottom: 12,
    },
    inputGroup: {
        marginBottom: 16,
    },
    divider: {
        height: 1,
        backgroundColor: 'rgba(255,255,255,0.1)',
        marginVertical: 16,
    },
    saveBtn: {
        flexDirection: 'row',
        backgroundColor: Colors.dark.tint,
        padding: 16,
        borderRadius: 12,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 'auto',
        marginBottom: 32,
    },
    saveText: {
        color: '#000',
        fontWeight: 'bold',
        fontSize: 16,
    }
});
