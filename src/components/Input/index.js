import React, { Component } from 'react'
import { TextInput, View, Image } from 'react-native'
import PropTypes from 'prop-types'
import { GRAY } from '@theme/colors'
import styles from './styles'

class Input extends Component {
	static propTypes = {
		placeholder: PropTypes.string,
		icon: PropTypes.number,
		underlineColor: PropTypes.string,
		value: PropTypes.string.isRequired,
		onChangeText: PropTypes.func.isRequired,
	}

	static defaultProps = {
		icon: null,
		placeholder: 'Input',
		underlineColor: GRAY,
	}

	render() {
		const iconPadding = {
			paddingLeft: 30,
		}

		return (
			<View style={styles.container}>
				<View style={styles.iconContainer}>
					{this.props.icon
						&& <Image source={this.props.icon} style={styles.inputIcon} />
					}
				</View>
				<TextInput
					placeholder={this.props.placeholder}
					value={this.props.value}
					onChangeText={input => this.props.onChangeText(input)}
					style={[styles.input, this.props.icon && iconPadding]}
				/>
				<View style={[styles.underline, { borderColor: this.props.underlineColor }]} />
			</View>
		)
	}
}

export default Input
