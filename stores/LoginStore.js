import { observable } from 'mobx'
import { Store } from '@stores'

class LoginStore extends Store {
	@observable email = ''
	@observable password = ''

	goToSignup() {
		console.log(this.navigation)
		this.navigation.navigate('Signup')
	}
}

export default LoginStore
