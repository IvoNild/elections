import { Text, StyleSheet } from "react-native";

const SubTitle = ({ title }) => {
  return <Text style={styles.title}>{title}</Text>;
};

const styles = StyleSheet.create({
  title: {
    fontSize: 17,
    fontWeight: "bold",
    color: "#7B7B7B",
  },
});

export default SubTitle;
