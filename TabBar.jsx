import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'
import {AntDesign} from '@expo/vector-icons'

const TabBar = ({ state, descriptors, navigation }) => {
    const icons = {
        index: (props) => <AntDesign name= "home" size={26} color={'grey'} {...props}/>,
        create: (props) => <AntDesign name= "pluscircleo" size={26} color={'grey'} {...props}/>,
        profile: (props) => <AntDesign name= "user" size={26} color={'grey'} {...props}/>
    }
  return (
    <View style= {style.tabbar}>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

           if(['_sitemap', '+not-found'].includes(route.name)) return null

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name, route.params);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        return (
          <TouchableOpacity
          key={route.name}
            accessibilityRole="button"
            accessibilityState={isFocused ? { selected: true } : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            style={style.tabbaritem}
          >
            {
                icons[route.name]({
                    color: isFocused ? 'red': 'black'
                })
            }
            <Text style={{ color: isFocused ? 'red' : 'black' }}>
              {label}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  )
}

const style = StyleSheet.create({
    tabbar: {
        position: "absolute",
        bottom: 25,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        backgroundColor: 'white',
        marginHorizontal: 20,
        paddingVertical: 15,
        borderRadius: 25,
        borderCurve: 'continuous',
        shadowColor: 'black',
        shadowOffset: {width: 0, height: 10},
        shadowRadius: 10,
        shadowOpacity: 0.1
    },
    tabbaritem: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    }

})

export default TabBar