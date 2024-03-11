import { ScrollView, TouchableOpacity, StyleSheet } from "react-native";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";

import InputText from "../../components/formComponent/inputText";
import InputSubmit from "../../components/formComponent/inputSubmit";

export function HeaderProfileBack({ navigation }) {
  return (
    <TouchableOpacity
      style={styles.backButton}
      onPress={() => navigation.goBack()}
    >
      <FontAwesome5 name="arrow-left" size={20} color={"#127478"} />
    </TouchableOpacity>
  );
}

const ChangeName = ({ navigation }) => {
  return (
    <ScrollView style={styles.Container}>
      <HeaderProfileBack navigation={navigation} />

      <InputText
        icon="user"
        placeholder="Nome"
        inputValue="Ivo Da Silva Pedro"
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

export default ChangeName;
