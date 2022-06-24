import React from 'react';
import {View, StyleSheet, Text} from "react-native";

export default function Air() {
    return (
        <View style={estilo.containerDest}>
            <Text style={estilo.dest}>Air Force</Text>
        </View>
    )
}

const estilo = StyleSheet.create({
    dest: {
        color: "black",
        fontSize: 20,
        fontWeight: "bold"
    },
    containerDest: {
        marginLeft: 15,
        marginTop: 10,
        padding: 5
    }

})
