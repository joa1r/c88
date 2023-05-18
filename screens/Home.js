import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet,
    SafeAreaView,
    TouchableOpacity,
    Platform,
    StatusBar
} from "react-native";

import { Text, View } from 'react-native';

export default class HomeScreen extends Component {
    render() {
        return (
            <View style={styles.container}>
                <SafeAreaView style={styles.droidSafeArea}/>
                    <View style={styles.titleBar}>
                        <Text style={styles.titleText}>App</Text>
                        <Text style={styles.titleText}>Estrelar</Text>
                    </View>
                    <TouchableOpacity style={styles.routCard}>
                        <Text style={styles.routeText}>Nava Espacial</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.routCard}>
                        <Text style={styles.routeText}>Mapa Estelar</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.routCard}>
                        <Text style={styles.routeText}>Imagens Diárias</Text>
                    </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    droidSafeArea: {
        marginTop: Platform.OS === 'android' ? statusbar.currentHeight : 0
    },
    routCard: {
        flex: 0.12,
        justifyContent: "center",
        alignItems: "center",
        margin: 10,
        marginLeft: 30,
        marginRight: 30,
       borderRadius: 100,
       backgroundColor: "white", 
    },
    titleBar: {
     flex: 0.5,
     justifyContent: "center",
     alignItems: "center"
    },
    titleText: {
        flex: 0.5,
        fountWeight: "bold",
        color: "white",
       },
       routeText: {
        fountSize: 25,
        fountWeight: "bold",
        color: "#D11583",
        justifyContent: "center",
        alignItems : "center"
       }
})