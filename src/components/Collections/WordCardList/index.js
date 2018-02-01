import React from 'react'
import { FlatList } from 'react-native'
import WordCard from '../WordCard'
import styles from './styles'

const WordCardList = (props) => (
	<FlatList
		data={props.data}
		renderItem={(data) => <WordCard word={data.item.word} />}
		keyExtractor={(item, key) => key}
		contentContainerStyle={styles.container}
	/>
)

export default WordCardList
