import React, { Component } from 'react'
import { TextInput, View } from 'react-native'
import PropTypes from 'prop-types'

class Input extends Component {
	static propTypes = {
		placeholder: PropTypes.string,
		icon: PropTypes.element,
	}

	static defaultProps = {
		icon: null,
		placeholder: 'Input',
	}

	state = {
		input: '',
	}

	render() {
		return (
			<View>
				<TextInput
					placeholder={this.props.placeholder}
					value={this.state.input}
					onChangeText={(input) => this.setState({ input })}
				/>
			</View>
		)
	}
}

export default Input
