import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  Button,
} from "react-native";

export default function App() {
  const [isKeyboardOpen, setIsKeyboardOpen] = useState(false);

  return (
    <View style={styles.container}>
      <Image style={styles.img} source={require("./assets/img/bg.jpg")}></Image>
      <View style={styles.formContainer}>
        <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : ""}>
          <View style={styles.form}>
            <View style={styles.photo}>
              <TouchableOpacity activeOpacity={0.7}>
                <Image source={require("./assets/img/add.png")}></Image>
              </TouchableOpacity>
            </View>
            <Text style={styles.title}>Регистрация</Text>
            <TextInput
              style={{
                ...styles.input,
                borderColor: isKeyboardOpen ? "#E8E8E8" : "#FF6C00",
              }}
              placeholder="Логин"
              placeholderTextColor={"#BDBDBD"}
              onFocus={() => setIsKeyboardOpen(false)}
            ></TextInput>
            <TextInput
              style={{
                ...styles.input,
                borderColor: isKeyboardOpen ? "#E8E8E8" : "#FF6C00",
              }}
              placeholder="Адрес электронной почты"
              placeholderTextColor={"#BDBDBD"}
              autoComplete="email"
              keyboardType="email-address"
              onFocus={() => setIsKeyboardOpen(false)}
            ></TextInput>
            <TextInput
              style={{
                ...styles.input,
                borderColor: isKeyboardOpen ? "#E8E8E8" : "#FF6C00",
              }}
              placeholder="Пароль"
              placeholderTextColor={"#BDBDBD"}
              secureTextEntry={true}
              onFocus={() => setIsKeyboardOpen(false)}
            ></TextInput>
            <TouchableOpacity>
              <Text style={styles.btnShow} activeOpacity={0.7}>
                Показать
              </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} activeOpacity={0.7}>
              <Text style={styles.buttonTitle}>Зарегистрироваться</Text>
            </TouchableOpacity>
          </View>
        </KeyboardAvoidingView>
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
  photo: {
    marginLeft: "auto",
    marginRight: "auto",
    width: 120,
    height: 120,
    backgroundColor: "#F6F6F6",
    marginBottom: 32,
    borderRadius: 16,
    top: -60,
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
    // borderColor: "#E8E8E8",
    borderRadius: 8,
    marginBottom: 16,
  },
  btnShow: {
    color: "#1B4371",
    fontSize: 16,
    position: "absolute",
    right: 32,
    top: -56,
  },
  button: {
    marginHorizontal: 16,
    backgroundColor: "#FF6C00",
    borderRadius: 100,
    padding: 16,
    marginTop: 43,
    marginBottom: 16,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonTitle: {
    fontSize: 16,
    color: "#fff",
  },
});
