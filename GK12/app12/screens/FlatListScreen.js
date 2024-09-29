import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, FlatList, TouchableOpacity } from 'react-native';
import { CITY } from '../data/const';

export default function FlatListScreen({ navigation }) {
    const [selectedCity, setSelectedCity] = useState(null);

    const handleCityPress = (city) => {
        setSelectedCity(city);
    };

    return (
        <View style={styles.container}>
            <Text style={styles.headerText}>
                Hvilket område ønsker du å handle i?
            </Text>
            <View style={styles.listContainer}>
                <FlatList
                    data={CITY}
                    keyExtractor={(item, index) => index.toString()}
                    renderItem={({ item }) => (
                        <TouchableOpacity
                            style={[
                                styles.item,
                                item === selectedCity && styles.selectedItem
                            ]}
                            onPress={() => handleCityPress(item)}
                        >
                            <Text style={styles.itemText}>{item}</Text>
                        </TouchableOpacity>
                    )}
                />
            </View>

            <TouchableOpacity
                style={styles.button}
                onPress={() => navigation.navigate('Butikk')}
            >
                <Text style={styles.buttonText}>Gå videre</Text>
            </TouchableOpacity>

            <StatusBar style="auto" />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#eef2f3',  // Lysere bakgrunn
        padding: 20,
    },
    headerText: {
        fontSize: 26,
        fontWeight: '700',  // Tykker skrifttype
        color: '#2c3e50',  // Mørkeblå farge
        textAlign: 'center',
        paddingVertical: 15,
        marginBottom: 15,
        textTransform: 'uppercase',  // Store bokstaver
    },
    listContainer: {
        height: 220,
        backgroundColor: '#ffffff',  // Hvit bakgrunn for listen
        borderRadius: 12,
        width: '100%',
        padding: 15,
        shadowColor: '#000',  // Skyggeeffekt
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.1,
        shadowRadius: 8,
        marginBottom: 25,
    },
    item: {
        padding: 16,
        marginVertical: 6,
        borderRadius: 8,
        backgroundColor: '#d1f2eb',  // Lys grønn bakgrunn for elementene
        borderWidth: 1,
        borderColor: '#b2e0d3',  // Lysere grønn for kant
    },
    selectedItem: {
        backgroundColor: '#a8e6cf',  // Mørkere grønn for valgt element
    },
    itemText: {
        fontSize: 20,
        color: '#34495e',  // Mørk farge for teksten
    },
    button: {
        backgroundColor: '#2980b9',  // Blå knapp
        paddingVertical: 14,
        paddingHorizontal: 28,
        borderRadius: 8,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.2,
        shadowRadius: 6,
    },
    buttonText: {
        color: '#ffffff',
        fontSize: 18,
        fontWeight: '600',  // Tykker skrifttype
        textAlign: 'center',  // Sentrer tekst i knappen
    },
});
