import React from "react";
//import { Linking } from "react-native";
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  Button,
  TouchableOpacity,
  Linking,
  Image,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function LoginForm({ text }) {
  return (
    //Si es más de un elemento, debe ir dentro de un View.
    <SafeAreaView backgroundColor="#6f4a8e">
      <View style={styles.container}>
        {/*<Text style={styles.title}>Pantalla de iniciar sesión</Text>*/}
        <Image
          style={styles.imagen}
          source={require("../../assets/Logo.png")}
        />
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

        {/*<Button
        //style={styles.boton}
        title="Enviar"
        color="#221f3b"
        onPress={() => console.log("Formulario iniciar sesión enviado")}
      />

      <Button
        style={styles.boton}
        title="Registrarse"
        color="#221f3b"
        marginTop
        onPress={() => console.log("Formulario de registro enviado")}
      />*/}

        <TouchableOpacity style={styles.boton}>
          <Text style={styles.titleButton}>{text}Iniciar sesión</Text>
        </TouchableOpacity>

        <Text
          style={{
            color: "white",
            fontSize: 15,
            margin: 20,
            textAlign: "center",
            textDecorationLine: "underline",
          }}
          onPress={() => Linking.openURL("http://google.com")}
        >
          Olvidaste la contraseña
        </Text>
        <TouchableOpacity style={styles.boton}>
          <Text style={styles.titleButton}>{text}Registrarse</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

//Agregando estilos a los componentes
const styles = StyleSheet.create({
  container: {
    backgroundColor: "#6f4a8e",
    alignItems: "center",
    marginTop: 80,
  },
  title: {
    textAlign: "center",
    fontSize: 28,
    fontWeight: "bold",
    marginTop: 50,
    marginBottom: 15,
  },
  input: {
    height: 60,
    width: 365,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderRadius: 10,
    backgroundColor: "white",
  },
  boton: {
    height: 60,
    width: 365,
    marginTop: 50,
    marginLeft: 20,
    marginRight: 20,
    borderWidth: 1,
    padding: 10,
    borderRadius: 10,
    backgroundColor: "#221f3b",
    //alignItems: "center",
  },
  titleButton: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 16,
  },
  imagen: {
    alignContent: "center",
    justifyContent: "center",
  },
});
