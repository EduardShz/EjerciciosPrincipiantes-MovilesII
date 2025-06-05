import { StyleSheet, Text, View, TextInput, Button, Alert } from "react-native";
import { useState, useEffect, useRef } from "react";

export default function App() {
  const [text1, setText1] = useState("");
  const [text2, setText2] = useState("");
  const [message, setMessage] = useState("");
  const [sentBtnDisabled, setSentBtnDisabled] = useState(true);
  useEffect(() => {
    if (text1 !== "") {
      setSentBtnDisabled(false);
    } else {
      setSentBtnDisabled(true);
    }
  }, [text1]);

  const isNumber = (value) => {
    return /^\d+?$/.test(value.trim());
  };
  const setResult = () => {
    const n1 = Number(text1);

    if (isNumber(text1)) {
      let decadas = n1 % 10;
      if (decadas === 0) {
        decadas = n1 / 10;
      } else {
        decadas = (n1 - decadas) / 10;
      }
      let lustros = n1 % 5;
      if (lustros === 0) {
        lustros = n1 / 5;
      } else {
        lustros = (n1 - lustros) / 5;
      }

      setMessage(
        `Décadas: ${decadas} \nLustros: ${lustros} \nAños: ${n1} \nMeses: ${
          n1 * 12
        } \nSemanas: ${n1 * 52} \nDías: ${n1 * 365} \nHoras: ${
          n1 * 365 * 24
        } \nMinutos: ${n1 * 365 * 24 * 60} \n`
      );
    } else {
      Alert.alert("Error", "Solo se permiten números enteros positivos");
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
      <Text style={styles.title}>Actividad 07</Text>

      <Text style={{ fontStyle: "italic" }}>
        <Text style={{ textDecorationLine: "underline", fontWeight: 600 }}>
          Instrucciones:
        </Text>
        <Text>
          &nbsp;Cree un programa que muestre que solicite al usuario su edad y
          el programa le muestre las decadas, lustros, años, meses, semanas,
          días, horas y minutos vividos
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
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Ingrese su edad"
            value={text1}
            onChangeText={setText1}
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
