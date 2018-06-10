import { createStackNavigator } from 'react-navigation'
import { Login, SignUp } from '@views'

export default createStackNavigator({
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
})
