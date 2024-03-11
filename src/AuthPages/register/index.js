import { useState } from "react";
import {
  Text,
  View,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";

import InputText from "../../components/formComponent/inputText";
import InputSubmit from "../../components/formComponent/inputSubmit";
import InputSelect from "../../components/formComponent/select";

const Register = () => {
  const [date, setDate] = useState(new Date());

  const data = [
    {
      value: "M",
      label: "Masculino",
    },
    {
      value: "F",
      label: "Femenino",
    },
  ];

  const onChangeDate = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setDate(currentDate);
  };

  return (
    <View style={styles.Container}>
      <KeyboardAvoidingView>
        <InputText icon="user" placeholder="Nome" />
        <InputText icon="address-card" placeholder="NIF" />
        <InputText icon="phone" placeholder="Telefone" keyboardNumeric={true} />
        <InputText icon="envelope" placeholder="Email" />
        <InputText icon="lock" placeholder="Senha" passwordInput={true} />
        <InputText
          icon="unlock"
          placeholder="Senha para confirmar"
          passwordInput={true}
        />

        <View
          style={{
            marginVertical: 10,
          }}
        >
          <InputSelect
            data={data}
            labelSelect="Género"
            focusColor="#127478"
            iconMap="Mars"
          />
        </View>

        <View style={styles.dateTime}>
          <Text
            style={{
              fontSize: 18,
              color: "grey",
            }}
          >
            Nascimento:
          </Text>

          <DateTimePicker
            value={date}
            made="datetime"
            display="default"
            onChange={onChangeDate}
          />
        </View>

        <InputSubmit text="Criar conta" />
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
  dateTime: {
    marginBottom: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-end",
    gap: 10,
  },
});

export default Register;
