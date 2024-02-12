// Importación de componentes y módulos necesarios de React Native
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Equipo from '../equipo/equipo'; // Importa el componente Equipo

// Definición del componente funcional "listaEquipos"
export default function listaEquipos({ equipos, cambiar, tamanio }) {
  // Estilos del componente utilizando StyleSheet
  const styles = StyleSheet.create({
    container: {
      alignItems: 'center',
      justifyContent: 'flex-start',
      flexDirection: tamanio < 600 ? 'column' : 'row',
      borderColor: 'black',
      borderWidth: 1,
      gap: 50,
      padding: 20,
    },
  });

  // Renderización del componente
  return (
    <View style={styles.container}>
      {/* Mapea sobre la lista de equipos y renderiza un componente Equipo para cada uno */}
      {equipos.map((item, index) => (
        <Equipo key={index} texto={item} cambiar={cambiar} />
      ))}
    </View>
  );
}
