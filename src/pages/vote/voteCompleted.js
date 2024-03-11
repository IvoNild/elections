import { View, Text, StyleSheet, TouchableOpacity } from "react-native";


const VoteCompleted = ({navigation}) => {
  return (
    <View style={styles.Container}>
      <Text style={styles.ConcludedTitle}>Voto concluído</Text>
      <Text style={styles.ConcludedText}>
        Parabéns, votou no candidato
        <Text
          style={{ fontWeight: "bold", color: "#000", textAlign: "center" }}
        >
          {" "}
          Pedro Vunge
        </Text>
      </Text>

      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('ElectionsAllowed')}>
        <Text style={{color:'#fff'}}>Voltar</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding:20
  },
  ConcludedTitle: {
    color: "green",
    fontWeight: "bold",
    fontSize: 18,
    marginBottom: 5,
  },
  ConcludedText: {
    color: "grey",
  },
  button:{
    marginTop:10,
    backgroundColor:'#127478',
      width:'80%', 
      padding:10,
      alignItems:'center',
      borderRadius:3
  }
});

export default VoteCompleted;
