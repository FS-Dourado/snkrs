import React from "react";
import {View, TouchableOpacity, StyleSheet, Text, Image} from "react-native";

// Criando a função e recebendo por props o titulo valor e imagem do jogo
export default function Novos({titulo, valor, imagem}) {
    return (
        <TouchableOpacity style={estilo.containerJogos}>
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
    containerJogos: {
       
        borderRadius: 10,
        marginTop: 8,
        padding: 10,
        margin: 2,
        alignItems: "center",
        justifyContent: "space-between",
        width: 300,
        height: 250,
        marginLeft: 8,
    },
    titulo: {
        color: "black",
        fontSize: 20,
        marginLeft: 1,
        marginTop: 2,
        fontWeight: "bold",
    },
    valor: {
        color: "green",
        fontSize: 15,
        marginLeft: 20,
        marginTop: 2,
        fontWeight: "bold",
    },
    images: {
        width: "100%",
        height: 200,
        borderRadius: 3,
        borderRadius: 10
    },

})