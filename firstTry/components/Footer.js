import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';

const Footer = () => {
    return (
      <View style={styles.footerStyle}>
        <Text style={styles.url}>www.equipo.com</Text>
        <Text style={styles.num}>123456789</Text>
      </View>
    );
  };

const styles = StyleSheet.create({
    footerStyle: {
       width: '100%',
       borderWidth:2,
       flexDirection: 'row',
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

export default Footer;