import React, { useState } from 'react';
import { View, Text, TextInput, Button} from 'react-native';
import { Picker } from '@react-native-picker/picker';
import Peticiones from '../../Library/Peticiones';

export default function RegistroView() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [rol, setRol] = useState('operador'); // Valor predeterminado

  const handleRegistro = async () => {
    // Lógica para enviar los datos al servidor
    try {
      const response = await Peticiones.register(username, password, email, rol);
      // Manejar la respuesta del servidor
      console.log('Respuesta del servidor:', response);
    } catch (error) {
      console.error('Error al registrar:', error);
    }
  };

  return (
    <View>
      <Text>Registrar Usuario</Text>
      <TextInput
        placeholder="Username"
        value={username}
        onChangeText={(text) => setUsername(text)}
      />
      <TextInput
        placeholder="Password"
        value={password}
        onChangeText={(text) => setPassword(text)}
        secureTextEntry // Para ocultar la contraseña
      />
      <TextInput
        placeholder="Email"
        value={email}
        onChangeText={(text) => setEmail(text)}
        keyboardType="email-address" // Teclado específico para emails
      />
      <Text>Rol:</Text>
      <Picker
        selectedValue={rol}
        onValueChange={(itemValue) => setRol(itemValue)}
        style={{ height: 50, width: 150 }}
      >
        <Picker.Item label="Operador" value="operador" />
        <Picker.Item label="Admin" value="admin" />
        <Picker.Item label="Super-Admin" value="super-admin" />
      </Picker>
      <Button title="Registrar" onPress={handleRegistro} />
    </View>
  );
}
