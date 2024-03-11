import { Text, View, TouchableOpacity, StyleSheet } from "react-native";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import Enquery from "../../pages/enquiry";

const ElectionCard = ({ title, description, dates, navigation, EnqueryLink }) => {
  return (
    <View style={styles.Container}>
      <View>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.description}>{description}</Text>
        <Text style={styles.dates}>
          <FontAwesome5 name="calendar-alt" color="#000" /> {dates}
        </Text>
      </View>
      <TouchableOpacity
        style={styles.IconContainer}
        onPress={() => {
          navigation.navigate(EnqueryLink || 'Enquery');
        }}
      >
        <FontAwesome5 name="arrow-right" color="#fff" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  Container: {
    backgroundColor: "#E1E0E0",
    borderRadius: 20,
    padding: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-end",
    marginBottom: 15,
  },
  IconContainer: {
    backgroundColor: "#000",
    padding: 15,
    borderRadius: 8,
  },
  title: {
    fontWeight: "bold",
    fontSize: 15,
    marginBottom: 5,
  },
  description: {
    maxWidth: "90%",
    color: "#7B7B7B",
  },
  dates: {
    color: "#7B7B7B",
    fontWeight: "bold",
    marginTop: 10,
    fontSize: 12,
  },
});

export default ElectionCard;
