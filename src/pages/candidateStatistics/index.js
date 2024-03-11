import { View, Text, ScrollView, StyleSheet } from "react-native";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";

import Header from "../../components/universalComponents/header";

const CardInfoProfile = ({ label, value, customisedStyle }) => {
  return (
    <View style={[styles.cardInfoProfile, customisedStyle]}>
      <Text style={styles.label}>{label}</Text>
      <Text style={styles.value}>{value}</Text>
    </View>
  );
};

const CardStatistic = ({ Icon, numberInfo, textInfo }) => {
  return (
    <View style={styles.CardStatistic}>
      <View style={styles.CardStatisticIcon}>
        <FontAwesome5 name={Icon} color="#127478" size={25} />
      </View>
      <View style={styles.CardStatisticInfo}>
        <Text style={styles.numberInfo}>{numberInfo}</Text>
        <Text style={styles.textInfo}>{textInfo}</Text>
      </View>
    </View>
  );
};

const CandidateStatistics = ({ navigation }) => {
  return (
    <View style={styles.Container}>
      <Header back navigation={navigation} />
      <ScrollView
        style={styles.scrollContainer}
        showsVerticalScrollIndicator={false}
      >
        <View style={{ height: 50 }}></View>

        <View style={styles.personalInfoTop}>
          <View style={styles.profilePic}>
            <FontAwesome5 name="user-alt" size={30} color="#9EDFE1" />
          </View>
          <View style={{ alignItems: "center" }}>
            <Text style={styles.name}>Luís Neto</Text>
            <Text style={styles.email}>luisneto@gmail.com</Text>
            <Text style={styles.position}>92 Votos | 61%</Text>
          </View>
        </View>
        <View style={styles.personalInfo}>
          <CardInfoProfile label="Telefone" value="912891829" />
          <CardInfoProfile
            label="Género"
            value="Masculino"
            customisedStyle={{ borderTopWidth: 1, borderBottomWidth: 1 }}
          />
          <CardInfoProfile label="Nascimento" value="21.12.1992" />
        </View>

        <View style={styles.CardStatisticContainer}>
          <CardStatistic
            Icon="male"
            numberInfo="92"
            textInfo="Eleitores Masculinos"
          />
          <CardStatistic
            Icon="female"
            numberInfo="92"
            textInfo="Eleitores  Femeninos"
          />
          <CardStatistic
            Icon="user-alt"
            numberInfo="92"
            textInfo="Eleitores Adolescentes"
          />
          <CardStatistic
            Icon="user-tie"
            numberInfo="92"
            textInfo="Eleitores Adultos"
          />
        </View>

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
  personalInfoTop: {
    alignItems: "center",
    backgroundColor: "#9EDFE1",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    paddingBottom: 30,
  },
  profilePic: {
    marginTop: -40,
    marginBottom: 10,
    padding: 30,
    borderWidth: 1,
    borderRadius: 100,
    borderColor: "#9EDFE1",
    backgroundColor: "#127478",
  },

  name: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
  },
  email: {
    fontSize: 16,
    color: "#127478",
    marginBottom: 5,
    textAlign: "center",
  },
  position: {
    fontSize: 16,
    color: "#fff",
    fontWeight: "bold",
  },
  personalInfo: {
    borderWidth: 1,
    borderColor: "#9EDFE1",
    padding: 20,
    borderBottomEndRadius: 5,
    borderBottomStartRadius: 5,
    marginBottom: 30,
  },
  cardInfoProfile: {
    borderColor: "#9EDFE1",
    paddingVertical: 10,
  },
  label: {
    fontWeight: "bold",
    fontSize: 16,
    color: "#fff",
  },
  value: {
    color: "#9EDFE1",
    fontSize: 15,
  },
  CardStatistic: {
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 5,
    gap: 10,
    marginBottom: 5,
    width:'48%'
  },
  CardStatisticIcon: {
    backgroundColor: "#9EDFE1",
    borderRadius: 5,
    width:50,
    height:50, 
    justifyContent:'center',
    alignItems:'center'
  },
  CardStatisticInfo: {
      flex:1

  },
  numberInfo: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
  textInfo: {
    color: "#9EDFE1",
    
  },
  CardStatisticContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    gap: 10,
  },
});

export default CandidateStatistics;
