import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';

const Header = () => {
    return (
      <View style={styles.headerStyle}>
        <Text style={styles.equipo}>Equipo 1</Text>
        <Text style={styles.equipo}>Equipo 2</Text>
        <Text style={styles.equipo}>Equipo 3</Text>
      </View>
    );
  };


const styles = StyleSheet.create({ 
    headerStyle: {
        borderWidth: 2,
        borderBlockColor: 'blue',
        width: '100%',
        flexDirection: 'row',
        padding: 1,
        height: 75,
    },
    equipo:{
        
        borderWidth: 1,
        height: 25,
        width: 100,
        maxWidth: 200,
        padding: 2,
        margin: 20,
    },
});

export default Header;