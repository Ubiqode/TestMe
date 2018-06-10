import { observable } from 'mobx'

class Store {
	@observable spinnerVisible

	constructor(props = {}) {
		this.navigation = props.navigation
	}
}

export default Store
