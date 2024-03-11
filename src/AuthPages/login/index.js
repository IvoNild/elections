import {
  Text,
  View,
  StyleSheet,
  KeyboardAvoidingView,
} from "react-native";

import InputText from "../../components/formComponent/inputText";
import InputSubmit from "../../components/formComponent/inputSubmit";

const Login = () => {
  return (
    <View style={styles.Container}>
      <KeyboardAvoidingView>
        <InputText icon="envelope" placeholder="Email" />
        <InputText icon="lock" placeholder="Senha" passwordInput={true} />
        <InputSubmit text="Entrar"  />
      </KeyboardAvoidingView>
    </View>
  );
};

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff",
    gap: 10,
    padding: 20,
  },
});

export default Login;
