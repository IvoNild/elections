import {
  ScrollView,
  TouchableOpacity,
  StyleSheet,
  View,
  Text,
} from "react-native";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";

import { useState } from "react";

import InputText from "../../components/formComponent/inputText";
import InputSubmit from "../../components/formComponent/inputSubmit";
import InputSelect from "../../components/formComponent/select";
import DateTimePicker from "@react-native-community/datetimepicker";

import CheckBox from "react-native-check-box";


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

const CardCheck = ({ category }) => {
  const [isChecked, setIsChecked] = useState(false);

  return (
    <View style={styles.CardCheckConteiner}>
      <CheckBox
        style={{ flex: 1, padding: 10 }}
        isChecked={isChecked}
        onClick={() => setIsChecked(!isChecked)}
        // rightText="CheckBox"
        rightTextStyle={{ padding: 0, margin: 0 }}
      />
      <View style={{ position: "absolute", left: 40, top: 10 }}>
        <Text style={{ fontWeight: "bold", fontSize: 18 }}>{category}</Text>
      </View>
    </View>
  );
};

const NewElection = ({ navigation }) => {
  const [date, setDate] = useState(new Date());
  const onChangeDate = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setDate(currentDate);
  };

  const privacity = [
    {
      value: "private",
      label: "Privado",
    },
    {
      value: "Public",
      label: "Público",
    },
  ];

  return (
    <ScrollView style={styles.Container}>
      <HeaderProfileBack navigation={navigation} />

      <InputText icon="file" placeholder="Título" />

      <InputText icon="file-alt" placeholder="Descrição" />

      <View style={styles.dateTime}>
        <View
          style={{ justifyContent: "flex-start", alignItems: "flex-start" }}
        >
          <Text
            style={{
              fontSize: 18,
              color: "grey",
              marginBottom: 10,
            }}
          >
            Data de início:
          </Text>

          <DateTimePicker
            value={date}
            made="datetime"
            display="default"
            onChange={onChangeDate}
          />
        </View>
        <View>
          <Text
            style={{
              fontSize: 18,
              color: "grey",
              marginBottom: 10,
            }}
          >
            Data de início:
          </Text>

          <DateTimePicker
            value={date}
            made="datetime"
            display="default"
            onChange={onChangeDate}
          />
        </View>
      </View>

      <View
        style={{
          marginVertical: 10,
        }}
      >
        <InputSelect
          data={privacity}
          labelSelect="Privacidade"
          focusColor="#127478"
          iconMap="Mars"
        />
      </View>

      <View>


      <CardCheck category="Adultos" />
      <CardCheck category="Adolescentes" />
      <CardCheck category="Todos" />
      {/* <CardCheck category="Homens" /> */}
      {/* <CardCheck category="Mulheres" /> */}


      </View>

      <InputText
        icon="lock"
        placeholder="Senha para confirmar"
        passwordInput={true}
      />
      <InputSubmit
        text="Proximo"
        onPress={() => navigation.navigate("AddCandidates")}
      />
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
  dateTime: {
    marginVertical: 10,
    flexDirection: "row",
    // alignItems: "center",
    // justifyContent: "flex-start",
    gap: 10,
  },
});

export default NewElection;
