import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { height, width } from '../../../constans'

const DayCard = ({ data }) => {
  const { h1, container } = styles
  const { main: { temp }, name } = data
  console.log('data', data)
  temp1 = (temp - 273.15).toFixed(1)
  sign = (temp1 > 0 ? '+' : '')
  return (
    <View style={container}>
      <Text style={h1}>{name}</Text>
      <Text style={h1}>{sign}{temp1}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    shadowColor: 'gold',
  },
  h1: {
    fontFamily: 'AvenirNext-DemiBold',
    fontSize: 18,
    alignSelf: 'center',
    textAlign: 'center',
    width: width/2
  }
})

export { DayCard }
