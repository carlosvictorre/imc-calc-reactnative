import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from "react-native";

export default function App() {
  const [peso, setPeso] = useState("");
  const [altura, setAltura] = useState("");
  const [imc, setImc] = useState();

  const isValid = peso || altura !== "";

  function handleSubmit() {
    const alt = altura / 100;
    const imc = (peso / alt) * alt;

    if (isValid && imc !== undefined) {
      setImc(imc);
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Calcule seu IMC</Text>

      <TextInput
        style={styles.input}
        value={peso}
        onChangeText={(peso) => setPeso(peso)}
        placeholder="peso (kg)"
        keyboardType="numeric"
      />

      <TextInput
        style={styles.input}
        value={altura}
        onChangeText={(altura) => setAltura(altura)}
        placeholder="altura (cm)"
        keyboardType="numeric"
      />

      <TouchableOpacity
        style={styles.botao}
        disabled={isValid === true}
        onPress={handleSubmit}
      >
        <Text style={styles.botaoText}>Calcule</Text>
      </TouchableOpacity>

     { imc && <Text style={styles.TextImc}>Seu IMC é: {imc}</Text>}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 5,
    backgroundColor: "#00CCCC",
    marginTop: 2,
    alignItems: "center",
    padding: 24,
  },

  titulo: {
    fontSize: 30,
    marginTop: 30,
    textAlign: "center",
    color: "#fff",
  },
  input: {
    backgroundColor: "#FFFF",
    borderRadius: 15,
    margin: 15,
    padding: 15,
    color: "#000000",
    fontSize: 30,
    width: "100%",
  },

  botao: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 15,
    backgroundColor: "#FFFF",
    borderRadius: 10,
    height: 49,
  },

  botaoText: {
    color: "#000",
    fontSize: 16,
  },

  TextImc: {
    color: "#FFF",
    fontSize: 25,
    marginTop: 20,
  },
});
