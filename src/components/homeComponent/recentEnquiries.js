import {
  View,
  StyleSheet,
  TouchableOpacity,
  Text,
  ScrollView,
} from "react-native";
import Title from "../universalComponents/title";
import ElectionCard from "../universalComponents/electionCard";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";

const RecenteEnqueries = ({ navigation }) => {
  return (
    <ScrollView style={styles.Container}>
      <View style={styles.Header}>
        <Title title="Eleições Recentes" />
        <TouchableOpacity
          onPress={() => navigation.navigate("EnquiriesList")}
          style={styles.ViewAllIcon}
        >
          <Text style={styles.ViewAllIconText}>Ver tudo</Text>
          <FontAwesome5 name="arrow-right" color="#127478" />
        </TouchableOpacity>
      </View>
      <View style={styles.electionCardList}>
        <ElectionCard
          title="Eleição turma A1 "
          description="Essa eleição tem o objectivo de reelejer um novo delegado da turma ..."
          dates=" 10-12-2022 / 18-12-2022"
          navigation={navigation}
        />
        <ElectionCard
          title="Presidente da associação "
          description="Essa eleição tem o objectivo de reelejer um novo presidente  ..."
          dates=" 13-04-2023 / 19-05-2023"
          navigation={navigation}
        />
        <ElectionCard
          title="Novo professor de TI "
          description=" Nova escolha de um professor de TI a pedido dos estudantes ..."
          dates=" 10-12-2022 / 18-12-2022"
          navigation={navigation}
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  Container: {
    padding: 30,
  },
  Header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  ViewAllIcon: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    color: "#127478",
  },
  ViewAllIconText: {
    fontWeight: "bold",
    color: "#127478",
  },
  electionCardList: {
    marginTop: 30,
  },
});

export default RecenteEnqueries;
