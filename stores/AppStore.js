import { observable } from 'mobx'
import { autobind } from 'core-decorators'
import { createSwitchNavigator } from 'react-navigation'

import AuthRoutes from '@navigation/AuthRoutes'
import MainRoutes from '@navigation/MainRoutes'

@autobind
class AppStore {
	@observable assetsLoaded = false
	@observable userLoggedIn

	appRoutes() {
		return createSwitchNavigator({
			Auth: AuthRoutes,
			Main: MainRoutes,
		}, {
			initialRouteName: 'Auth',
		})
	}
}

export default new AppStore()
