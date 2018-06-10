import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  headerImage: {
    flex: 0.35,
    resizeMode: 'cover',
    width: null,
    height: null,
    // borderColor: 'green', borderWidth: 2
  },
  content: {
    flex: 0.53,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 15,
    // borderColor: 'purple', borderWidth: 2,
  },
  profileImage: {
    width: 80,
    height: 80,
    borderRadius: 80,
    zIndex: 2,
    position: 'absolute',
    top: 120,
    left: 20,
  },
  contentName: {
    position: 'absolute',
    top: 36,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    // borderColor: 'orange', borderWidth: 2
  },
  contentTitle: {
    position: 'absolute',
    top: 60,
    fontSize: 12.5,
    textAlign: 'center',
    // borderColor: 'orange', borderWidth: 2
  },
  contentDescription: {
    marginTop: 61,
    paddingVertical: 10,
    lineHeight: 20,
    fontFamily: 'Arial',
    fontSize: 14,
    // borderColor: 'green', borderWidth: 2,
  },
  teamTabs: {
    flex: 0.12,
    // borderColor: 'green', borderWidth: 2
  },
  socialButtons: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: 100,
    position: 'relative',
    top: 37,
    left: 110,
  },
});
