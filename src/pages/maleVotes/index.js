import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";

import HeaderSearch from "../../components/homeComponent/headerSearch";

import Voter from "../../components/universalComponents/voter";

const MaleVotes = ({ navigation }) => {
  return (
    <View style={styles.Container}>
      <HeaderSearch
        navigation={navigation}
        placeholder="Pesquisar Eleitor..."
        subTitle="Eleitores Masculinos"
      />

      <ScrollView style={styles.scrollViewContainer}>
        <Voter name="José Grande" email="josegrande@gmail.com" gender="Homem" />
        <Voter
          name="Joao Kenda"
          email="joaokenda@gmail.com"
          gender="Home"
        />
        <Voter name="Luis Neto" email="luisneto@gmail.com" gender="Homem" />
        <Voter
          name="Carlo Sampaio"
          email="carlosampaio@gmail.com"
          gender="Homem"
        />
        <Voter
          name="Emílio Afonso"
          email="emilioafonso@gmail.com"
          gender="Homem"
        />
        <Voter
          name="Jessico Loide"
          email="jessicoloide@gmail.com"
          gender="Homem"
        />
        <Voter
          name="Genivaldo André"
          email="genivaldoandre@gmail.com"
          gender="Homem"
        />
        <Voter
          name="Gildo Gonçalves"
          email="gildogoncavles@gmail.com"
          gender="Homem"
        />

        <View style={{ height: 50 }}></View>
      </ScrollView>
      <View style={{ height: 20 }}></View>
    </View>
  );
};

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  scrollViewContainer: {
    padding: 20,
  },
  cardCandidateContainer: {
    backgroundColor: "#E1E0E0",
    borderRadius: 20,
    padding: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-end",
    marginBottom: 15,
  },
  userIconProfile: {
    backgroundColor: "#000",
    padding: 15,
    borderRadius: 100,
  },
  IconContainer: {
    backgroundColor: "#000",
    padding: 15,
    borderRadius: 8,
  },
  name: {
    fontWeight: "bold",
    fontSize: 15,
    marginBottom: 2,
  },
  email: {
    color: "#7B7B7B",
  },
  votesInfo: {
    color: "#7B7B7B",
    fontWeight: "bold",
    marginTop: 5,
    fontSize: 12,
  },
});

export default MaleVotes;
