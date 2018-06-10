import { observable } from 'mobx'
import { autobind } from 'core-decorators'
import { Store } from '@stores'

@autobind
class LoginStore extends Store {
	@observable email = ''
	@observable password = ''

	goToSignup() {
		console.log(this.navigation)
		this.navigation.navigate('Signup')
	}
}

export default LoginStore
