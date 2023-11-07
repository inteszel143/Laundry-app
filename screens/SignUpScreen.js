import { View, Text, StyleSheet, Dimensions, Image, TextInput, TouchableOpacity } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context';
import LottieView from 'lottie-react-native';
import { useNavigation } from '@react-navigation/native';
import { removeItem } from '../utils/asyncStorage';
import { StatusBar } from 'expo-status-bar';


import Animated, { FadeIn, FadeInDown, FadeInUp, FadeOut } from 'react-native-reanimated';



const { width, height } = Dimensions.get("window");

export default function SignUpScreen() {

    const navigation = useNavigation();

    // const handleReset = async () => {
    //     await removeItem('onboarded');
    //     navigation.push("Onboarding");
    // }


    return (
        <View className="bg-white h-full, w-full">
            <StatusBar style='light' />
            <Image className="h-full w-full absolute"
                source={require('../assets/images/background.png')}
            />

            {/* LIGHT */}
            <View className="flex-row justify-around w-full absolute" >
                <Animated.Image entering={FadeInUp.delay(200).duration(1000).springify().damping(3).mass(2)} className="h-[225] w-[90]" source={require('../assets/images/light.png')} />
                <Animated.Image entering={FadeInUp.delay(300).duration(1500).springify().damping(3)} className="h-[160] w-[65]" source={require('../assets/images/light.png')} />
            </View>


            {/* title ang form */}
            <View className="h-full w-full flex justify-around pt-48">
                {/* title */}
                <View className="flex items-center">
                    <Animated.Text entering={FadeInUp.duration(1000).springify()} className="text-white font-bold tracking-wider text-5xl">Signup</Animated.Text>
                </View>

                {/* form */}
                <View className="flex items-center mx-4 space-y-4">

                    <Animated.View entering={FadeInDown.duration(1000).springify()} className="bg-black/5 p-5 rounded-2xl w-full">
                        <TextInput placeholder='Phone Number' placeholderTextColor={'gray'} keyboardType='number-pad' />
                    </Animated.View>

                    <Animated.View entering={FadeInDown.delay(200).duration(1000).springify()} className="bg-black/5 p-5 rounded-2xl w-full">
                        <TextInput placeholder='Email' placeholderTextColor={'gray'} />
                    </Animated.View>

                    <Animated.View entering={FadeInDown.delay(400).duration(1000).springify()} className="bg-black/5 p-5 mb-3 rounded-2xl w-full">
                        <TextInput placeholder='Password' placeholderTextColor={'gray'} secureTextEntry />
                    </Animated.View>

                    <Animated.View entering={FadeInDown.delay(600).duration(1000).springify()} className="w-full">
                        <TouchableOpacity className="w-full bg-sky-400 p-3 rounded-2xl mb-3">
                            <Text className="text-xl font-bold text-white text-center">Register</Text>
                        </TouchableOpacity>
                    </Animated.View>

                    {/* dont have account */}
                    <Animated.View entering={FadeInDown.delay(800).duration(1000).springify()} className="flex-row justify-center space-x-2">
                        <Text>Already have an account?</Text>
                        <TouchableOpacity onPress={() => navigation.push('SignInScreen')}>
                            <Text className="text-sky-600 font-semibold">Login</Text>
                        </TouchableOpacity>
                    </Animated.View>
                </View>
            </View>

        </View>
    )
}