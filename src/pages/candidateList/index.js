import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";

import HeaderSearch from "../../components/homeComponent/headerSearch";

const CardCandidate = ({
  name,
  email,
  votesNumber,
  votesPercentage,
  navigation,
}) => {
  return (
    <View style={styles.cardCandidateContainer}>
      <View
        style={{
          width: "85%",
          flexDirection: "row",
          alignItems: "center",
          gap: 10,
        }}
      >
        <View style={styles.userIconProfile}>
          <FontAwesome5 name="user-alt" size={25} color="#fff" />
        </View>

        <View style={{ flex: 1 }}>
          <Text style={styles.name}>{name} </Text>
          <Text style={styles.email}>{email}</Text>
          <Text style={styles.votesInfo}>
            {votesNumber} votos | {votesPercentage}
          </Text>
        </View>
      </View>
      <TouchableOpacity
        style={styles.IconContainer}
        onPress={() => {
          navigation.navigate("CandidateStatistics");
        }}
      >
        <FontAwesome5 name="arrow-right" color="#fff" />
      </TouchableOpacity>
    </View>
  );
};

const CandidateList = ({ navigation }) => {
  return (
    <View style={styles.Container}>
      <HeaderSearch
        navigation={navigation}
        placeholder="Pesquisar candidato..."
        subTitle="Candidatos"
      />

      <ScrollView style={styles.scrollViewContainer}>
        <CardCandidate
          name="Josef Neto "
          email="josefneto@gmail.com"
          votesNumber="105"
          votesPercentage="59%"
          navigation={navigation}
        />

        <CardCandidate
          name="Aldair Neto "
          email="aldairneto@gmail.com"
          votesNumber="92"
          votesPercentage="39%"
          navigation={navigation}
        />

        <CardCandidate
          name="Julio Mucuta "
          email="juliomucuta@gmail.com"
          votesNumber="48"
          votesPercentage="21%"
          navigation={navigation}
        />

        <CardCandidate
          name="Carlos Alberto"
          email="carlosalberto@gmail.com"
          votesNumber="12"
          votesPercentage="7%"
          navigation={navigation}
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

export default CandidateList;
