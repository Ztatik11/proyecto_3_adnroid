import * as React from 'react';
import { Text, View, FlatList,Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Ionicons from 'react-native-vector-icons/Ionicons';

function Perfiles({navigation}) {
  const DATA = [
    {
      name:'Alvaro',
      surname:'Gutierrez',
      age:22
    },
    {
      name:'Pepe',
      surname:'Dominguez',
      age:45
    },
    {
      name:'Maria',
      surname:'Burns',
      age:30
    },
    {
      name:'Ana',
      surname:'Bejarano',
      age:27
    },
    {
      name:'Daniel',
      surname:'Carrasco',
      age:15
    }
  ]
  const Stack = createNativeStackNavigator();

  const renderItem = ({ item }) => (
    
    <View>
       <Button
        onPress={()=>navigation.navigate("Perfil",{nombre:item.name,apellido:item.surname,edad:item.edad})}
        title={item.name}
        />
    </View>
  )
  return (
    <View>
      <FlatList
        data={DATA}
        renderItem={renderItem} 
        keyExtractor={item=>item.id}/>
      
    </View>
  );
}

function Perfil({route}) {
  const{nombre,apellido,edad}=route.params;
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>{nombre}</Text>
      <Text>{apellido}</Text>
      <Text>{edad}</Text>
    </View>
  );
}

function Pantallas() {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator initialRouteName="Perfiles">
      <Stack.Screen name="Perfiles" component={Perfiles}/>
      <Stack.Screen name="Perfil" component={Perfil}/>
    </Stack.Navigator>
  );
}



function Info() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Esto es facil de ejecutar</Text>
    </View>
  );
}
const Tab = createBottomTabNavigator();
export default function App() {
    return (
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
              let iconName;
  
              if (route.name === 'pantallas') {
                iconName = focused
                  ? 'ios-information-circle'
                  : 'ios-information-circle-outline';
              } else if (route.name === 'informacion') {
                iconName = focused ? 'ios-list' : 'ios-list-outline';
              }
  
              // You can return any component that you like here!
              return <Ionicons name={iconName} size={size} color={color} />;
            },
            tabBarActiveTintColor: 'tomato',
            tabBarInactiveTintColor: 'gray',
          })}
        >
          <Tab.Screen name="pantallas" component={Pantallas} />
          <Tab.Screen name="informacion" component={Info} />
        </Tab.Navigator>
      </NavigationContainer>
    );
}

