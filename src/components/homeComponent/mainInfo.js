import { View, Text, StyleSheet } from "react-native";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";

const Card = ({ height, Icon, direction, infoNumber, infoText }) => {
  return (
    <>
      <View
        style={[
          styles.CardContainer,
          direction === "row"
            ? styles.CardContainerRow
            : styles.CardContainerColumn,
          { height: height, flexDirection: direction },
        ]}
      >
        <View style={styles.IconContainer}>
          <FontAwesome5
            name={Icon}
            size={20}
            color="#127478"
            style={styles.Icon}
          />
        </View>

        <View>
          <Text style={styles.infoNumber}>{infoNumber}+</Text>
          <Text style={styles.infoText}>{infoText}</Text>
        </View>
      </View>
      <View></View>
    </>
  );
};

const MainInfo = () => {
  return (
    <View style={styles.Container}>
      <View style={[styles.ContainerBox, { paddingRight: 5 }]}>
        <Card
          height={160}
          Icon="file-alt"
          infoNumber={283}
          infoText="Eleições"
        />
      </View>
      <View style={[styles.ContainerBox, { paddingLeft: 5 }]}>
        <Card
          height={75}
          Icon="users"
          direction="row"
          infoNumber={102}
          infoText="Usuários"
        />
        <Card
          height={75}
          Icon="file-invoice"
          direction="row"
          infoNumber={3222}
          infoText="Votações"
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  Container: {
    height: 250,
    borderBottomEndRadius: 30,
    borderBottomStartRadius: 30,
    backgroundColor: "#127478",
    flexDirection: "row",
    padding: 20,
  },

  ContainerBox: {
    width: "50%",
    gap: 5,
  },

  CardContainer: {
    backgroundColor: "#fff",
    width: "100%",
    borderRadius: 10,
  },

  CardContainerRow: {
    padding: 20,
    gap: 10,
    alignItems: "center",
  },
  CardContainerColumn: {
    padding: 20,
    justifyContent: "space-between",
  },
  IconContainer: {
    backgroundColor: "#9EDFE1",
    width: 40,
    height: 40,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 100,
  },
  infoNumber: {
    fontWeight: "bold",
  },
  infoText: {
    color: "#7B7B7B",
  },
});

export default MainInfo;
