import React, { Component } from 'react'
import { View, Text, TouchableOpacity, Image, KeyboardAvoidingView, TouchableWithoutFeedback, Keyboard } from 'react-native'
import Input from '@components/FormInput'
import PropTypes from 'prop-types'
import emailIcon from '@assets/email-icon.png'
import passwordIcon from '@assets/password-icon.png'
import testme from '@assets/TestMe.png'
import styles from './styles'

class Login extends Component {
	static propTypes = {
		navigation: PropTypes.objectOf(PropTypes.any).isRequired,
	}

	render() {
		return (
			<KeyboardAvoidingView
				style={styles.container}
				behavior="position"
				contentContainerStyle={{ width: '100%', height: '100%' }}
				keyboardVerticalOffset={-150}
			>
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
								<TouchableOpacity
									style={styles.loginBtn}
									onPress={() => this.props.navigation.navigate('SignUp')}
								>
									<Text style={styles.loginBtnText}>LOGIN</Text>
								</TouchableOpacity>
							</View>
						</View>
					</View>
				</TouchableWithoutFeedback>
			</KeyboardAvoidingView>
		)
	}
}

export default Login
