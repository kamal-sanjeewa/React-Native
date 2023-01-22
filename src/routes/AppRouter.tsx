import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import PersonDetails from "../screens/PersonDetails";
import Home from "../screens/Home";
import { Person } from "../../App";

export type RootStackParamList = {
    Home: undefined;
    PersonDetails: {person: Person};
  };
const Stack = createNativeStackNavigator<RootStackParamList>();

const AppRouter = ()=>{
    return (
        <Stack.Navigator screenOptions={{headerShown: true}}>
            <Stack.Screen 
                name="Home" 
                component={Home} 
                options={{ title: 'Home' }} 
            />
            <Stack.Screen 
                name="PersonDetails" 
                component={PersonDetails} 
                options={{ title: 'Person Details' }} 
            />
        </Stack.Navigator>
    );
}

export default AppRouter;