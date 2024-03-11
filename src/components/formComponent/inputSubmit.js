import { Text, TouchableOpacity, StyleSheet } from 'react-native'

export default function InputSubmit(props) {
  return (
    <TouchableOpacity style={styles.input} onPress={props.onPress}>
      <Text style={styles.inputText}>{props.text}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  input: {
    marginTop: 10,
    padding: 15,
    borderRadius: 5,
    backgroundColor: '#127478'
  },
  inputText: {
    color: '#FFF',
    textAlign: 'center'
  }
})
