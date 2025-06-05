import { StyleSheet, Text, View, TextInput, Button, Alert } from "react-native";
import { useState, useEffect, useRef } from "react";

export default function App() {
  const [text1, setText1] = useState("");
  const [message, setMessage] = useState("");

  const setResult = () => {
    const n1 = (((8 * 15) * 50) * 1.02);
    setMessage(`Salario Neto: $${n1 - (n1 * 0.027)}`);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Actividad 13</Text>

      <Text style={{ fontStyle: "italic" }}>
        <Text style={{ textDecorationLine: "underline", fontWeight: 600 }}>
          Instrucciones:
        </Text>
        <Text>
          &nbsp;Un obrero trabaja 8 horas diarias por quincena y le pagan 50
          pesos la hora y de su salario tiene una compensación del 2% y un
          descuento del 1.5% del IMSS Y 1.2% del ISPT
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

      <View style={styles.buttonsContainer}>
        <Button title="Calcular Salario" color={"green"} onPress={setResult} />
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
