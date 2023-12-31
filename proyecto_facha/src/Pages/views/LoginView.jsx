import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native'

import { useAuth } from '../../contexts/AuthContext';

export default function LoginView() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const { acces, user, login } = useAuth();

  const navigation = useNavigation();

  const handleLogin = async() => {

        await login(username, password)
        if ( user ) {
          // Autenticación exitosa, navega a la pantalla 'Admin'
          user.role == "admin" && navigation.navigate("Admin")
        }else if(user ){
          //Autenticacion Exitosa y es operador
          user.role == "operador" && navigation.navigate("operador")
        }else if(user ){
          //Autenticacion Exitosa y es Super Admin
          user.role == "super-admin" && navigation.navigate("superAdmin")
        } else if (user == null && acces) {
          // Autenticación fallida, muestra un mensaje de error
          alert('Nombre de usuario o contraseña incorrectos');
        }
  };

  return (
    <View>
   
      <Text>Iniciar Sesión</Text>
      <TextInput
        placeholder="Nombre de Usuario"
        value={username}
        onChangeText={(text) => setUsername(text)}
      />
      <TextInput
        placeholder="Contraseña"
        secureTextEntry={true}
        value={password}
        onChangeText={(text) => setPassword(text)}
      />
      <Button title="Iniciar Sesión" onPress={handleLogin} />
    </View>
  );
}
