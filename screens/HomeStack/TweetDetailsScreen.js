import { View, Text, SafeAreaView } from 'react-native'
import React, { useLayoutEffect } from 'react'
import { useNavigation, useRoute } from '@react-navigation/native'
import TweetContent from '../../components/TweetContent';

export default function TweetDetailsScreen() {
    const navigation = useNavigation();
    const route = useRoute();
    const { params } = route;


    useLayoutEffect(() => {
        navigation.setOptions({
            headerTitle: params.tweet.author.name,
        });
    }, []);

    return (
        <SafeAreaView style={{ flex: 1 }} >
            <TweetContent tweet={params.tweet} />
        </SafeAreaView>
    )
}