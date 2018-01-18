import { StackNavigator } from 'react-navigation'

import Login from '@views/Login'
import SignUp from '@views/SignUp'

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
})
