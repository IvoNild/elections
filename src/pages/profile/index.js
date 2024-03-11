import { View, Text, ScrollView, StyleSheet, TouchableOpacity } from "react-native";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";


const CardInfoProfile = ({ label, value, customisedStyle }) => {
  return (
    <View style={[styles.cardInfoProfile, customisedStyle]}>
      <Text style={styles.label}>{label}</Text>
      <Text style={styles.value}>{value}</Text>
    </View>
  );
};

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



const Profile = ({ navigation }) => {
  return (
    <View style={styles.Container}>
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

        <ButtonCard
          Icon="user"
          infoNumber="Nome"
          infoText="Alterar nome"
          navigation={navigation}
          pageLink="ChangeName"
        />
        <ButtonCard
          Icon="envelope"
          infoNumber="Email"
          infoText="Alterar email"
          navigation={navigation}
          pageLink="ChangeEmail"
        />

        <ButtonCard
          Icon="lock"
          infoNumber="Senha"
          infoText="Alterar senha"
          navigation={navigation}
          pageLink="ChangePassword"
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

export default Profile;
