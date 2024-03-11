import { View, Text, StyleSheet, ScrollView } from "react-native";
import { useState } from "react";

import CheckBox from "react-native-check-box";
import InputText from "../../components/formComponent/inputText";
import InputSubmit from "../../components/formComponent/inputSubmit";
import SubTitle from "../../components/universalComponents/subTitle";

import { HeaderProfileBack } from "../profile/changeName";

const CardCheck = ({ name, email }) => {
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
      <View style={{ position: "absolute", left: 40, top: 5 }}>
        <Text style={{ fontWeight: "bold", fontSize: 18 }}>{name}</Text>
        <Text style={{ color: "grey", fontSize: 12 }}>{email}</Text>
      </View>
    </View>
  );
};

const AddVoter = ({ navigation }) => {
  return (
    <View style={styles.Container}>
      <HeaderProfileBack navigation={navigation} />
      <View>
        <View style={styles.SearchBar}>
          <InputText icon="search" placeholder="Pesquisar Eleitor por NIF ou nome  " />
        </View>
        <View style={{ paddingVertical: 20 }}>
          <SubTitle title="Selecionar Eleitores" />
        </View>
      </View>
      <ScrollView>
        <CardCheck name="Ivo Pedro" email="ivopedro@gmail.com" />
        <CardCheck name="José Baptista" email="josebaptista@gmail.com" />
        <CardCheck name="Afonso Joao" email="Afonsojoao@gmail.com" />
        <CardCheck name="Carlos Alberto" email="carlosalberto@gmail.com" />
        <CardCheck name="Elvis Jay" email="elvisjay@gmail.com" />
        <CardCheck name="Santos Luís" email="santosluis@gmail.com" />
        <CardCheck name="Bruno João" email="brunojoao@gmail.com" />
        <CardCheck name="Jessy Fernandes " email="jessyfernandes@gmail.com" />
        <CardCheck name="Ivo Pedro" email="ivopedro@gmail.com" />
        <CardCheck name="José Baptista" email="josebaptista@gmail.com" />
        <CardCheck name="Afonso Joao" email="Afonsojoao@gmail.com" />
        <CardCheck name="Carlos Alberto" email="carlosalberto@gmail.com" />
        <CardCheck name="Elvis Jay" email="elvisjay@gmail.com" />
        <CardCheck name="Santos Luís" email="santosluis@gmail.com" />
        <CardCheck name="Bruno João" email="brunojoao@gmail.com" />
        <CardCheck name="Jessy Fernandes " email="jessyfernandes@gmail.com" />
        <View style={{ height: 50 }}></View>
      </ScrollView>
      <View style={{ height: 100 }}>
        <InputSubmit
          text="Concluir"
          onPress={() => navigation.navigate("MyElections")}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 20,
  },

  CardCheckConteiner: {
    flexDirection: "row",
  },
});

export default AddVoter;
