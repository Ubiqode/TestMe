import { StyleSheet } from 'react-native'
import { PRIMARY, TINT, GRAY_DARKER } from '@theme/colors'

export default StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: 'white',
	},
	loginBox: {
		backgroundColor: 'white',
		borderRadius: 10,
		height: 265,
		width: '75%',
		shadowColor: 'black',
		shadowOffset: { height: 0, width: 0 },
		shadowRadius: 8,
		shadowOpacity: 0.1,
		alignItems: 'center',
		paddingTop: 25,
	},
	testMe: {
		color: PRIMARY,
		fontSize: 30,
		fontWeight: 'bold',
		marginBottom: 40,
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
	},
	form: {
		paddingHorizontal: 25,
		width: '100%',
	},
	formTitle: {
		fontSize: 26,
		color: TINT,
		marginBottom: 30,
		fontWeight: '700',
		fontFamily: 'Futura',
	},
	loginBtnText: {
		color: 'white',
		fontSize: 20,
		fontWeight: '500',
		fontFamily: 'Futura',
	},
	forgot: {
		fontWeight: '500',
		fontFamily: 'Futura',
		fontSize: 13,
		color: GRAY_DARKER,
	},
	forgotBtn: {
		right: 25,
		bottom: -24,
		position: 'absolute',
	},
})
