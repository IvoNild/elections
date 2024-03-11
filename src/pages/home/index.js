import React from "react";
import { View, StyleSheet, ScrollView } from "react-native";
import Header from "../../components/universalComponents/header";
import MainInfo from "../../components/homeComponent/mainInfo";
import RecenteEnqueries from "../../components/homeComponent/recentEnquiries";

const Home = ({ navigation }) => {
  return (
    <ScrollView style={styles.container}>
      <Header />
      <MainInfo />
      <RecenteEnqueries navigation={navigation} />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});

export default Home;
