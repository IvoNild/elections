import { View, TextInput, StyleSheet } from "react-native";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";

export default function InputText(props) {
  return (
    <View style={styles.input}>
      <FontAwesome5 style={styles.inputIcon} name={props.icon} />
      <TextInput
        style={styles.inputArea}
        placeholder={props.placeholder}
        onChangeText={props.onInputChange}
        value={props.inputValue}
        secureTextEntry={props.passwordInput}
        keyboardType={props.keyboardNumeric ? "numeric" : undefined}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    flexDirection: "row",
    alignItems: "flex-end",
    marginTop: 10,
    // borderWidth: 1,
    // borderColor: '#BFBFBF',
    borderRadius: 5,
    backgroundColor: "#F4F4F4",
  },
  inputIcon: {
    color: "#7d7d7d",
    fontSize: 16,
    padding: 15,
  },
  inputArea: {
    width: "85%",
    paddingVertical: 15,
    color: "#7d7d7d",
  },
});
