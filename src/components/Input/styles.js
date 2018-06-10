import { StyleSheet, Platform } from 'react-native'

export default StyleSheet.create({
	container: {
		width: '100%',
		marginBottom: 15,
	},
	underline: {
		borderWidth: 0.5,
		width: '100%',
	},
	iconContainer: {
		position: 'absolute',
		left: 2,
		bottom: 7,
	},
	input: {
		paddingLeft: 5,
		paddingBottom: 5,
		paddingTop: 5,
		fontFamily: Platform.OS === 'ios' ? 'Futura' : 'Roboto',
	},
	inputIcon: {
		height: 20,
		width: 20,
	},
})
