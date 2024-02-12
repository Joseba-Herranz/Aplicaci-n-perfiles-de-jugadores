// Importación de componentes y módulos necesarios de React Native
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Jugador from '../jugador'; // Importa el componente Jugador

// Definición del componente funcional "listaJugadores"
export default function listaJugadores({ jugadores, botonimagen }) {
  // Estilos del componente utilizando StyleSheet
  const styles = StyleSheet.create({
    container1: {
      padding: 10,
      gap: 30,
      borderColor: 'black',
      borderWidth: 1,
      borderTopWidth: 0,
    },
  });

  // Renderización del componente
  return (
    <View style={styles.container1}>
      {/* Mapea sobre la lista de jugadores y renderiza un componente Jugador para cada uno */}
      {jugadores.map((item, index) => (
        <Jugador key={index} texto={item} botonimagen={botonimagen} clave={index} />
      ))}
    </View>
  );
}
