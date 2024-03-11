import { ScrollView, TouchableOpacity, StyleSheet } from "react-native";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";

import InputText from "../../components/formComponent/inputText";
import InputSubmit from "../../components/formComponent/inputSubmit";

import { HeaderProfileBack } from "./changeName";

const ChangePassword = ({ navigation }) => {
  return (
    <ScrollView style={styles.Container}>
      <HeaderProfileBack navigation={navigation} />

      <InputText
        icon="unlock"
        placeholder="Senha actual"
        passwordInput={true}
      />
      <InputText icon="lock" placeholder="Nova senha" passwordInput={true} />
      <InputText
        icon="lock"
        placeholder="Confirmar nova senha "
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

export default ChangePassword;
