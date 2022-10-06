import React, { useState } from 'react';
import { View, Text, Button, TextInput, ScrollView } from 'react-native';
import estilo from './estilo';

const TelaInicial = () => {

    const [media, setMedia] = useState('');
    const [nota1, setNota1] = useState('');
    const [nota2, setNota2] = useState('');
    const [nota3, setNota3] = useState('');
    const [nota4, setNota4] = useState('');
    const [status, setStatus] = useState('');
    const [flagInputFocus, setFlagInputFocus] = useState("");    

    const validarCampos = (numero) => {
        if (isNaN(numero)) {
            alert('Digite os valores');
            return false;
        }

        return true;
    }

    const gerarMedia = () => {        

        const not1 = parseInt(nota1);
        const not2 = parseInt(nota2);
        const not3 = parseInt(nota3);
        const not4 = parseInt(nota4);

        let somaNotas = (not1 + not2 + not3 + not4) / 4;

        if (somaNotas >= 6) {

            setStatus('Aprovado');            

        } else {

            setStatus('Reprovado');           
        
        }

        if (!validarCampos(not1, not2, not3, not4)) {
            return;
        }

        setMedia(somaNotas);
    }

    return (
        <ScrollView>
            <View style={estilo.tela}>
                <Text style={estilo.titulo}>
                    Se a média for maior ou igual a 6 o Status é aprovado.
                </Text>

                <View style={estilo.linhaInput}>
                    <Text>Notas 1º Trimestre: </Text>

                    <TextInput
                        textAlign="center"
                        keyboardType="number-pad"
                        maxLength={5}
                        autoFocus={true}
                        style={flagInputFocus === "txt_nota1" ? estilo.inputFocus : estilo.inputNormal}
                        onFocus={() => setFlagInputFocus("txt_nota1")}
                        onBlur={() => setFlagInputFocus("")}
                        value={nota1.toString()}
                        onChangeText={valor => setNota1(valor)} />
                </View>

                <View style={estilo.linhaInput}>
                    <Text>Notas 2º Trimestre: </Text>

                    <TextInput
                        textAlign="center"
                        keyboardType="number-pad"
                        maxLength={5}
                        autoFocus={true}
                        style={flagInputFocus === "txt_nota2" ? estilo.inputFocus : estilo.inputNormal}
                        onFocus={() => setFlagInputFocus("txt_nota2")}
                        onBlur={() => setFlagInputFocus("")}
                        value={nota2.toString()}
                        onChangeText={valor => setNota2(valor)} />
                </View>

                <View style={estilo.linhaInput}>
                    <Text>Notas 3º Trimestre: </Text>

                    <TextInput
                        textAlign="center"
                        keyboardType="number-pad"
                        maxLength={5}
                        autoFocus={true}
                        style={flagInputFocus === "txt_nota3" ? estilo.inputFocus : estilo.inputNormal}
                        onFocus={() => setFlagInputFocus("txt_nota3")}
                        onBlur={() => setFlagInputFocus("")}
                        value={nota3.toString()}
                        onChangeText={valor => setNota3(valor)} />
                </View>

                <View style={estilo.linhaInput}>
                    <Text>Notas 4º Trimestre: </Text>

                    <TextInput
                        textAlign="center"
                        keyboardType="number-pad"
                        maxLength={5}
                        autoFocus={true}
                        style={flagInputFocus === "txt_nota4" ? estilo.inputFocus : estilo.inputNormal}
                        onFocus={() => setFlagInputFocus("txt_nota4")}
                        onBlur={() => setFlagInputFocus("")}
                        value={nota4.toString()}
                        onChangeText={valor => setNota4(valor)} />
                </View>

                <View style={estilo.boxBotao}>
                    <Button title="Ver média" onPress={gerarMedia} color="#1f4f66" />
                </View>

                <View style={estilo.boxNumero}>
                    <Text style={estilo.numero}>{media}</Text>
                </View>

                <View>
                    <Text style={estilo.resultado}>{status}</Text>
                </View>

            </View>
        </ScrollView>
    )
}

export default TelaInicial;