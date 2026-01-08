import { GlassCard } from '@/components/ui/GlassCard';
import { ThemedBackground } from '@/components/ui/ThemedBackground';
import { Colors } from '@/constants/theme';
import { Filter, Play, Search } from 'lucide-react-native';
import React, { useState } from 'react';
import { FlatList, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

const SLOTS_DATA = [
    { id: '1', name: 'Gates of Olympus', provider: 'Pragmatic Play', rtp: 96.5, volatility: 'High', status: 'Hot' },
    { id: '2', name: 'Sweet Bonanza', provider: 'Pragmatic Play', rtp: 96.48, volatility: 'Med-High', status: 'Neutral' },
    { id: '3', name: 'Wanted Dead or a Wild', provider: 'Hacksaw', rtp: 96.38, volatility: 'Very High', status: 'Cold' },
    { id: '4', name: 'Sugar Rush', provider: 'Pragmatic Play', rtp: 96.5, volatility: 'High', status: 'Hot' },
    { id: '5', name: 'Razor Shark', provider: 'Push Gaming', rtp: 96.7, volatility: 'High', status: 'Neutral' },
];

export default function SlotsScreen() {
    const [search, setSearch] = useState('');

    const renderItem = ({ item }: { item: any }) => (
        <GlassCard style={styles.card}>
            <View style={styles.cardRow}>
                <View style={styles.iconPlaceholder} />
                <View style={styles.cardInfo}>
                    <Text style={styles.slotName}>{item.name}</Text>
                    <Text style={styles.providerName}>{item.provider}</Text>
                    <View style={styles.tags}>
                        <View style={styles.tag}>
                            <Text style={styles.tagText}>{item.rtp}% RTP</Text>
                        </View>
                        <View style={[styles.tag, { backgroundColor: item.status === 'Hot' ? Colors.dark.success + '40' : Colors.dark.danger + '40' }]}>
                            <Text style={[styles.tagText, { color: item.status === 'Hot' ? Colors.dark.success : Colors.dark.danger }]}>{item.status}</Text>
                        </View>
                    </View>
                </View>
                <TouchableOpacity style={styles.playBtn}>
                    <Play size={20} color="#000" fill="#000" />
                </TouchableOpacity>
            </View>
        </GlassCard>
    );

    return (
        <ThemedBackground>
            <View style={styles.container}>
                <Text style={styles.headerTitle}>Slot Database</Text>

                {/* Search Bar */}
                <GlassCard style={styles.searchBar} intensity={20}>
                    <Search color={Colors.dark.textDim} size={20} />
                    <TextInput
                        placeholder="Search slots..."
                        placeholderTextColor={Colors.dark.textDim}
                        style={styles.searchInput}
                        value={search}
                        onChangeText={setSearch}
                    />
                    <Filter color={Colors.dark.tint} size={20} />
                </GlassCard>

                <FlatList
                    data={SLOTS_DATA}
                    renderItem={renderItem}
                    keyExtractor={item => item.id}
                    contentContainerStyle={styles.listContent}
                />
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
    searchBar: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 12,
        marginHorizontal: 16,
        height: 50,
    },
    searchInput: {
        flex: 1,
        color: Colors.dark.text,
        marginLeft: 12,
        fontSize: 16,
    },
    listContent: {
        padding: 16,
        paddingBottom: 100,
    },
    card: {
        padding: 12,
    },
    cardRow: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    iconPlaceholder: {
        width: 60,
        height: 60,
        borderRadius: 12,
        backgroundColor: 'rgba(255,255,255,0.1)',
        marginRight: 12,
    },
    cardInfo: {
        flex: 1,
    },
    slotName: {
        color: Colors.dark.text,
        fontWeight: 'bold',
        fontSize: 16,
    },
    providerName: {
        color: Colors.dark.textDim,
        fontSize: 12,
        marginBottom: 8,
    },
    tags: {
        flexDirection: 'row',
        gap: 8,
    },
    tag: {
        paddingHorizontal: 8,
        paddingVertical: 4,
        backgroundColor: 'rgba(255,255,255,0.1)',
        borderRadius: 4,
    },
    tagText: {
        fontSize: 10,
        color: Colors.dark.text,
        fontWeight: 'bold',
    },
    playBtn: {
        width: 40,
        height: 40,
        borderRadius: 20,
        backgroundColor: Colors.dark.tint,
        justifyContent: 'center',
        alignItems: 'center',
    }
});
