import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {  Image,ImageBackground,TextInput,Alert,Button,StyleSheet, Text, View } from 'react-native';



export default function App() {
  const [nome, setNome] = React.useState<string>("");
  const [profileNome, setProfileNome] = React.useState<string>("Usuário");
  const [desativado, isDesativado] = React.useState<boolean>(true)
  const imageBackground = { uri: "http://www.pixelstalk.net/wp-content/uploads/2016/06/Night-Sky-Wallpapers-HD-Free-Download.jpg"};
  const profileImage = {uri: "https://d2v9ipibika81v.cloudfront.net/uploads/sites/32/astronaut.jpg"};

  const checarTexto = (value:string) => {
    setNome(value);
    !value.trim() ? isDesativado(true) : isDesativado(false);
  };

  

  return (
    

    <View style={styles.container}>
      <ImageBackground source={imageBackground} style={styles.image}>
        <Image style = {styles.profileImage} source = {profileImage}/>
        <Text style = {styles.profileText}>Olá {profileNome} </Text>

        <Text style ={styles.text}> Digite o seu nome e aperte o botão para a mensagem!</Text>
        <StatusBar style="auto"/>
        <TextInput
          style={styles.input}
          onChangeText={value => checarTexto(value)}
          value={nome}
          placeholder="Digite o seu nome"
        />
      

      
    

      <Button
        title='Confirmar digitação'
        onPress={() => {setProfileNome(nome);
          Alert.alert("Seu nome é "+nome);
          setNome("")
        }}
        
        disabled={desativado}
        color="#941519"
      />
       
       
       </ImageBackground>
    </View>

    

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    height: 40,
    margin: 20,
    borderWidth: 1,
    padding: 10,
    color: '#fff'

  },
  image: {
    flex: 1,
    justifyContent:"center",
    width: '100%'
  },
  text: {
    color: '#fff',
    alignSelf:'center'
  },
  profileImage: {
    alignSelf:'center',
    borderRadius:150/2,
    width: 150,
    height:150
  },
  profileText: {
    color: '#ffa',
    alignSelf:'center',
    fontSize:30,
  }
});
