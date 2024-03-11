import { View, StyleSheet } from "react-native";

import Header from "../../components/universalComponents/header";
import InputText from "../../components/formComponent/inputText";
import SubTitle from "../../components/universalComponents/subTitle";

const HeaderSearch = ({ navigation, icon, placeholder, subTitle }) => {
  return (
    <>
      <Header back navigation={navigation} />
      <View style={styles.SearchBar}>
        <InputText icon="search" placeholder={placeholder} />
      </View>
      <View style={{ paddingHorizontal: 20, paddingBottom: 20 }}>
        <SubTitle title={subTitle} />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  SearchBar: {
    padding: 20,
  },
});

export default HeaderSearch;
