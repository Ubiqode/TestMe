import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import Input from '@components/FormInput'
import emailIcon from '@assets/email-icon.png'
import passwordIcon from '@assets/password-icon.png'
import styles from './styles'

const Login = () => (
	<View style={styles.container}>
		<Text style={styles.testMe}>TestMe</Text>
		<View style={styles.loginBox}>
			<View style={styles.form}>
				<Text style={styles.formTitle}>LOGIN</Text>
				<Input
					icon={emailIcon}
					placeholder="Email"
				/>
				<Input
					icon={passwordIcon}
					placeholder="Password"
				/>
				<TouchableOpacity style={styles.forgotBtn}>
					<Text style={styles.forgot}>Forgot your password?</Text>
				</TouchableOpacity>
			</View>
			<View style={styles.loginBtnContainer}>
				<TouchableOpacity style={styles.loginBtn}>
					<Text style={styles.loginBtnText}>LOGIN</Text>
				</TouchableOpacity>
			</View>
		</View>
	</View>
)

export default Login
