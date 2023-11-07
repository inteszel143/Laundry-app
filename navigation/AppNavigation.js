import { View, Text } from 'react-native'
import React, { useEffect, useState } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import OnboardingScreen from '../screens/OnboardingScreen';
import SignInScreen from '../screens/SignInScreen';
import SplashScreen from '../screens/SplashScreen';
import { getItem } from '../utils/asyncStorage.js';
import SignUpScreen from '../screens/SignUpScreen.js';
const Stack = createNativeStackNavigator();
export default function AppNavigation() {

    const [showOnboarding, setShowOnboarding] = useState(null);

    useEffect(() => {
        checkIfAlreadyOnbarded();
    }, [])


    const checkIfAlreadyOnbarded = async () => {
        let onboarded = await getItem('onboarded');
        if (onboarded == 1) {
            // hide boarding
            setShowOnboarding(false);
        } else {
            // show boarding
            setShowOnboarding(true);
        }
    }

    if (showOnboarding == null) {
        return null;
    }
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName='SplashScreen' >
                <Stack.Screen name="SplashScreen" options={{ headerShown: false }} component={SplashScreen} />
                <Stack.Screen name="Onboarding" options={{ headerShown: false }} component={OnboardingScreen} />
                <Stack.Screen name="SignInScreen" options={{ headerShown: false }} component={SignInScreen} />
                <Stack.Screen name="SignUpScreen" component={SignUpScreen} options={{ headerShown: false }} />
            </Stack.Navigator>
        </NavigationContainer>
    )

}