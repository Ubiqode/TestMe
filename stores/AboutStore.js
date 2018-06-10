import { observable, action } from 'mobx';
import { autobind } from 'core-decorators';
import { Linking } from 'react-native';

@autobind
class AboutStore {
  @observable currentTab = 0;
  @action handleTabChange(currentTab) {
    this.currentTab = currentTab;
  }
  @action gotoLink(url) {
    Linking.openURL(url).catch(err => console.error('An error occurred', err));
  };
}

export default AboutStore;
