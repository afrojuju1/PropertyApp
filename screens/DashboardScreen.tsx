import React from 'react'
import { Ionicons } from '@expo/vector-icons'
import { View } from 'react-native'
import { primaryColor } from '../constants/Colors'
import styled from 'styled-components/native'
import Svg, { Circle, Rect } from 'react-native-svg'

const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`

const Button = styled.View`
  background-color: ${primaryColor};
  width: 55%;
  padding: 20px 30px;
  flex-direction: row;
  align-items: center;
  border-radius: 8px;
`

const ButtonText = styled.Text`
  font-weight: 700;
  margin-left: 10px;
  font-size: 16px;
  color: white;
  text-transform: uppercase;
`

const TitleWrapper = styled.View`
  margin-left: 20px;
  margin-right: 20px;
  margin-bottom: 50px;
`

const Title = styled.Text`
  font-weight: bold;
  font-size: 25px;
  color: black;
`

const SubTitle = styled.Text`
  font-weight: 600;
  font-size: 20px;
  color: gray;
  text-align: center;
  margin-top: 15px;
`

function SvgComponent(props: any) {
  return (
    <Svg height="50%" width="50%" viewBox="0 0 100 100" {...props}>
      <Circle cx="50" cy="50" r="45" stroke="blue" strokeWidth="2.5" fill="green" />
      <Rect x="15" y="15" width="70" height="70" stroke="red" strokeWidth="2" fill="yellow" />
    </Svg>
  );
}

export default function DashboardScreen() {
  return (
    <Container>

      <SvgComponent />

      <TitleWrapper>
        <Title>
          Welcome to PropertyApp, John
        </Title>

        <SubTitle>
          You're on your way to better property management. Let's get started...
        </SubTitle>
      </TitleWrapper>

      <Button>
        <Ionicons
          name="md-home"
          size={25}
          color={'#fff'}
        />
        <ButtonText numberOfLines={1}>Add a Property</ButtonText>
      </Button>
    </Container>
  )
}
