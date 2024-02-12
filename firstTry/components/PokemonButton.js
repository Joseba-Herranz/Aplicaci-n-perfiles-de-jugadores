// Importación de componentes y módulos necesarios de React Native
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Pressable } from 'react-native';
import { useState } from 'react';

export default function PokemonButton({ texto, botonimagen, clave }) {  // Cambiado el nombre del componente
  // Estado para manejar si el botón está siendo "hovered" (apuntado con el mouse)
  const [isHovered, setIsHovered] = useState(false);

  // Funciones para manejar los eventos de "mouse enter" y "mouse leave" (hover)
  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  // Función para manejar el evento de presionar el botón
  const handlePress = () => {
    botonimagen(clave); // Llama a la función "botonimagen" con la clave seleccionada
  };

  // Estilos del componente utilizando StyleSheet
  const styles = StyleSheet.create({
    buttonStyle: {
      padding: 20,
      backgroundColor: isHovered ? 'lightgray' : 'white',
      borderRadius: 5,
      alignItems: 'center',
    },
  });

  // Renderización del componente
  return (
    <View>
      {/* Componente Pressable para crear un botón sensible a eventos táctiles */}
      <Pressable
        style={styles.buttonStyle}
        onPress={handlePress}          // Llama a la función "handlePress" cuando se presiona el botón
        onHoverIn={handleMouseEnter}  // Llama a la función "handleMouseEnter" cuando el mouse entra
        onHoverOut={handleMouseLeave} // Llama a la función "handleMouseLeave" cuando el mouse sale
      >
        <Text>{texto}</Text>  {/* Texto del botón */}
      </Pressable>
    </View>
  );
}
