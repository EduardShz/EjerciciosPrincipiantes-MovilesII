import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  Alert,
  TouchableOpacity,
} from "react-native";
import { useState, useEffect, useRef } from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";

export default function App() {
  const [text1, setText1] = useState("");
  const [text2, setText2] = useState("");
  const [text3, setText3] = useState("");
  const [text4, setText4] = useState("");
  const [message, setMessage] = useState("");
  const [sentBtnDisabled, setSentBtnDisabled] = useState(true);
  const input2Ref = useRef();
  const input3Ref = useRef();
  const input4Ref = useRef();

  useEffect(() => {
    if (text1 !== "" && text2 !== "" && text3 !== "" && text4 !== "") {
      setSentBtnDisabled(false);
    } else {
      setSentBtnDisabled(true);
    }
  }, [text1, text2, text3, text4]);

  const isNumber = (value) => {
    return /^\d+(\.\d+)?$/.test(value.trim());
  };
  const setResult = () => {
    if (
      isNumber(text1) &&
      isNumber(text2) &&
      isNumber(text3) &&
      isNumber(text4)
    ) {
      setMessage(
        `Promedio: ${(
          (Number(text1) + Number(text2) + Number(text3) + Number(text4)) /
          4
        ).toFixed(2)}`
      );
    } else {
      Alert.alert("Error", "Solo se permiten números enteros y decimales");
      return;
    }
  };
  const deleteText1 = () => {
    setText1("");
  };
  const deleteText2 = () => {
    setText2("");
  };
  const deleteText3 = () => {
    setText3("");
  };
  const deleteText4 = () => {
    setText4("");
  };
  const deleteAll = () => {
    setText1("");
    setText2("");
    setText3("");
    setText4("");
    setMessage("");
  };
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Actividad 03</Text>

      <Text style={{ fontStyle: "italic" }}>
        <Text style={{ textDecorationLine: "underline", fontWeight: 600 }}>
          Instrucciones:
        </Text>
        <Text>
          &nbsp;Cree un programa que permita calcular el promedio de cuatro
          calificaciones ingresadas por el usuario
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
        <Text>Calificación 01</Text>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Escribe algo"
            value={text1}
            onChangeText={setText1}
            onSubmitEditing={() => input2Ref.current?.focus()}
          />
          <TouchableOpacity disabled={text1 == ""}>
            <MaterialCommunityIcons
              name="trash-can-outline"
              style={{ paddingBottom: 10 }}
              size={24}
              color={text1 == "" ? "gray" : "red"}
              onPress={deleteText1}
            />
          </TouchableOpacity>
        </View>
        <Text>Calificación 02</Text>
        <View style={styles.inputContainer}>
          <TextInput
            ref={input2Ref}
            style={styles.input}
            placeholder="Escriba la calificación"
            value={text2}
            onChangeText={setText2}
            onSubmitEditing={() => input3Ref.current?.focus()}
          />
          <TouchableOpacity disabled={text2 == ""}>
            <MaterialCommunityIcons
              name="trash-can-outline"
              style={{ paddingBottom: 10 }}
              size={24}
              color={text2 == "" ? "gray" : "red"}
              onPress={deleteText2}
            />
          </TouchableOpacity>
        </View>
        <Text>Calificación 03</Text>
        <View style={styles.inputContainer}>
          <TextInput
            ref={input3Ref}
            style={styles.input}
            placeholder="Escriba la calificación"
            value={text3}
            onChangeText={setText3}
            onSubmitEditing={() => input4Ref.current?.focus()}
          />
          <TouchableOpacity disabled={text3 == ""}>
            <MaterialCommunityIcons
              name="trash-can-outline"
              style={{ paddingBottom: 10 }}
              size={24}
              color={text3 == "" ? "gray" : "red"}
              onPress={deleteText3}
            />
          </TouchableOpacity>
        </View>
        <Text>Calificación 04</Text>
        <View style={styles.inputContainer}>
          <TextInput
            ref={input4Ref}
            style={styles.input}
            placeholder="Escriba la calificación"
            value={text4}
            onChangeText={setText4}
          />
          <TouchableOpacity disabled={text4 == ""}>
            <MaterialCommunityIcons
              name="trash-can-outline"
              style={{ paddingBottom: 10 }}
              size={24}
              color={text4 == "" ? "gray" : "red"}
              onPress={deleteText4}
            />
          </TouchableOpacity>
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
    paddingTop: 100,
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
