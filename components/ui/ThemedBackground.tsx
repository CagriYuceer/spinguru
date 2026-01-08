import { Colors } from '@/constants/theme';
import { useColorScheme } from '@/hooks/use-color-scheme';
import { LinearGradient } from 'expo-linear-gradient';
import React from 'react';
import { SafeAreaView, StatusBar, StyleSheet, ViewStyle } from 'react-native';

type Props = {
    children: React.ReactNode;
    style?: ViewStyle;
};

export function ThemedBackground({ children, style }: Props) {
    const colorScheme = useColorScheme();
    const colors = Colors[colorScheme ?? 'dark' as keyof typeof Colors]; // Force dark mostly or respect system if needed, but per plan "Dark Casino"
    const isDark = colorScheme === 'dark' || true; // Force dark for now based on plan

    // Cast colors to any because we added custom properties in theme.ts that might not be inferred immediately without strict typing updates
    const themeColors = (isDark ? Colors.dark : Colors.light) as any;

    return (
        <LinearGradient
            colors={themeColors.gradients?.background || ['#1A1A2E', '#000']}
            style={[styles.container, style]}
        >
            <StatusBar barStyle="light-content" />
            <SafeAreaView style={styles.safeArea}>
                {children}
            </SafeAreaView>
        </LinearGradient>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    safeArea: {
        flex: 1,
    },
});
