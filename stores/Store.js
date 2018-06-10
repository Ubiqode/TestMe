import { observable } from 'mobx'
import { autobind } from 'core-decorators'

@autobind
class Store {
	@observable spinnerVisible

	constructor(props = {}) {
		this.navigation = props.navigation
	}
}

export default Store
