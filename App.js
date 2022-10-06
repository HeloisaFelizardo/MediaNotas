import { StatusBar } from 'expo-status-bar';
import { View } from 'react-native';

import Titulo from './componentes/Titulo';
import TelaInicial from './componentes/TelaInicial';


export default function App() {
  return (
    <View>
      <Titulo />
      <TelaInicial />
    </View>
  );
}


