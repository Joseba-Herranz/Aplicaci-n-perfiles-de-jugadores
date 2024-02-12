/// Importación de componentes y módulos necesarios de React Native
import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

export default function PerfilPokemon({ pokemonSeleccionado, imagenes, pokemones }) {  // Cambiado el nombre del componente y parámetro
  // Obtiene el índice del Pokémon seleccionado
  const pokemonSeleccionadoIndex = pokemonSeleccionado;

  // Renderización del componente
  return (
    <View style={styles.perfilStyle}>
      {/* Imagen del Pokémon obtenida de la URL proporcionada por la PokeAPI */}
      <Image
        source={{
          uri: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${imagenes[pokemonSeleccionadoIndex]}.png`,
        }}
        style={styles.imagenPokemonStyle}
      />
      {/* Nombre del Pokémon */}
      <Text style={styles.textNombreStyle}>{pokemones[pokemonSeleccionadoIndex]}</Text>
    </View>
  );
}

// Estilos del componente utilizando StyleSheet
const styles = StyleSheet.create({
  perfilStyle: {
    flex: 1,
    borderColor: 'black',
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderTopWidth: 0,
  },
  imagenPokemonStyle: {
    width: 150,
    height: 150,
    borderRadius: 75,
  },
  textNombreStyle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 10,
    color: 'black',
  },
});
