import React, { Component } from 'react'
import { View, Text, FlatList } from 'react-native'
import WordCardList from '@components/Collections/WordCardList'

const words = [
	{
		word: 'Word 1',
		partOfSpeech: 'noun',
	},
]

class Collections extends Component {
	render() {
		return (
			<View>
				<View>
					<WordCardList data={words} />
				</View>
			</View>
		)
	}
}

export default Collections
