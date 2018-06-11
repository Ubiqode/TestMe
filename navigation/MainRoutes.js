import { createDrawerNavigator, createStackNavigator } from 'react-navigation'
import { Collections, About } from '@views'

export default createDrawerNavigator({
	Main: createStackNavigator({
		Collections: {
			screen: Collections,
			navigationOptions: {
				title: 'Collections',
			},
		},
		About: {
			screen: About,
			navigationOptions: {
				title: 'About',
			},
		},
	}),
})
