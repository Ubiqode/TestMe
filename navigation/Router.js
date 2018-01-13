import { StackNavigator } from 'react-navigation'

import Login from '@views/Login'

export default StackNavigator({
  Login: {
    screen: Login,
    navigationOptions: {
      header: null,
    },
  },
})
