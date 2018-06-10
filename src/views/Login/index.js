import React, { Component } from 'react'
import { View, Text, TouchableOpacity, Image, KeyboardAvoidingView, TouchableWithoutFeedback, Keyboard } from 'react-native'
import Input from '@components/Input'
import emailIcon from '@assets/email-icon.png'
import passwordIcon from '@assets/password-icon.png'
import testme from '@assets/TestMe.png'
import { observer } from 'mobx-react'
import { LoginStore } from '@stores/'

import styles from './styles'

@observer
class Login extends Component {
	constructor(props) {
		super(props)
		this.store = new LoginStore(props)
	}

	render() {
		const store = this.store
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
								<Text style={styles.formTitle}>{store.email}</Text>
								<Input
									icon={emailIcon}
									placeholder="Email"
									value={store.email}
									onChangeText={email => store.email = email}
								/>
								<Input
									icon={passwordIcon}
									placeholder="Password"
									value={store.password}
									onChangeText={password => store.password = password}
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
