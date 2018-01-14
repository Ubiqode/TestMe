import React, { Component } from 'react'
import { TextInput, View } from 'react-native'
import PropTypes from 'prop-types'
import { GRAY } from '@theme/colors'
import styles from './styles'

class Input extends Component {
	static propTypes = {
		placeholder: PropTypes.string,
		icon: PropTypes.element,
		underlineColor: PropTypes.string,
	}

	static defaultProps = {
		icon: null,
		placeholder: 'Input',
		underlineColor: GRAY,
	}

	state = {
		input: '',
	}

	render() {
		const iconPadding = {
			paddingLeft: 30,
		}

		return (
			<View style={styles.container}>
				<View style={styles.iconContainer}>
					{this.props.icon && this.props.icon}
				</View>

				<TextInput
					placeholder={this.props.placeholder}
					value={this.state.input}
					onChangeText={(input) => this.setState({ input })}
					style={[styles.input, this.props.icon && iconPadding]}
				/>

				<View style={[styles.underline, { borderColor: this.props.underlineColor }]} />
			</View>
		)
	}
}

export default Input
