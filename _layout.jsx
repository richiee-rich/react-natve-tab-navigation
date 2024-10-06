import { View, Text } from "react-native";
import React from "react";
import { Stack, Tabs } from "expo-router";
import TabBar from "../components/TabBar";
import { SafeAreaView } from "react-native-safe-area-context";

const _layout = () => {
  return (
   
    <Tabs tabBar={props => <TabBar {...props} /> } screenOptions={{headerShown: false}}>
        
      <Tabs.Screen name="index"/>
      <Tabs.Screen name="create" options={{ title: "Create" }} />
      <Tabs.Screen name="profile" options={{ title: "Profile" }} />
      
    </Tabs>
    
    // {/* <Stack>
    // <Stack.Screen name='index' />
    // </Stack> */}
  );
};

export default _layout;
