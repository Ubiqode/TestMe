import { createDrawerNavigator, createStackNavigator } from 'react-navigation'
import { Collections } from '@views'

export default createDrawerNavigator({
	Main: createStackNavigator({
		Collections: {
			screen: Collections,
			navigationOptions: {
				title: 'Collections',
			},
		},
	}),
})
