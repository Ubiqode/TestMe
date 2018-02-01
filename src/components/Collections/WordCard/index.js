import React from 'react'
import { View, Text } from 'react-native'
import styles from './styles'

const WordCard = (props) => (
	<View style={styles.container}>
		<Text style={styles.word}>{props.word}</Text>
	</View>
)

export default WordCard
