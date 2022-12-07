import React , {useState} from "react";
import { View, Text, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
export default function App () {
  
  function HomeScreen({navigation,route}) {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text style ={{fontSize:50}}>Home Screen</Text>
        <Text>{route.params.usuario}</Text>
        <Button
        onPress={()=>navigation.navigate("Perfil",{usuario_perfil:route.params.usuario})}
        title={"Pasar pagina"}
        />
      </View>
    );
  }
  function Perfil({navigation,route}) {
    const {usuario} = route.params;
    return (
      
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        
        <Text>Perfil</Text>
        <Text>{usuario}</Text>
        <Button
        onPress={()=>navigation.navigate("Home")}
        title={"Pasar pagina"}
        />
        <Button
        onPress={()=>navigation.navigate("Formulario")}
        title={"Pasar pagina"}
        />
      </View>
    );
  }

  function Formulario({navigation}) {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Formulario</Text>
        <Button
        onPress={()=>navigation.navigate("Perfil")}
        title={"Pasar pagina"}
        />
      </View>
    );
  }
  
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home"> 
        <Stack.Screen name="Perfil" component={Perfil}/>
        <Stack.Screen name="Formulario" component={Formulario}/>
        <Stack.Screen name="Home" component={HomeScreen} initialParams={{usuario:"Alvaro"}}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}