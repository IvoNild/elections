import { View, Text, StyleSheet, ScrollView } from "react-native";
import { useState } from "react";

import CheckBox from "react-native-check-box";
import InputSubmit from "../../components/formComponent/inputSubmit";
import SubTitle from "../../components/universalComponents/subTitle";

import { RadioButton } from "react-native-paper";

import { HeaderProfileBack } from "../profile/changeName";

const CardCheck = ({ name, email, value,  selectedCandidate, onSelectCandidate  }) => {
  const [checked, setChecked] = useState(value);

  return (
    <View style={styles.CardCheckConteiner}>
      <RadioButton
        value="first"
        status={selectedCandidate  === value ? "checked" : "unchecked"}
        onPress={() => onSelectCandidate(value)}
      />
      <View style={{ position: "absolute", left: 40, top: 5 }}>
        <Text style={{ fontWeight: "bold", fontSize: 18 }}>{name}</Text>
        <Text style={{ color: "grey", fontSize: 12 }}>{email}</Text>
      </View>
    </View>
  );
};

const Vote = ({ navigation }) => {
  const candidatesData = [
    {
      name: "Pedro Vunge",
      email: "pedrovunge@gmail.com",
      value: "first",
    },  
    {
      name: "José Batpista",
      email: "josebaptista@gmail.com",
      value: "second",
    },
    {
      name: "Aldair Neto",
      email: "aldairneto@gmail.com",
      value: "third",
    },
    {
      name: "Bruno Gaspar",
      email: "brunogaspar@gmail.com",
      value: "fourth",
    },
    
  ];

  const [selectedCandidate, setSelectedCandidate] = useState(null);

  const handleSelectCandidate = (value) => {
    setSelectedCandidate(value === selectedCandidate ? null : value);
  };

  return (
    <View style={styles.Container}>
      <HeaderProfileBack navigation={navigation} />

      <View>
        {/* <View style={styles.SearchBar}>
          <InputText icon="search" placeholder="Pesqusiar Candidato " />
        </View> */}
        <View style={{ paddingVertical: 20 }}>
          <SubTitle title="Selecione um candidato para votar" />
        </View>
      </View>

      <ScrollView>
        {candidatesData.map((item, index) => (
          <CardCheck
            name={item.name}
            email={item.email}
            value={item.value}
            selectedCandidate={selectedCandidate}
            onSelectCandidate={handleSelectCandidate}
            key={index}
          />
        ))}

        <View style={{ height: 50 }}></View>
      </ScrollView>
      <View style={{ height: 100 }}>
        <InputSubmit
          text="Votar"
          onPress={() => navigation.navigate("VoteCompleted")}
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

export default Vote;
