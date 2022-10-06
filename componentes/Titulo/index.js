import React from 'react';
import { View, Text } from 'react-native';
import estilo from './estilo';

export default function Titulo() {
    return (
        <View style={estilo.boxTitulo}>
            <Text style={estilo.titulo}>Média de notas do ano</Text>
            <Text style={estilo.subtitulo}>Digite nos campos abaixo a média das notas trimestrais</Text>
        </View>
    )
}