import { BottomTabBarProps } from '@react-navigation/bottom-tabs'
import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import { primaryColor } from '../constants/Colors'
import styled from 'styled-components/native'

interface PP {
  // isFocused: boolean
}
const Container = styled.View<PP>`
  flex-direction: row;
  height: 100px;
  background-color: wheat;
  align-items: center;
  border-top-left-radius: 30px;
  border-top-right-radius: 30px;
  padding: 20px;
  justify-content: space-evenly;
`

export function TabBar({ state, descriptors, navigation }: BottomTabBarProps) {
  const focusedOptions = descriptors[state.routes[state.index].key].options;

  if (focusedOptions.tabBarVisible === false) {
    return null;
  }

  return (
    <Container>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
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
            key={index}
            accessibilityRole="button"
            accessibilityState={isFocused ? { selected: true } : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            style={{
            }}
          >
            <View style={{
              flex: isFocused ? 1.5 : 0.5,
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'flex-start',
              minHeight: 30,
              backgroundColor: isFocused ? primaryColor : undefined,
              padding: 15,
              borderRadius: 20,
              alignSelf: 'flex-start',
              // marginRight: isFocused ? 10 : 0,
            }}>
              <Ionicons
                name="md-grid"
                size={isFocused ? 25 : 15}
                color={isFocused ? '#fff' : '#000'}
              />
              {isFocused &&
                <Text
                  numberOfLines={1}
                  style={{
                    color: '#fff',
                    fontSize: 16,
                    marginLeft: 5,
                    fontWeight: 'bold',
                  }}
                >
                  {label}
                </Text>
              }
            </View>
          </TouchableOpacity>
        );
      })}
    </Container>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
