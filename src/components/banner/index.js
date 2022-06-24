import React from "react";
import {View, TouchableOpacity, StyleSheet, Text, Image} from "react-native";

// Criando a função e recebendo por props o titulo valor e imagem do jogo
export default function Banner({titulo, valor, imagem}) {
    return (
        <TouchableOpacity style={estilo.containerBanner}>
            <Image
            style={estilo.images}
            source={require(`../../imagens/${imagem}`)}
            />

            <Text style={estilo.titulo}>{titulo}</Text>
            <Text style={estilo.valor}>{valor}</Text>
            </TouchableOpacity>
    );
}


const estilo = StyleSheet.create({
    containerBanner: {
       
        padding: 2,
        alignItems: "center",
        justifyContent: "space-between",
        width: "70%",
        height: 400,
        marginLeft: 60,
    },
    titulo: {
        color: "black",
        fontSize: 11,
        marginLeft: 1,
        marginTop: 2,
        fontWeight: "bold",
    },
    valor: {
        color: "green",
        fontSize: 12,
        marginLeft: 20,
        marginTop: 2,
        fontWeight: "bold",
    },
    images: {
        width: 420 ,
        height: "100%",
        borderRadius: 10
    },

})