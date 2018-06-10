import _ from 'lodash'
import {
  Image,
  Platform,
  Text,
  TouchableOpacity,
  View,
} from 'react-native'
import { observer } from 'mobx-react'
import { AboutStore } from '@stores'
import React, { Component } from 'react'
import { GithubButton, LinkedinButton, WebsiteButton } from '../icons/button'
import AnimatedTabs from '../lib/animatedTabs'

import TEAM from './team'
import styles from './styles'

@observer
export default class About extends Component {
  constructor(props) {
    super(props)
    this.store = new AboutStore()
  }

  render() {
    const navHeightPadding = { marginTop: Platform.OS === 'ios' ? 64 : 54 }
    const developer = TEAM[this.state.currentTab]
    return (
      <View style={[styles.container, navHeightPadding]}>
        <Image style={styles.profileImage} source={{ uri: developer.avatar }} />
        <Image source={{ uri: developer.header }} style={styles.headerImage} />
        <View style={styles.content}>
          <Text style={styles.contentName}>{developer.name}</Text>
          <Text style={styles.contentTitle}>{developer.title}</Text>
          <View style={styles.socialButtons}>
            <TouchableOpacity
              activeOpacity={0.7}
              onPress={() => this.store.gotoLink(developer.github)}
            >
              <GithubButton />
            </TouchableOpacity>
            <TouchableOpacity
              activeOpacity={0.7}
              onPress={() => this.store.gotoLink(developer.website)}
            >
              <WebsiteButton />
            </TouchableOpacity>
            <TouchableOpacity
              activeOpacity={0.7}
              onPress={() => this.store.gotoLink(developer.linkedin)}
            >
              <LinkedinButton />
            </TouchableOpacity>
          </View>
          <Text style={styles.contentDescription}>{developer.description}</Text>
        </View>
        <View style={styles.TEAMTabs}>
          <AnimatedTabs
            height={55}
            tabTitles={_.map(TEAM, dev => dev.name)}
            onChangeTab={this.store.handleTabChange}
          />
        </View>
      </View>
    )
  }
}
