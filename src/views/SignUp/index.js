import React, { Component } from 'react'
import { View, Text, TouchableOpacity, Image, KeyboardAvoidingView, TouchableWithoutFeedback, Keyboard } from 'react-native'
import PropTypes from 'prop-types'
import Input from '@components/FormInput'
import emailIcon from '@assets/email-icon.png'
import passwordIcon from '@assets/password-icon.png'
import fullnameIcon from '@assets/fullname.png'
import testme from '@assets/TestMe.png'
import styles from './styles'

class SignUp extends Component {
	static propTypes = {
		navigation: PropTypes.objectOf(PropTypes.any).isRequired,
	}

	render() {
		return (
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
									onPress={() => this.props.navigation.navigate('Collections')}
								>
									<Text style={styles.signupBtnText}>DONE</Text>
								</TouchableOpacity>
							</View>
						</View>
					</View>
				</TouchableWithoutFeedback>
			</KeyboardAvoidingView>
		)
	}
}

export default SignUp
