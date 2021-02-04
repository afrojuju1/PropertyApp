import { BottomTabBarProps } from '@react-navigation/bottom-tabs'
import React from 'react'
import { TouchableOpacity } from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import { primaryColor } from '../constants/Colors'
import styled from 'styled-components/native'

const Container = styled.View`
  flex-direction: row;
  height: 100px;
  background-color: wheat;
  align-items: center;
  border-top-left-radius: 30px;
  border-top-right-radius: 30px;
  padding: 20px;
  justify-content: space-evenly;
`

const Wrapper = styled.View<{ isFocused: boolean }>`
  flex: ${props => props.isFocused ? 1.5 : 0.5};
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  min-height: 30px;
  background-color: ${props => props.isFocused ? primaryColor : undefined};
  padding: 15px;
  border-radius: 20px;
  align-self: flex-start;
`

const Label = styled.Text`
  color: #fff;
  font-size: 16px;
  margin-left: 5px;
  font-weight: bold;
  text-transform: capitalize;
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
            <Wrapper isFocused={isFocused}>
              <Ionicons
                name="md-grid"
                size={isFocused ? 25 : 15}
                color={isFocused ? '#fff' : '#000'}
              />
              {isFocused && <Label numberOfLines={1}>{label}</Label>}
            </Wrapper>
          </TouchableOpacity>
        );
      })}
    </Container>
  );
}
