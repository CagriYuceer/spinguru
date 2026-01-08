import { ThemedBackground } from '@/components/ui/ThemedBackground';
import { Colors } from '@/constants/theme';
import { router } from 'expo-router';
import { Check } from 'lucide-react-native';
import React, { useState } from 'react';
import { Dimensions, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const SCREEN_WIDTH = Dimensions.get('window').width;

export default function OnboardingScreen() {
    const [step, setStep] = useState(1);
    const [risk, setRisk] = useState<string | null>(null);

    const handleNext = () => {
        if (step === 1) setStep(2);
        else router.replace('/');
    };

    return (
        <ThemedBackground style={styles.center}>
            <View style={styles.content}>
                {step === 1 ? (
                    <>
                        <Text style={styles.title}>Welcome to SpinGuru</Text>
                        <Text style={styles.subtitle}>
                            Advanced Analytics for the Modern Player.
                        </Text>

                        <Text style={styles.question}>Select your Risk Profile:</Text>

                        {['Conservative (Low Volatility)', 'Balanced (Medium Volatility)', 'High Roller (High Volatility)'].map((r) => (
                            <TouchableOpacity
                                key={r}
                                style={[styles.option, risk === r && styles.selectedOption]}
                                onPress={() => setRisk(r)}
                            >
                                <Text style={[styles.optionText, risk === r && styles.selectedText]}>{r}</Text>
                                {risk === r && <Check color="#000" size={20} />}
                            </TouchableOpacity>
                        ))}
                    </>
                ) : (
                    <>
                        <Text style={styles.title}>All Set!</Text>
                        <Text style={styles.subtitle}>
                            We have calibrated the algorithm to your profile.
                        </Text>
                        <View style={styles.statPreview}>
                            <Text style={styles.statLabel}>Target EV</Text>
                            <Text style={styles.statVal}>+15%</Text>
                        </View>
                    </>
                )}

                <TouchableOpacity style={styles.btn} onPress={handleNext}>
                    <Text style={styles.btnText}>{step === 1 ? 'Next Step' : 'Enter Dashboard'}</Text>
                </TouchableOpacity>
            </View>
        </ThemedBackground>
    );
}

const styles = StyleSheet.create({
    center: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    content: {
        width: SCREEN_WIDTH * 0.9,
        backgroundColor: 'rgba(0,0,0,0.5)',
        padding: 24,
        borderRadius: 24,
        borderWidth: 1,
        borderColor: 'rgba(255,255,255,0.1)',
    },
    title: {
        fontSize: 32,
        fontWeight: 'bold',
        color: Colors.dark.text,
        textAlign: 'center',
        marginBottom: 8,
    },
    subtitle: {
        fontSize: 16,
        color: Colors.dark.textDim,
        textAlign: 'center',
        marginBottom: 32,
    },
    question: {
        color: Colors.dark.text,
        marginBottom: 16,
        fontSize: 18,
    },
    option: {
        padding: 16,
        borderWidth: 1,
        borderColor: Colors.dark.textDim,
        borderRadius: 12,
        marginBottom: 12,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    selectedOption: {
        backgroundColor: Colors.dark.tint,
        borderColor: Colors.dark.tint,
    },
    optionText: {
        color: Colors.dark.text,
        fontSize: 16,
    },
    selectedText: {
        color: '#000',
        fontWeight: 'bold',
    },
    btn: {
        backgroundColor: Colors.dark.tint,
        padding: 16,
        borderRadius: 12,
        alignItems: 'center',
        marginTop: 24,
    },
    btnText: {
        color: '#000',
        fontWeight: 'bold',
        fontSize: 16,
    },
    statPreview: {
        alignItems: 'center',
        marginVertical: 24,
    },
    statLabel: {
        color: Colors.dark.textDim,
        fontSize: 14,
    },
    statVal: {
        color: Colors.dark.success,
        fontSize: 48,
        fontWeight: 'bold',
    }
});
