import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';

const Body = () => {
    return (
      <View style={styles.bodyStyle}>
        <View>
          <Text style={styles.jugador}>Jugador 1.1</Text>
          <Text style={styles.jugador}>Jugador 1.2</Text>
          <Text style={styles.jugador}>Jugador 1.3</Text>
          <Text style={styles.jugador}>Jugador 1.4</Text>
          <Text style={styles.jugador}>Jugador 1.5</Text>
        </View>
        <Image
          source={{ uri: 'https://img.huffingtonpost.com/asset/5d02dc5c2100003711f21a1d.jpeg?ops=scalefit_720_noupscale&format=webp' }}
          style={styles.image}
        />
      </View>
    );
  };

const styles = StyleSheet.create({
    bodyStyle:{
        borderWidth:2,
        width: '100%',
        flex: 1,
    
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
})

export default Body;