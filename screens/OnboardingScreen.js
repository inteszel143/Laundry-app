import { Dimensions, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Onboarding from 'react-native-onboarding-swiper';
import LottieView from 'lottie-react-native';
import { useNavigation } from '@react-navigation/native';
import { setItem } from '../utils/asyncStorage';

const { width, height } = Dimensions.get("window");

export default function OnboardingScreen() {

    const navigation = useNavigation();

    const handleDone = () => {
        navigation.navigate("SignInScreen");
        setItem('onboarded', '1');
    };

    const doneButton = ({ ...props }) => {
        return (
            <TouchableOpacity style={styles.doneButton} {...props}>
                <Text style={{ fontSize: 16, fontWeight: '500' }} >Done</Text>
            </TouchableOpacity>
        )
    }

    return (
        <View style={styles.container} >
            <Onboarding
                onDone={handleDone}
                onSkip={handleDone}
                DoneButtonComponent={doneButton}
                containerStyles={{ paddingHorizontal: 15 }}
                bottomBarColor="white"
                titleStyles={{
                    fontWeight: '500'
                }}
                bottomBarHeight={65}
                pages={[
                    {
                        backgroundColor: '#fff',
                        image: (<LottieView style={styles.lottie} source={require('../assets/animations/work.json')} autoPlay loop />),
                        title: 'Welcome to Majoor',
                        subtitle: "Get ready to simplify your laundry routine. We're here to make your life easier and your clothes fresher.",
                    },
                    {
                        backgroundColor: '#fff',
                        image: (<LottieView style={styles.lottie} source={require('../assets/animations/boost.json')} autoPlay loop />),
                        title: 'Laundry Made Easy',
                        subtitle: "From washing, drying, folding, and ironing, to pickup and delivery, Our app ",
                    },
                    {
                        backgroundColor: '#fff',
                        image: (<LottieView style={styles.lottie} source={require('../assets/animations/achieve.json')} autoPlay loop />),
                        title: 'Effortless Laundry Management',
                        subtitle: 'Manage your laundry schedule, track orders, and enjoy contactless delivery with our user-friendly app.',
                    },
                ]}
            />
        </View >
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
    lottie: {
        width: width * 0.9,
        height: width,
    },
    doneButton: {
        padding: 20,
    }
})