import { View, Text, ScrollView, StyleSheet } from "react-native";

import ElectionCard from "../../components/universalComponents/electionCard";
import HeaderSearch from "../../components/homeComponent/headerSearch";

const EnquiriesList = ({ navigation }) => {
  return (
    <View style={styles.Container}>
      <HeaderSearch
        navigation={navigation}
        placeholder="Pesquisar Eleições..."
        subTitle="Eleições"
      />

      <ScrollView style={{ padding: 20 }}>
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

        <View style={{ height: 50 }}></View>
      </ScrollView>
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
});

export default EnquiriesList;
