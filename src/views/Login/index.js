import React from 'react'
import { View, Text, TouchableOpacity, Image, KeyboardAvoidingView, TouchableWithoutFeedback, Keyboard } from 'react-native'
import Input from '@components/FormInput'
import emailIcon from '@assets/email-icon.png'
import passwordIcon from '@assets/password-icon.png'
import testme from '@assets/TestMe.png'
import styles from './styles'

const Login = () => (
	<KeyboardAvoidingView style={styles.container} behavior="padding">
		<TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
			<View style={styles.container}>
				<Image source={testme} style={styles.testme} />
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
		</TouchableWithoutFeedback>
	</KeyboardAvoidingView>
)

export default Login
