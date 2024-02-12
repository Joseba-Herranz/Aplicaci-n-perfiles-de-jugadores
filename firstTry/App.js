// Importación de componentes y módulos necesarios de React Native
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import ListaEquipos from './components/istaequipos';
import ListaPokemon from './components/listapokemon';  
import PerfilPokemon from './components/perfilpokemon'; 
import { useState } from 'react';
import { Dimensions } from 'react-native';
import { useEffect } from 'react';

// Definición del componente principal de la aplicación
export default function App() {
  // Definición de arrays para representar los equipos y Pokémon de diferentes generaciones
  const generaciones = ['GEN1', 'GEN2', 'GEN3'];
  const Gen1 = ['BULBASAUR', 'CHARMANDER', 'SQUIRTLE', 'PIKACHU', 'EEVEE'];
  const Gen1Images = [1, 4, 7, 25, 133];
  const Gen2 = ['CHIKORITA', 'CYNDAQUIL', 'TOTODILE', 'LUGIA', 'HO-OH'];
  const Gen2Images = [152, 155, 158, 249, 250];

  // Estados para gestionar los Pokémon, imágenes y la imagen seleccionada
  const [pokemon, setPokemon] = useState(Gen1); 
  const [imagenes, setImagenes] = useState(Gen1Images);
  const [imagen, setImagen] = useState(0);

  // Función para cambiar entre generaciones de Pokémon
  const cambiar = (boton) => {
    if (boton === 'GEN1') {
      setPokemon(Gen1);
      setImagenes(Gen1Images);
    } else if (boton === 'GEN2') {
      setPokemon(Gen2);
      setImagenes(Gen2Images);
    }
  };

  // Función para cambiar la imagen seleccionada
  const botonimagen = (clave) => {
    setImagen(clave);
  };

  // Estado para almacenar el ancho de la pantalla
  const [screenWidth, setScreenWidth] = useState(Dimensions.get('window').width);

  // Efecto para manejar cambios en las dimensiones de la pantalla
  useEffect(() => {
    const handleDimensionsChange = ({ window }) => {
      setScreenWidth(window.width);
    };

    Dimensions.addEventListener('change', handleDimensionsChange);

    return () => {
      Dimensions.removeEventListener('change', handleDimensionsChange);
    };
  }, []);

  // Estilos de la aplicación
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      margin: 100,
      justifyContent: 'center',
    },
    medio: {
      flexDirection: screenWidth < 600 ? 'column' : 'row',
    },
  });

  // Renderización de la aplicación
  return (
    <View style={styles.container}>
      {/* Componente para mostrar la lista de generaciones */}
      <ListaEquipos generaciones={generaciones} cambiar={cambiar} tamanio={screenWidth} />

      {/* Componente para mostrar la lista de Pokémon y el perfil del Pokémon seleccionado */}
      <View style={styles.medio}>
        <ListaPokemon pokemon={pokemon} botonimagen={botonimagen} />
        <PerfilPokemon pokemonSeleccionado={imagen} imagenes={imagenes} pokemones={pokemones} />
      </View>
    </View>
  );
}
