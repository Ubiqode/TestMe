import { observable } from 'mobx'
import { autobind } from 'core-decorators'

@autobind
class LoginStore {
	@observable email = ''
	@observable password = ''

	goToSignup() {
		this.navigation.navigate('Signup')
	}
}

export default LoginStore
