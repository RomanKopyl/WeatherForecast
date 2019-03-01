import React, {Component} from 'react'
import { StyleSheet, Text, View, TextInput } from 'react-native'
import { Header, DayCard } from './src/components/uikit'

// const url = 'https://api.openweathermap.org/data/2.5/weather?q=London,uk&appid=b6907d289e10d714a6e88b30761fae22'
// const url = 'http://api.openweathermap.org/data/2.5/weather?q=kremenchuk&appid=0d14d606b8980beb4ac945d6bbe071e6'
const url1 = 'http://api.openweathermap.org/data/2.5/weather?q='
// const url2 = 'kremenchuk'
const url3 = '&appid=0d14d606b8980beb4ac945d6bbe071e6'
export default class App extends Component {
  state = {
    title: 'Weather Forecast',
    city: 'kremenchuk',
    url: '',
    data: {
      main: {
        temp: 0
      }
    }
  }

  componentDidMount = async() => {
    try {
      const url = url1 + this.state.city + url3
      console.log('url', this.url);
      const response = await fetch(url)
      const data = await response.json()
      this.setState({ data })
    } catch (e) {
      throw e
    }
  }

  render() {
    console.log('state', this.state);
    console.log('url', this.url);
    const { title, city, data } = this.state
    return (
      <View>
        <Header title={title} />
        <TextInput
          style={{height: 40}}
          placeholder="Enter your city."
          onChangeText={(city) => this.setState({city})}
        />
        <View>
          <DayCard data={data}/>
        </View>
      </View>
    )
  }
}
