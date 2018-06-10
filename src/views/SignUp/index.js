import React, { Component } from 'react'
import { View, Text, TouchableOpacity, Image, KeyboardAvoidingView, TouchableWithoutFeedback, Keyboard } from 'react-native'
import PropTypes from 'prop-types'
import Input from '@components/Input'
import emailIcon from '@assets/email-icon.png'
import passwordIcon from '@assets/password-icon.png'
import fullnameIcon from '@assets/fullname.png'
import { observer } from 'mobx-react'
import { SignupStore } from '@stores'

import testme from '@assets/TestMe.png'
import styles from './styles'

@observer
class SignUp extends Component {
	constructor(props) {
		super(props)
		this.store = new SignupStore(props)
	}

	render() {
		const store = this.store

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
									placeholder="Firt name"
									value={store.firstname}
									onChangeText={value => store.firstname = value}
								/>
								<Input
									icon={fullnameIcon}
									placeholder="Last name"
									value={store.lasname}
									onChangeText={value => store.lasname = value}
								/>
								<Input
									icon={emailIcon}
									placeholder="Email"
									value={store.email}
									onChangeText={value => store.email = value}
								/>
								<Input
									icon={passwordIcon}
									placeholder="Password"
									value={store.password}
									onChangeText={value => store.password = value}
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
