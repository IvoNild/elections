import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
} from "react-native";

import InputText from "../../components/formComponent/inputText";
import ElectionCard from "../../components/universalComponents/electionCard";
import SubTitle from "../../components/universalComponents/subTitle";

import FontAwesome5 from "react-native-vector-icons/FontAwesome5";

const MyElections = ({ navigation }) => {
  return (
    <View style={styles.Container}>
      <View>
        <View style={styles.SearchBar}>
          <InputText icon="search" placeholder="Pesqusiar Eleição " />
        </View>
        <View style={{ paddingHorizontal: 20, paddingBottom: 20 }}>
          <SubTitle title="Minhas eleições" />
        </View>
      </View>

      <ScrollView style={{ padding: 20 }} showsVerticalScrollIndicator={false}>
        <ElectionCard
          title="Eleição turma A1 "
          description="Essa eleição tem o objectivo de reelejer um novo delegado da turma ..."
          dates=" 10-12-2022 / 18-12-2022"
          navigation={navigation}
          EnqueryLink="MyEnquery"
        />
        <ElectionCard
          title="Presidente da associação "
          description="Essa eleição tem o objectivo de reelejer um novo presidente  ..."
          dates=" 13-04-2023 / 19-05-2023"
          navigation={navigation}
          EnqueryLink="MyEnquery"
        />
        <ElectionCard
          title="Novo professor de TI "
          description=" Nova escolha de um professor de TI a pedido dos estudantes ..."
          dates=" 10-12-2022 / 18-12-2022"
          navigation={navigation}
          EnqueryLink="MyEnquery"
        />

        <ElectionCard
          title="Eleição turma A1 "
          description="Essa eleição tem o objectivo de reelejer um novo delegado da turma ..."
          dates=" 10-12-2022 / 18-12-2022"
          navigation={navigation}
          EnqueryLink="MyEnquery"
        />
        <ElectionCard
          title="Presidente da associação "
          description="Essa eleição tem o objectivo de reelejer um novo presidente  ..."
          dates=" 13-04-2023 / 19-05-2023"
          navigation={navigation}
          EnqueryLink="MyEnquery"
        />
        <ElectionCard
          title="Novo professor de TI "
          description=" Nova escolha de um professor de TI a pedido dos estudantes ..."
          dates=" 10-12-2022 / 18-12-2022"
          navigation={navigation}
          EnqueryLink="MyEnquery"
        />

        <View style={{ height: 100 }}></View>
      </ScrollView>

      <TouchableOpacity
        style={styles.IconPlus}
        onPress={() => navigation.navigate("NewElection")}
      >
        <FontAwesome5
          name="plus"
          size={25}
          color="#9EDFE1"
          style={styles.Icon}
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  SearchBar: {
    padding: 20,
  },
  IconPlus: {
    backgroundColor: "#127478",
    position: "absolute",
    padding: 20,
    bottom: 30,
    right: 30,
    borderRadius: 100,
  },
});

export default MyElections;
