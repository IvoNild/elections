import {
  StyleSheet,
  View,
  Text,
  Platform,
  TouchableOpacity,
} from "react-native";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";

const Header = ({ back, navigation }) => {
  return (
    <View style={styles.Container}>
      <View style={styles.IconLogo}>
        {back ? (
          <TouchableOpacity
            style={styles.Icon}
            onPress={() => navigation.goBack()}
          >
            <FontAwesome5
              name="arrow-left"
              size={16}
              style={styles.Icon}
              color={"#127478"}
            />
          </TouchableOpacity>
        ) : (
          <></>
        )}

        <Text style={styles.Logo}>
          {/* <Text style={{ fontSize: 25 }}>E</Text>-VOTING */}
        </Text>
      </View>
      <TouchableOpacity>
        <FontAwesome5 name="bell" size={20} color={"#fff"} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  Container: {
    height: 50,
    backgroundColor: "#127478",
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    paddingHorizontal: 20,
    paddingBottom: Platform.OS === "ios" ? 0 : 30,
  },
  IconLogo: {
    flexDirection: "row",
    alignItems: "center",
    gap: 20,
  },
  Icon: {
    backgroundColor: "#fff",
    padding: 4,
    borderRadius: 3,
  },
  Logo: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 18,
  },
});

export default Header;
