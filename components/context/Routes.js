import React from 'react';
import { NavigationContainer} from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Tasks } from '../../components/tasks/Tasks'
import { Lo } from '../../components/lo/Lo'
import { Profile } from '../../components/profile/Profile'
import { Dashboard } from '../../components/dashboard/Dashboard'
import { Ionicons } from '@expo/vector-icons'
import { FontAwesome } from '@expo/vector-icons'
import { MaterialCommunityIcons } from '@expo/vector-icons' 
import { Companies } from '../../components/companies/Companies'
import { Button, StyleSheet } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { DetailsTable } from '../global/components/DetailsTable';

const MenuNav = createBottomTabNavigator()
const TaskStack = createStackNavigator()
const LoStack = createStackNavigator()

const TaskStackScreen = () => {
  return(
  <TaskStack.Navigator mode="card" screenOptions={{ cardStyle: { flex: 1 }, headerShown: false }}>
    <TaskStack.Screen name='TasksTable' component={Tasks}  
      ScreenOptions={{animationEnabled: false}} 
      options={{title: 'Atividades',
         headerStyle: {
        backgroundColor: '#00264B'
      },
      headerTintColor: '#fff',
      headerTitleStyle:{
        fontWeight: 'bold',
        fontSize: 22
      },
      headerTitleAlign: 'center',
      headerRight: () => (
        <Button onPress={() => alert('this is sparta')}
          title='Filtro'
          color='#000' />
     )

      }}/>
    <TaskStack.Screen name='Details' component={DetailsTable} />
  </TaskStack.Navigator>
  )
}

const LoStackScreen = () => {
  return(
  <LoStack.Navigator mode="card" screenOptions={{ cardStyle: { flex: 1 } }}>
    <LoStack.Screen name='Lo' component={Lo} />
    <LoStack.Screen name='Details' component={DetailsTable} />
  </LoStack.Navigator>
  )
}

export const Routes = () => {
  return (
    <NavigationContainer independent={true}>
      <MenuNav.Navigator
        screenOptions={{
          tabBarShowLabel: true,
          headerShown: false,
          tabBarStyle: {
            height: 80,
            padding: 8,
            backgroundColor: '#fff',
            borderTopColor: 'transparent',
            borderWidth: 1,
            borderColor: '#D4D4D4'
          },
          tabBarActiveTintColor: '#00264B',
          tabBarItemStyle: {
            paddingBottom: 3,
            paddingTop: 3
          }
        }}>
        <MenuNav.Screen 
          name='Dashboard' 
          component={Dashboard}
          options={{
            tabBarLabel: 'Início',
            tabBarIcon: ({focused}) => {
              if(focused){
              return <Ionicons name="grid" size={24} color='#414141' />
              }
              return <Ionicons name="grid" size={24} color='#d3d1c4' />
            }
          }} />
        <MenuNav.Screen 
          name='Tasks' 
          component={TaskStackScreen} 
          options={{
            animationEnabled: false,
            tabBarLabel: 'Atividades',
            tabBarIcon: ({focused}) => {
              if(focused){
                return <FontAwesome name="file-text" size={24} color="#414141" />
              } 
                return <FontAwesome name="file-text" size={24} color="#d3d1c4" />
            }
          }} />
        <MenuNav.Screen 
          name='Lo' 
          component={LoStackScreen} 
          options={{
            tabBarLabel: 'LO',
            tabBarIcon: ({focused}) => {
              if(focused){
                return <MaterialCommunityIcons name="file-certificate" size={30} color="#414141" />
              }
              return <MaterialCommunityIcons name="file-certificate" size={30} color="#d3d1c4" />
            }
          }} />
        <MenuNav.Screen 
          name='Companies' 
          component={Companies} 
          options={{
            tabBarLabel: 'Empresas',
            tabBarIcon: ({focused}) => {
              if(focused){
                return <FontAwesome name="industry" size={24} color="#414141" />
              }
              return <FontAwesome name="industry" size={24} color="#d3d1c4" />
            }
          }} />
        <MenuNav.Screen 
          name='Profile' 
          component={Profile} 
          options={{
            tabBarLabel: 'Perfil',
            tabBarShowLabel: true,
            tabBarIcon: ({focused}) => {
              if(focused){
                return <FontAwesome name="user-circle-o" size={24} color="#414141" />
              }
              return <FontAwesome name="user-circle-o" size={24} color="#d3d1c4" />
            }
          }} />
      </MenuNav.Navigator>
    </NavigationContainer> 
  );
}

const sombra = StyleSheet.create({
  shadow:{
    shadowColor: '#7F5DF0',
    textShadowOffset : {
      width: 2,
      height: 10
    },
    shadowOpacity: 0.75,
    shadowRadius: 6.5,
    elevation: 5
  }
})