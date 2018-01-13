import React from 'react'
import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import styles from './styles'

const Login = () => (
	<View style={styles.container}>
		<Text style={styles.testMe}>TestMe</Text>
		<View style={styles.loginBox}>
			<TextInput
				placeholder="Email"
			/>
			<TextInput
				placeholder="Password"
			/>

			<View style={styles.loginBtnContainer}>
				<TouchableOpacity style={styles.loginBtn}>
					<Text>LOGIN</Text>
				</TouchableOpacity>
			</View>
		</View>
	</View>
)

export default Login
