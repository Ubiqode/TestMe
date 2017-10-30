import { StackNavigator } from 'react-navigation'

import Login from '../screens/Login'

export default StackNavigator({
  Login: {
    screen: Login,
    navigationOptions: {
      header: null,
    },
  },
})
