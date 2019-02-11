import React, {Component} from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Header, DayCard, MainArr } from './src/components/uikit'

const url = 'https://samples.openweathermap.org/data/2.5/weather?q=London,uk&appid=b6907d289e10d714a6e88b30761fae22'
export default class App extends Component {
  state = {
    title: 'Weather Forecast',
    data: {
      main: {
        temp: 0
      }
    }
  }

  componentDidMount = async() => {
    try {
      const response = await fetch(url)
      const data = await response.json()
      this.setState({ data })
    } catch (e) {
      throw e
    }
  }

  render() {
    console.log('state', this.state);
    const { title, data } = this.state
    return (
      <View>
        <Header title={title} />
        <View>
          <DayCard data={data}/>
        </View>
      </View>
    )
  }
}
