import React from 'react'
import { View, Text, TouchableOpacity, Image, KeyboardAvoidingView, TouchableWithoutFeedback, Keyboard } from 'react-native'
import Input from '@components/FormInput'
import emailIcon from '@assets/email-icon.png'
import passwordIcon from '@assets/password-icon.png'
import fullnameIcon from '@assets/fullname.png'
import testme from '@assets/TestMe.png'
import styles from './styles'

const SignUp = (props) => (
	<KeyboardAvoidingView
		style={styles.container}
		behavior="position"
		contentContainerStyle={{ width: '100%', height: '100%' }}
		keyboardVerticalOffset={-155}
	>
		<TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
			<View style={styles.container}>
				<Image source={testme} style={styles.testme} />
				<View style={styles.signupBox}>
					<View style={styles.form}>
						<Text style={styles.formTitle}>SIGN UP</Text>
						<Input
							icon={fullnameIcon}
							placeholder="Full Name"
						/>
						<Input
							icon={emailIcon}
							placeholder="Email"
						/>
						<Input
							icon={passwordIcon}
							placeholder="Password"
						/>
					</View>
					<View style={styles.signupBtnContainer}>
						<TouchableOpacity
							style={styles.signupBtn}
							onPress={() => props.navigation.navigate('Login')}
						>
							<Text style={styles.signupBtnText}>DONE</Text>
						</TouchableOpacity>
					</View>
				</View>
			</View>
		</TouchableWithoutFeedback>
	</KeyboardAvoidingView>
)

export default SignUp
