import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { observer } from 'mobx-react'
import { AppStore } from '@stores'

@observer
export default class App extends React.Component {
	constructor(props) {
		super(props)
		this.store = AppStore
	}

  render() {
		const TestMe = this.store.appRoutes()
    return <TestMe />
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
})
