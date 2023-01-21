import React, { useContext } from "react"
import 'react-native-gesture-handler';
import { createStackNavigator } from "@react-navigation/stack"
import { Routes } from "./Routes"
import { Login } from "./Login"
import { NavigationContainer} from '@react-navigation/native'
import { AuthContext } from "./AuthContext";
import { DetailsTable } from "../global/components/DetailsTable";


const Stack = createStackNavigator()

export const Auth = () => {  
    const { currentUser } = useContext(AuthContext)
    return (
       <NavigationContainer>
       <Stack.Navigator
        screenOptions={{
            tabBarShowLabel: false,
            headerShown: false}} >
       { currentUser ? (
            <Stack.Screen name='Routes' component={Routes} /> 
            ):(
            <Stack.Screen name='Login' component={Login} />
        )}
       </Stack.Navigator>
       </NavigationContainer>
       )
    
}