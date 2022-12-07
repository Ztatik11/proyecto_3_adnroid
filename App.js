import * as React from 'react';
import { Text, View, Buttom } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

function perfiles({navigation,route}) {
  const DATA = [
    {
      name:'Alvaro',
      surname:'Carrasco',
      phone:982919213,
      age:22
    },
    {
      name:'Pepe',
      surname:'Carrasco',
      phone:982919213,
      age:45
    },
    {
      name:'Maria',
      surname:'Carrasco',
      phone:982919213,
      age:30
    },
    {
      name:'Ana',
      surname:'Carrasco',
      phone:982919213,
      age:27
    },
    {
      name:'Daniel',
      surname:'Carrasco',
      phone:982919213,
      age:15
    }
  ]
  const Stack = createNativeStackNavigator();

  const renderItem = ({ item }) => (
    
    <View>
       <Button
        onPress={()=>navigation.navigate("Perfil",{persona:item})}
        title={item.name}
        />
      <Text style={styles.title}>{item.name}</Text>
    </View>
  )
  return (
    <View>
      <FlatList
        data={DATA}
        renderItem={renderItem} 
        keyExtractor={item=>item.id}/>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Perfil"> 
          <Stack.Screen name="Perfil" component={Perfil}/>
        </Stack.Navigator>
      </NavigationContainer>
    </View>
  );
}

function perfil({navigation,route}) {
  
  return (
    
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>{route.item.name}</Text>
      <Text>{route.item.age}</Text>
    </View>
  );
}

function info({navigation,route}) {
  
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
  
              if (route.name === 'Home') {
                iconName = focused
                  ? 'ios-information-circle'
                  : 'ios-information-circle-outline';
              } else if (route.name === 'Settings') {
                iconName = focused ? 'ios-list' : 'ios-list-outline';
              }
  
              // You can return any component that you like here!
              return <Ionicons name={iconName} size={size} color={color} />;
            },
            tabBarActiveTintColor: 'tomato',
            tabBarInactiveTintColor: 'gray',
          })}
        >
          <Tab.Screen name="Home" component={perfiles} />
          <Tab.Screen name="Settings" component={info} />
        </Tab.Navigator>
      </NavigationContainer>
    );
}

