import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {  SafeAreaView,TextInput,Alert,Button,StyleSheet, Text, View } from 'react-native';


export default function App() {
  const [nome, setNome] = React.useState<string>("");
  const [desativado, isDesativado] = React.useState<boolean>(true)


  const checarTexto = (value:string) => {
    setNome(value);
    !value.trim() ? isDesativado(true) : isDesativado(false);
  };

  return (
    

    <View style={styles.container}>
      <Text> Digite o seu nome e aperte o botão para a mensagem!</Text>
      <StatusBar style="auto" />
      <TextInput
        style={styles.input}
        onChangeText={value => checarTexto(value)}

        value={nome}
        placeholder="Digite o seu nome"
      />
      
    

      <Button
        title='Clique em mim!'
        onPress={() => Alert.alert("Olá "+nome)}

        disabled={desativado}
        color="#941519"
      />
       
       

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

  },
});
