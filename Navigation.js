import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { createDrawerNavigator } from '@react-navigation/drawer'

// imports

import Feed from './screens/tabScreens/Feed';
import Notification from './screens/tabScreens/Notifications';
import Settings from './screens/tabScreens/Settings';

import TweetDetailsScreen from './screens/HomeStack/TweetDetailsScreen';


// ICONS
import { MaterialCommunityIcons } from '@expo/vector-icons';



// STACKS
const HomeStack = createNativeStackNavigator();

function HomeStackGroup() {
    return (
        <HomeStack.Navigator>
            <HomeStack.Screen name="TabGroup" component={TabGroup} options={{
                headerShown: false,
            }} />
            <HomeStack.Screen name="TweetDetailsScreen" component={TweetDetailsScreen}
                options={{
                    presentation: 'modal'
                }}
            />
        </HomeStack.Navigator>
    )
};



// BOTTOM TAB 
const Tab = createBottomTabNavigator();
function TabGroup() {
    return (
        <Tab.Navigator
            screenOptions={({ route, navigation }) => ({
                tabBarIcon: ({ color, focused, size }) => {
                    let iconName;
                    if (route.name === "Feed") {
                        iconName = focused ? "home" : "home-alert-outline";
                    } else if (route.name === "Notification") {
                        iconName = focused ? "bell" : "bell-outline";
                    } else if (route.name === "Settings") {
                        iconName = focused ? "face-man" : "face-man-outline";
                    }

                    return <MaterialCommunityIcons name={iconName} size={size} color={color} />
                },
                tabBarActiveTintColor: "#F05323",
                tabBarInactiveTintColor: "gray",
            })}
        >
            <Tab.Screen name="Feed"
                component={Feed}
                options={{
                    tabBarLabel: "Feed"
                }} />
            <Tab.Screen name='Notification' component={Notification} />
            <Tab.Screen name='Settings' component={Settings} />
        </Tab.Navigator>
    )
};


export default function Navigation() {
    return (
        <NavigationContainer>
            <HomeStackGroup />
        </NavigationContainer>
    )
}