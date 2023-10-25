import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.headerStyle}>
        <Text style={styles.equipo}>Equipo 1</Text>
        <Text style={styles.equipo}>Equipo 2</Text>
        <Text style={styles.equipo}>Equipo 3</Text>
      </View>
      <View style={styles.bodyStyle}>
        <View >
          <Text style={styles.jugador}>Jugador 1.1</Text>
          <Text style={styles.jugador}>Jugador 1.2</Text>
          <Text style={styles.jugador}>Jugador 1.3</Text>
          <Text style={styles.jugador}>Jugador 1.4</Text>
          <Text style={styles.jugador}>Jugador 1.5</Text>
        </View>
        <Image source={{ uri: 'https://img.huffingtonpost.com/asset/5d02dc5c2100003711f21a1d.jpeg?ops=scalefit_720_noupscale&format=webp' }}style={styles.image }/>
      </View>
      <View style={styles.footerStyle}>
        <Text style={styles.url}>www.equipo.com</Text>
        <Text style={styles.num}>123456789</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 70,
    height: '90%',
    width: '80%',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    
  },
  headerStyle: {
    borderWidth: 2,
    borderBlockColor: 'blue',
    width: '100%',
    flexDirection: 'row',
    padding: 1,
    height: 75,
  },
  bodyStyle:{
    borderWidth:2,
    width: '100%',
    flex: 1,

  },
  footerStyle: {
    width: '100%',
    borderWidth:2,
    flexDirection: 'row',
  },

  equipo:{
    
    borderWidth: 1,
    height: 25,
    width: 100,
    maxWidth: 200,
    padding: 2,
    margin: 20,
  },

  jugador:{
    padding: 1,
    borderWidth: 1,
    width: 100,
    maxWidth: 200,
    height: 30,
    maxHeight: 200,
    marginTop: 50,
  },

  image:{
    borderWidth: 1,
    marginLeft: 150,
    marginTop: -350,
    width: '75%',
    height: '50%', 
  },
  url:{
    padding: 1,
    borderWidth: 1,
    width: 115,
    maxWidth: 225,
    height: 30,
    maxHeight: 200,
    marginTop: 20,
  },
  num: {
    borderWidth: 1,
    width: 100,
    maxWidth: 200,
    height: 30,
    maxHeight: 200,
    marginTop: 20,
    justifyContent: 'center',
    marginLeft: 300,
  }
  
});
