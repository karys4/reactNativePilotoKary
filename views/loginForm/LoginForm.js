import React from "react";
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  Button,
  Keyboard,
} from "react-native";

export default function LoginForm() {
  return (
    //Si es más de un elemento, debe ir dentro de un View.
    <View style={styles.container}>
      <Text style={styles.title}>Pantalla de iniciar sesión</Text>
      <TextInput
        style={styles.input}
        placeholder="Correo Electrónico"
        autoCapitalize="none"
      />
      <TextInput
        style={styles.input}
        placeholder="Contraseña"
        autoCapitalize="none"
        secureTextEntry={true}
      />
      <Button
        style={styles.boton}
        title="Enviar"
        onPress={() => console.log("Formulario iniciar sesión enviado")}
      />
      <Button
        style={styles.boton}
        title="Registrarse"
        onPress={() => console.log("Formulario de registro enviado")}
      />
    </View>
  );
}

//Agregando estilos a los componentes
const styles = StyleSheet.create({
  container: {
    //backgroundColor: "#6f4a8e",
  },
  title: {
    textAlign: "center",
    fontSize: 28,
    fontWeight: "bold",
    marginTop: 50,
    marginBottom: 15,
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderRadius: 10,
  },
  boton: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderRadius: 10,
  },
});
