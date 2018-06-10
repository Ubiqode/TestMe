import { observable } from 'mobx'
import Store from './Store'

class SignupStore extends Store {
	@observable firstname = ''
	@observable lastname = ''
	@observable email = ''
	@observable password = ''
}

export default SignupStore
