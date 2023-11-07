import { View, Text, SafeAreaView, Dimensions } from 'react-native'
import React, { useEffect } from 'react'
import LottieView from 'lottie-react-native';
import { useNavigation } from '@react-navigation/native';
import { getItem } from '../utils/asyncStorage';
import { StatusBar } from 'expo-status-bar';

const { width, height } = Dimensions.get("window");

export default function SplashScreen() {

    const navigation = useNavigation();

    // useEffect(() => {
    //     const check = async () => {
    //         let onboarded = await getItem('onboarded');
    //         if (onboarded == 1) {
    //             navigation.navigate("SignInScreen");
    //         } else {
    //             navigation.navigate("SignInScreen");
    //         }
    //     }
    // }, [])

    const handleAnimationFinish = async () => {
        let onboarded = await getItem('onboarded');
        if (onboarded == 1) {
            navigation.navigate("SignInScreen");
        } else {
            navigation.navigate("Onboarding");
        }
    }

    return (
        <View style={{ justifyContent: 'center', alignItems: 'center', backgroundColor: '#FFFFFF' }}>
            <StatusBar style='dark' />
            <LottieView
                style={{
                    width: width * 1,
                    height: height,
                }}
                source={require('../assets/animations/splashLogo.json')}
                autoPlay
                loop={false}
                onAnimationFinish={handleAnimationFinish}
            />
        </View>
    )
}