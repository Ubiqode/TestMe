import { StackNavigator } from 'react-navigation'

import { Login, SignUp, Collections } from '@views'

export default StackNavigator({
  Login: {
    screen: Login,
    navigationOptions: {
      header: null,
    },
	},
	SignUp: {
		screen: SignUp,
		navigationOptions: {
			header: null,
		},
	},
	Collections: {
		screen: Collections,
		navigationOptions: {
			title: 'Collections',
		},
	},
}, {
	initialRouteName: 'Login',
})
