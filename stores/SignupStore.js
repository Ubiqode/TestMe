import { observable } from 'mobx'
import { autobind } from 'core-decorators'

@autobind
class SignupStore {
	@observable firstname = ''
	@observable lastname = ''
	@observable email = ''
	@observable password = ''
}

export default SignupStore
