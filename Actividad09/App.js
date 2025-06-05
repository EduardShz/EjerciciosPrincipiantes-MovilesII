import { StyleSheet, Text, View, TextInput, Button, Alert } from "react-native";
import { useState, useEffect, useRef } from "react";

export default function App() {
  const [text1, setText1] = useState("");
  const [text2, setText2] = useState("");
  const [message, setMessage] = useState("");
  const [sentBtnDisabled, setSentBtnDisabled] = useState(true);
  const input2Ref = useRef();

  useEffect(() => {
    if (text1 !== "" && text2 !== "") {
      setSentBtnDisabled(false);
    } else {
      setSentBtnDisabled(true);
    }
  }, [text1, text2]);

  const isNumber = (value) => {
    return /^\d+(\.\d+)?$/.test(value.trim());
  };
  const setResult = () => {
    if (isNumber(text1) && isNumber(text2)) {
      setMessage(
        `Área del Triángulo: ${(text1 * text2) / 2}`
      );
    } else {
      Alert.alert("Error", "Solo se permiten números enteros y decimales");
      return;
    }
  };
  const deleteAll = () => {
    setText1("");
    setText2("");
    setMessage("");
  };
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Actividad 09</Text>

      <Text style={{ fontStyle: "italic" }}>
        <Text style={{ textDecorationLine: "underline", fontWeight: 600 }}>
          Instrucciones:
        </Text>
        <Text>
          &nbsp;Cree un programa que solicite al usuario la base de un triángulo
          y su altura, calcule el área del triángulo
        </Text>
      </Text>

      <View style={{ marginTop: 10, marginBottom: 10 }}>
        <Text
          style={{
            textDecorationLine: "underline",
            fontStyle: "italic",
            fontWeight: 600,
          }}
        >
          Resultado:
        </Text>
      </View>

      <View>
        <Text>Altura</Text>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Escriba la cantidad"
            value={text1}
            onChangeText={setText1}
            onSubmitEditing={() => input2Ref.current?.focus()}
          />
        </View>
        <Text>Base</Text>
        <View style={styles.inputContainer}>
          <TextInput
            ref={input2Ref}
            style={styles.input}
            placeholder="Escriba la cantidad"
            value={text2}
            onChangeText={setText2}
          />
        </View>
      </View>
      <View style={styles.buttonsContainer}>
        <Button title="Borrar Todo" color={"red"} onPress={deleteAll} />
        <Button
          title="Calcular"
          color={"green"}
          onPress={setResult}
          disabled={sentBtnDisabled}
        />
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
