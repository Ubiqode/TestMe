import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import Input from '@components/FormInput'
import styles from './styles'

const Login = () => (
	<View style={styles.container}>
		<Text style={styles.testMe}>TestMe</Text>
		<View style={styles.loginBox}>
			<Input placeholder="Email" />
			<Input placeholder="Password" />

			<View style={styles.loginBtnContainer}>
				<TouchableOpacity style={styles.loginBtn}>
					<Text>LOGIN</Text>
				</TouchableOpacity>
			</View>
		</View>
	</View>
)

export default Login
