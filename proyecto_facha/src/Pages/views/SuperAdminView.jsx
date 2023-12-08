import { View, Text, TextInput, Button } from "react-native"
import React, {useState} from "react";
import { ButtonNavigation } from '../../Components/ButtonNavigation';



export const SuperAdminView = () =>{

  
  
    
    return (
        <View>
             
                <Text>
                    This is the super admin view
                </Text>

                <ButtonNavigation
                    titulo={"Registrar usuario"} nav={"Registro de usuarios"}
                />
              
        </View>
    )
}