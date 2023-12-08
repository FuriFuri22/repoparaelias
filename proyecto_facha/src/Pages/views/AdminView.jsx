import React from 'react';
import { View, Text, Button } from 'react-native';

import { ButtonNavigation } from '../../Components/ButtonNavigation';

export default function AdminView() {


  return (
    <View>
    
      
      <Text>Panel de Administrador</Text>
     <ButtonNavigation titulo={"Ver grafico"} nav={"ChartsPage"}
     />
     <ButtonNavigation titulo={"ver tabla de operaciones"} nav={"Table"} 
     />
     <ButtonNavigation titulo={"carga de archivos"} nav={"FileUploader"}
     />
     <ButtonNavigation titulo={"carga de datos manual"} nav={"Carga de Datos"}
     />
     <ButtonNavigation titulo={"Lista de operaciones"} nav={"JobsList"}
     />
    </View>
  );
}
