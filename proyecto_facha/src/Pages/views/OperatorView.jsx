import React from 'react';
import { View, Text, Button } from 'react-native';
import { useAuth } from '../../contexts/AuthContext';
import { ButtonNavigation } from '../../Components/ButtonNavigation';

export default function OperadorView() {
  const { user } = useAuth();

  return (
    <View>
   
      <Text>Hola Operador {user.username}, bienvenido</Text>
      {/* Contenido específico de la pantalla de operador */}
      <ButtonNavigation 
        titulo={"Ver grafico"} nav={"ChartsPage"}
      />
      <ButtonNavigation 
        titulo={"Ver tabla de operaciones"} nav={"Tabla de operaciones"}
      />
      <ButtonNavigation 
        titulo={""} nav={""}
      />
      <ButtonNavigation 
        titulo={""} nav={""}
      />
      <ButtonNavigation 
        titulo={""} nav={""}
      />
    </View>
  );
}