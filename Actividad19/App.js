import { StyleSheet, Text, View } from "react-native";

export default function App() {
  const art = `
        JJ
      JJ
    JJ
      JJ
        JJJJJJJJJJJJ

    EEEEEEEEEEEEE
    EE         E         EE
    EE         E         EE
    EE                    EE
    EE                    EE
`;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Actividad 19</Text>

      <Text style={{ fontStyle: "italic" }}>
        <Text style={{ textDecorationLine: "underline", fontWeight: 600 }}>
          Instrucciones:
        </Text>
        <Text>
          &nbsp;Cree un programa que imprima sus iniciales en mayúsculas de imprenta,
          de manera que apunten hacia la parte inferior de la página (acostadas).
        </Text>
      </Text>

      <Text style={styles.output}>{art}</Text>

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
  output: {
    fontFamily: "monospace",
    fontSize: 16,
    marginTop: 20,
    whiteSpace: "pre",
  },
  footPage: {
    alignSelf: "flex-end",
    paddingTop: 100,
    fontSize: 15,
    fontWeight: 400,
  },
});
