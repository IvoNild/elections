import {
  ScrollView,
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
} from "react-native";
import Header from "../../components/universalComponents/header";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";

const ButtonCard = ({ navigation, Icon, infoNumber, infoText, pageLink }) => {
  return (
    <TouchableOpacity
      style={styles.CardContainer}
      onPress={() => navigation.navigate(pageLink)}
    >
      <View style={styles.iconInfo}>
        <View style={styles.IconContainer}>
          <FontAwesome5
            name={Icon}
            size={20}
            color="#9EDFE1"
            style={styles.Icon}
          />
        </View>

        <View>
          <Text style={styles.infoNumber}>{infoNumber}</Text>
          <Text style={styles.infoText}>{infoText}</Text>
        </View>
      </View>

      <FontAwesome5 name="angle-right" size={20} />
    </TouchableOpacity>
  );
};

const Enquery = ({ navigation }) => {
  return (
    <View style={styles.Container}>
      <Header back navigation={navigation} />

      <ScrollView
        style={styles.scrollContainer}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.infoAdmin}>
          <Text style={styles.infoAdminName}>José Manuel Ricardo Baptista</Text>
          <Text style={styles.infoAdminPosition}>Administrador</Text>
        </View>
        <View style={styles.Header}>
          <View>
            <Text style={styles.title}>
              Eleição para Representante Estudantil
            </Text>
            <Text style={styles.description}>
              Seja parte ativa na escolha do representante estudantil! Este
              inquérito busca eleger um aluno comprometido e dedicado a
              representar os interesses e necessidades dos estudantes. O
              representante terá a responsabilidade de ser o elo entre a
              administração escolar e os alunos, ajudando a moldar um ambiente
              acadêmico mais inclusivo e próspero.
            </Text>
            <Text style={styles.dates}>
              <FontAwesome5 name="calendar-alt" color="#000" /> 10-12-2022 /
              18-12-2022
            </Text>
          </View>
        </View>

        <ButtonCard
          Icon="users"
          infoNumber="10"
          infoText="Candidatos"
          navigation={navigation}
          pageLink="CandidateList"
        />
        <ButtonCard
          Icon="file-alt"
          infoNumber="221"
          infoText="Votos"
          navigation={navigation}
          pageLink="VotesList"
        />

        <ButtonCard
          Icon="male"
          infoNumber="100"
          infoText="Votos masculinos"
          navigation={navigation}
          pageLink="MaleVotes"
        />

        <ButtonCard
          Icon="female"
          infoNumber="21"
          infoText="Votos femeninos"
          navigation={navigation}
          pageLink="FemaleVotes"
        />

        <ButtonCard
          Icon="user-alt"
          infoNumber="20"
          infoText="Votos adolescentes"
          navigation={navigation}
          pageLink="TeenVotes"
        />

        <ButtonCard
          Icon="user-tie"
          infoNumber="101"
          infoText="Votos adultos"
          navigation={navigation}
          pageLink="AdultVotes"
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
    backgroundColor: "#127478",
  },
  scrollContainer: {
    padding: 20,
  },
  infoAdmin: {
    alignItems: "center",
    marginBottom: 20,
  },

  infoAdminName: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "bold",
  },
  infoAdminPosition: {
    color: "#E1E0E0",
  },
  Header: {
    width: "100%",
    borderRadius: 20,
    padding: 20,
    marginBottom: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "#9EDFE1",
  },
  title: {
    fontWeight: "bold",
    fontSize: 15,
    marginBottom: 10,
  },
  description: {
    color: "#7B7B7B",
  },
  dates: {
    color: "#7B7B7B",
    fontWeight: "bold",
    marginTop: 10,
    fontSize: 12,
  },
  CardContainer: {
    backgroundColor: "#9EDFE1",
    width: "100%",
    borderRadius: 20,
    padding: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",

    marginBottom: 10,
  },
  iconInfo: {
    gap: 10,
    flexDirection: "row",
    alignItems: "center",
  },
  IconContainer: {
    backgroundColor: "#127478",
    width: 40,
    height: 40,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 100,
  },
  infoNumber: {
    fontWeight: "bold",
    fontSize: 16,
  },
  infoText: {
    color: "#7B7B7B",
    fontSize: 15,
  },
});

export default Enquery;
