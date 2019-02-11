//import
import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

//body
const Header = props => {
  const { viewStyle, textStyle } = styles
  return (
    <View style={viewStyle}>
      <Text style={textStyle}>{props.title}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  viewStyle: {
    backgroundColor: 'skyblue',
    height: 116,
    justifyContent: 'center',
    paddingLeft: 22,
    paddingTop: 72,
    shadowColor: '#000',
    shadowOffset: { widht: 0, height: 2 },
    shadowOpacity: 0.2,
    elevation: 2,
    position: 'relative'
  },
  textStyle: {
    color: '#fff',
    fontSize: 28,
    fontFamily: 'AvenirNext-DemiBold',
  }
})

//export
export { Header }
