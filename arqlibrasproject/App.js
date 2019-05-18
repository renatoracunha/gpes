import React, {Component} from 'react';
import {
  StyleSheet, 
  Text, 
  TextInput,
  TouchableOpacity,
  Image,
  View} from 'react-native';

type Props = {};
export default class App extends Component<Props> {
  render() {
    let pic = {
      url: 'https://pngimage.net/wp-content/uploads/2018/06/logo-adidas-branco-png-2.png',
    }
    return (
      <View style={styles.container}>
          <Image source={pic} style={styles.imagemCabecalho}></Image>
          <TextInput placeholder="Digite uma palavra" style={styles.input}/>
          <TouchableOpacity><Text>Adicionar</Text></TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
    alignItems: 'center'  
  },
  input: {
    color: '#F5F5F5',
    height: 50,
    width: "100%",
    backgroundColor: "#F5F5F5",
  },
  imagemCabecalho: {
    height: 70,
    width: 70
  }
});
