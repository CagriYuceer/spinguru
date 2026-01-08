import { Colors } from '@/constants/theme';
import React from 'react';
import { Dimensions, StyleSheet, Text, View } from 'react-native';

const SCREEN_WIDTH = Dimensions.get('window').width;
const GAP = 8;
const ITEM_WIDTH = (SCREEN_WIDTH - 48 - (GAP * 4)) / 5; // 5 columns

type HeatmapItem = {
    id: string;
    value: number; // RTP or Win Rate
    label: string;
};

type Props = {
    data: HeatmapItem[];
};

export function Heatmap({ data }: Props) {
    const getColor = (value: number) => {
        // scale from 50 (cold) to 150 (hot)
        if (value > 120) return Colors.dark.success;
        if (value > 100) return '#4ADE80'; // Light Green
        if (value > 80) return Colors.dark.textDim; // Neutral
        if (value > 50) return Colors.dark.warning;
        return Colors.dark.danger;
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Live RTP Heatmap</Text>
            <View style={styles.grid}>
                {data.slice(0, 20).map((item) => (
                    <View key={item.id} style={[styles.item, { backgroundColor: getColor(item.value) + '40', borderColor: getColor(item.value) }]}>
                        <Text style={[styles.value, { color: getColor(item.value) }]}>{item.value}%</Text>
                        <Text style={styles.label} numberOfLines={1}>{item.label}</Text>
                    </View>
                ))}
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        marginBottom: 24,
    },
    title: {
        color: '#FFF',
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 12,
    },
    grid: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        gap: GAP,
    },
    item: {
        width: ITEM_WIDTH,
        height: ITEM_WIDTH,
        borderRadius: 8,
        borderWidth: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    value: {
        fontSize: 12,
        fontWeight: '900',
    },
    label: {
        fontSize: 8,
        color: 'rgba(255,255,255,0.6)',
        marginTop: 2,
    }
});
