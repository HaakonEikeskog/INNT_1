import React, { useState } from 'react';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { useNavigation } from '@react-navigation/native';
import { PLAGG } from '../data/const';  // Importer COUNTRIES fra dataen din

export default function FetchListScreen() {
    const navigation = useNavigation();
    const [selectedCountry, setSelectedCountry] = useState(null);  // Hold styr på valgt land/aktivitet

    const handlePress = (country) => {
        setSelectedCountry(country);  // Oppdater valgt land/aktivitet
    };

    return (
        <View style={styles.container}>
            <Text style={styles.headerText}>
                Hvilket plagg ønsker du å handle?
            </Text>
            <View style={styles.listContainer}>
                <ScrollView>
                    {/* Bruk map til å iterere over COUNTRIES arrayet */}
                    {PLAGG.map((country, index) => (
                        <TouchableOpacity
                            key={index}
                            style={[
                                styles.item,
                                country === selectedCountry && styles.selectedItem  // Endre stil hvis valgt
                            ]}
                            onPress={() => handlePress(country)}  // Håndter trykk
                        >
                            <Text style={styles.itemText}>{country}</Text>
                        </TouchableOpacity>
                    ))}
                </ScrollView>
            </View>

            {/* Legg til en knapp for å navigere til FetchList */}
            <TouchableOpacity
                style={styles.button}
                onPress={() => navigation.navigate('Plagg')}  // Naviger til FetchList-skjermen
            >
                <Text style={styles.buttonText}>Velg prisklasse</Text>
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
