import { ScrollView, TouchableOpacity, StyleSheet } from "react-native";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";

import InputText from "../../components/formComponent/inputText";
import InputSubmit from "../../components/formComponent/inputSubmit";

import { HeaderProfileBack } from "./changeName";

const ChangeEmail = ({ navigation }) => {
  return (
    <ScrollView style={styles.Container}>
      <HeaderProfileBack navigation={navigation} />

      <InputText
        icon="user"
        placeholder="Email"
        inputValue="ivodasilvapedro@gmail.com"
      />
      <InputText
        icon="lock"
        placeholder="Senha para confirmar"
        passwordInput={true}
      />
      <InputSubmit text="Salvar" />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 20,
  },
  backButton: {
    marginBottom: 10,
  },
});

export default ChangeEmail;
