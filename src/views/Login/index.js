import React from 'react'
import { View, Text, TouchableOpacity, Image } from 'react-native'
import Input from '@components/FormInput'
import emailIcon from '@assets/email-icon.png'
import passwordIcon from '@assets/password-icon.png'
import styles from './styles'

const Login = () => (
	<View style={styles.container}>
		<Text style={styles.testMe}>TestMe</Text>
		<View style={styles.loginBox}>
			<Input
				icon={<Image source={emailIcon} style={styles.inputIcon} />}
				placeholder="Email"
			/>
			<Input
				icon={<Image source={passwordIcon} style={styles.inputIcon} />}
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
