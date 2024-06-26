import {View, Text, TextInput, ScrollView} from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { StatusBar } from 'expo-status-bar'
import * as Icon from "react-native-feather";
import { themeColors } from '../theme';

export default function HomeScreen() {
    return (
        <SafeAreaView className="bg-white">
            <StatusBar barStyle="dark-content"/>
            {/* search bar */}
            <View className="flex-row items-center space-x-2 px-4 pb-2">
                <View className="flex-row flex-1 items-center p-3 rounded-full border border-gray-300">
                    <Icon.Search height="25" widht="25" stroke="gray"/>
                    <TextInput placeholder='Restaurants' className="ml-2 flex-1" />
                    <View className="flex-row items-center space-x-1">
                        <Icon.MapPin height="20" widht="20" stroke="gray" />
                        <Text className="text-gray-600"> New York, NYC</Text>
                    </View>
                </View>
                <View style={{backgroundColor: themeColors.bgColor(1)}} className="p-3 bg-gray-300 rounded-full">
                    <Icon.Sliders height="20" widht="20" strokeWidth={2.5} stroke="white"/>
                </View>
            </View>

            {/* main */}
            <ScrollView showsVerticalScrollIndicator={false}
            contentContainerStyle={{
                paddingBottom: 20
            }}
            
            />
            {/* categorias */}
            
        </SafeAreaView>
    )
}