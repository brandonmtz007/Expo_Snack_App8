import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import RNPickerSelect from 'react-native-picker-select';

export default function App() {
  const [name, setName] = useState('');
  const [party, setParty] = useState('');
  const [message, setMessage] = useState('');

  const parties = [
    { label: 'Morena', value: 'Morena' },
    { label: 'Acción Nacional', value: 'Acción Nacional' },
    {
      label: 'Revolucionario Institucional',
      value: 'Revolucionario Institucional',
    },
    { label: 'Movimiento Ciudadano', value: 'Movimiento Ciudadano' },
    { label: 'Independientes', value: 'Independientes' },
  ];

  const sendInfo = () => {
    setMessage(`Hola ${name}, has seleccionado el partido político ${party}.`);
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Nombre"
        placeholderTextColor="white"
        onChangeText={(text) => setName(text)}
        value={name}
      />

      <RNPickerSelect
        style={styles.picker}
        placeholder={{
          label: 'Selecciona un partido político',
          value: null,
          color: 'white',
        }}
        onValueChange={(value) => setParty(value)}
        items={parties}
      />

      <TouchableOpacity style={styles.button} onPress={sendInfo}>
        <Text style={styles.buttonText}>Enviar</Text>
      </TouchableOpacity>

      <Text style={{ fontSize: 24, marginTop: 10 }}>{message}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  input: {
    height: 40,
    backgroundColor: 'magenta',
    color: 'white',
    fontWeight: 'bold',
    borderColor: 'green',
    borderWidth: 2,
    padding: 5,
    marginTop: 10,
  },
  picker: {
    inputAndroid: {
      height: 50,
      marginTop: 10,
      backgroundColor: 'magenta',
      color: 'white',
      fontWeight: 'bold',
    },
    inputIOS: {
      height: 50,
      marginTop: 10,
      backgroundColor: 'magenta',
      color: 'white',
      fontWeight: 'bold',
    },
  },
  button: {
    marginTop: 10,
    backgroundColor: '#2196F3',
    padding: 10,
    borderRadius: 20,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
