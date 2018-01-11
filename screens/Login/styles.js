import { StyleSheet } from 'react-native'
import { PRIMARY } from '@theme/colors'

export default StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: 'white'
	},
	loginBox: {
		backgroundColor: 'white',
		borderRadius: 10,
		height: 265,
		width: '75%',
		shadowColor: 'black',
		shadowOffset: {height: 0, width: 0},
		shadowRadius: 8,
		shadowOpacity: 0.1,
		alignItems: 'center',
		justifyContent: 'center',
	},
	testMe: {
		color: PRIMARY,
		fontSize: 30,
		fontWeight: 'bold',
		marginBottom: 40
	},
	loginBtnContainer: {
		position: 'absolute',
		bottom: 0,
		borderBottomLeftRadius: 10,
		borderBottomRightRadius: 10,
		width: '100%',
		backgroundColor: PRIMARY,
	},
	loginBtn: {
		backgroundColor: 'transparent',
		alignItems: 'center',
		paddingVertical: 10,
	}
})
