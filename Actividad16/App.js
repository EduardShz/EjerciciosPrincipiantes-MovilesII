import { StyleSheet, Text, View, TextInput, Button, Alert } from "react-native";
import { useState } from "react";

export default function App() {
  const [text1, setText1] = useState("");
  const [message, setMessage] = useState("");

  const setResult = () => {
    const feet = parseFloat(text1);
    const factor = 12;

    if (isNaN(feet)) {
      Alert.alert("Error", "Por favor introduce un número válido");
      return;
    }

    const inches = feet * factor;
    setMessage(`${feet} pies son ${inches.toFixed(2)} pulgadas.`);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Actividad 16</Text>

      <Text style={{ fontStyle: "italic" }}>
        <Text style={{ textDecorationLine: "underline", fontWeight: 600 }}>
          Instrucciones:
        </Text>
        <Text>
          &nbsp;Cree un programa que permita convertir X pies a N pulgadas. 1 pie = 12 pulgadas
        </Text>
      </Text>

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Ingresa la cantidad de pies"
          keyboardType="numeric"
          value={text1}
          onChangeText={setText1}
        />
      </View>

      <View style={styles.buttonsContainer}>
        <Button title="Convertir" color={"green"} onPress={setResult} />
      </View>

      <Text style={styles.output}>{message}</Text>

      <Text style={styles.footPage}>Por José Eduardo Hernández Sánchez</Text>
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
    marginTop: 100,
    marginBottom: 50,
    fontSize: 50,
    fontWeight: 600,
  },
  footPage: {
    alignSelf: "flex-end",
    paddingTop: 200,
    fontSize: 15,
    fontWeight: 400,
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: "#aaa",
    padding: 10,
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
