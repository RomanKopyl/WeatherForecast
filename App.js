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
    data: null,
    error: null
    // url: '',
    // data: {
    //   main: {
    //     temp: 0
    //   }
    // }
  }

  async componentDidMount() {
    await this.reloadData()
  }

  async onTextChanged(value) {
    this.setState(
      { city: value },
      this.reloadData.bind(this)
    )
  }

  async reloadData() {
    try {
      const url = url1 + this.state.city + url3
      console.log('url', this.url);
      const response = await fetch(url)
      const data = await response.json()

      if (data.cod != 200) {
        this.setState({ error: data.message, data: null })
      }
      else {
        this.setState({ data, error: null })
      }
    } catch (e) {
      throw e
    }
  }

  render() {
    console.log('state', this.state);
    console.log('url', this.url);
    const { title, city, data, error } = this.state
    return (
      <View style={{backgroundColor: 'white', flex: 1}}>
        <Header title={title} />
        <TextInput
          style={{height: 40}}
          placeholder="Enter your city."
          onChangeText={this.onTextChanged.bind(this)}>
            {city}
          </TextInput>
        <View>
          {data && (<DayCard data={data}/>)}
          {error && (<Text>{error}</Text>)}
        </View>
      </View>
    )
  }
}
