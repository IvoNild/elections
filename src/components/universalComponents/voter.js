import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";

const Voter = ({ name, email, gender }) => {
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
          <Text style={styles.gender}>{gender}</Text>
        </View>
      </View>
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
  gender: {
    color: "#7B7B7B",
    fontWeight: "bold",
  },
});

export default Voter;
