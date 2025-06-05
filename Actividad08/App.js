import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, TextInput, Button, Alert } from "react-native";
import { useState, useEffect } from "react";

export default function App() {
  const [text, setText] = useState("");
  const [message, setMessage] = useState("");
  const [sentBtnDisabled, setSentBtnDisabled] = useState(true);

  useEffect(() => {
    if (text !== "") {
      setSentBtnDisabled(false);
    } else {
      setSentBtnDisabled(true);
    }
  }, [text]);

  const isNumber = (value) => {
    return /^\d+(\.\d+)?$/.test(value.trim());
  };
  const setResult = () => {
    const n1 = Number(text);

    if (isNumber(text)) {
      setMessage(`Perímetro del cuadrado: ${n1 * 4} \nÁrea del cuadrado ${n1 * n1}`);
    } else {
      Alert.alert("Error", "Solo se permiten números enteros y decimales");
      return;
    }
  };
  const deleteMessage = () => {
    setMessage("");
    setText("");
  };
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Actividad 08</Text>

      <Text style={{ fontStyle: "italic" }}>
        <Text style={{ textDecorationLine: "underline" }}>Instrucciones:</Text>
        <Text>
          &nbsp;Cree un programa que solicite al usuario el valor de un lado de
          un cuadrado, y calcule el área y el perímetro de un cuadrado
        </Text>
      </Text>

      <View style={{ marginTop: 10 }}>
        <Text style={{ textDecorationLine: "underline", fontStyle: "italic" }}>
          Resultado:
        </Text>
      </View>

      <TextInput
        style={styles.input}
        placeholder="Escriba la cantidad a calcular"
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
        <Button
          title="Calcular"
          color={"green"}
          onPress={setResult}
          disabled={sentBtnDisabled}
        />
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
    textAlign: "center",
    alignSelf: "center",
    marginTop: 20,
    fontSize: 18,
  },
  buttonsContainer: {
    flexDirection: "row",
    justifyContent: "center",
  },
});
