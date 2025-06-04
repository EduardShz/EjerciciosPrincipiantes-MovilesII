import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, TextInput, Button } from "react-native";
import { useState } from "react";

export default function App() {
  const [text, setText] = useState("");
  const [message, setMessage] = useState("");

  const setName = () => {
    setMessage(`Hola, ${text}!`);
  };
  const deleteMessage = () => {
    setMessage("");
    setText("");
  };
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Actividad 01</Text>

      <Text style={{ fontStyle: "italic"}}>
        <Text style={{ textDecorationLine: "underline" }}>Instrucciones:</Text>
        <Text>
          &nbsp;Cree un programa que solicite el nombre del usuario y lo salude
          por su nombre
        </Text>
      </Text>

      <View style={{ marginTop: 10}}>
        <Text style={{ textDecorationLine: "underline", fontStyle: "italic" }}>Resultado:</Text>
      </View>

      <TextInput
        style={styles.input}
        placeholder="Escriba su nombre"
        value={text}
        onChangeText={setText}
      />
      <View style={styles.buttonsContainer}>
        <Button
          title="Borrar"
          color={"red"}
          disabled={message == ""}
          onPress={deleteMessage}
        />
        <Button title="Enviar" color={"green"} onPress={setName} disabled={text == ""} />
      </View>
      <Text style={styles.output}>{message}</Text>

      <Text style={styles.footPage}>Por José Eduardo Hernández Sánchez</Text>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#fff",
    padding: 20,
  },
  title: {
    alignSelf: "center",
    marginBottom: 50,
    fontSize: 50,
    fontWeight: 600,
  },
  footPage: {
    alignSelf: "flex-end",
    paddingTop: 400,
    fontSize: 15,
    fontWeight: 400,
  },
  input: {
    borderWidth: 1,
    borderColor: "#aaa",
    padding: 10,
    marginTop: 10,
    marginBottom: 10,
    borderRadius: 5,
  },
  output: {
    alignSelf: "center",
    marginTop: 20,
    fontSize: 18,
  },
  buttonsContainer: {
    flexDirection: "row",
    justifyContent: "center",
  },
});
