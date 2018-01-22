import { StyleSheet, Platform } from 'react-native'
import { PRIMARY, TINT, GRAY_DARKER } from '@theme/colors'

export default StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: 'white',
		width: '100%',
	},
	signupBox: {
		backgroundColor: 'white',
		borderRadius: 10,
		height: '42%',
		width: '75%',
		shadowColor: 'black',
		shadowOffset: { height: 0, width: 0 },
		shadowRadius: 8,
		shadowOpacity: 0.1,
		alignItems: 'center',
		paddingTop: 25,
	},
	testme: {
		marginBottom: 35,
		marginTop: -20,
		height: 85,
		width: 260,
	},
	signupBtnContainer: {
		position: 'absolute',
		bottom: 0,
		borderBottomLeftRadius: 10,
		borderBottomRightRadius: 10,
		width: '100%',
		backgroundColor: PRIMARY,
	},
	signupBtn: {
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
		marginBottom: 25,
		fontWeight: '700',
		fontFamily: Platform.OS === 'ios' ? 'Futura' : 'Roboto',
	},
	signupBtnText: {
		color: 'white',
		fontSize: 20,
		fontWeight: '500',
		fontFamily: Platform.OS === 'ios' ? 'Futura' : 'Roboto',
	},
	forgot: {
		fontWeight: '500',
		fontFamily: Platform.OS === 'ios' ? 'Futura' : 'Roboto',
		fontSize: 13,
		color: GRAY_DARKER,
	},
	forgotBtn: {
		right: 25,
		bottom: -10,
		position: 'absolute',
	},
})
