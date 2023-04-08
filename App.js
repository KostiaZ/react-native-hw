import React from "react";
import { StyleSheet, Text, View, Image, TextInput } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <Image style={styles.img} source={require("./assets/img/bg.jpg")}></Image>

      <View style={styles.formContainer}>
        <View style={styles.form}>
          <Text style={styles.title}>Регистрация</Text>

          <TextInput
            style={styles.input}
            placeholder="Логин"
            placeholderTextColor={"#BDBDBD"}
          ></TextInput>

          <TextInput
            style={styles.input}
            placeholder="Адрес электронной почты"
            placeholderTextColor={"#BDBDBD"}
            autoComplete="email"
            keyboardType="email-address"
          ></TextInput>

          <TextInput
            style={styles.input}
            placeholder="Пароль"
            placeholderTextColor={"#BDBDBD"}
          ></TextInput>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "flex-start",
  },
  img: {
    position: "absolute",
    width: "100%",
  },
  formContainer: {
    flex: 1,
    justifyContent: "flex-end",
  },
  form: {
    backgroundColor: "#fff",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
  },
  title: {
    textAlign: "center",
    fontSize: 30,
    color: "#212121",
    paddingBottom: 33,
  },
  input: {
    marginHorizontal: 16,
    padding: 15,
    backgroundColor: "#F6F6F6",
    borderWidth: 1,
    borderColor: "#E8E8E8",
    borderRadius: 8,
    marginBottom: 16,
  },
});
