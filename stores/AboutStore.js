import { observable, action } from 'mobx';
import { Linking } from 'react-native';
import { Store } from '@stores';

class AboutStore extends Store {
  @observable currentTab = 0;
  @action handleTabChange(currentTab) {
    this.currentTab = currentTab;
  }
  @action gotoLink(url) {
    Linking.openURL(url).catch(err => console.error('An error occurred', err));
  }
}

export default AboutStore;
