import { Colors } from '@/constants/theme';
import { useColorScheme } from '@/hooks/use-color-scheme';
import { BlurView } from 'expo-blur';
import { LinearGradient } from 'expo-linear-gradient';
import React from 'react';
import { StyleSheet, View, ViewStyle } from 'react-native';

type Props = {
    children: React.ReactNode;
    style?: ViewStyle;
    intensity?: number;
    variant?: 'default' | 'highlight';
};

export function GlassCard({ children, style, intensity = 20, variant = 'default' }: Props) {
    const colorScheme = useColorScheme();
    const isDark = colorScheme === 'dark' || true; // Force dark
    const themeColors = (isDark ? Colors.dark : Colors.light) as any;

    const gradientColors = variant === 'highlight'
        ? ['rgba(255, 215, 0, 0.1)', 'rgba(0,0,0,0.3)']
        : themeColors.gradients?.card || ['rgba(30, 30, 40, 0.6)', 'rgba(20, 20, 30, 0.8)'];

    const borderColor = variant === 'highlight' ? themeColors.tint : themeColors.border;

    return (
        <View style={[styles.container, { borderColor }, style]}>
            <BlurView intensity={intensity} tint="dark" style={StyleSheet.absoluteFill} />
            <LinearGradient
                colors={gradientColors}
                style={StyleSheet.absoluteFill}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 1 }}
            />
            <View style={styles.content}>
                {children}
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        borderRadius: 16,
        overflow: 'hidden',
        borderWidth: 1,
        marginVertical: 8,
    },
    content: {
        padding: 16,
        zIndex: 1,
    },
});
