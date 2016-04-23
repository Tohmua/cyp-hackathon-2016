import React, {
  AppRegistry,
  Component,
  Image,
  StyleSheet,
  Text,
  View,
} from 'react-native'

const MOCKED_MOVIES_DATA = [
  {title: 'Title', year: '2015', posters: {thumbnail: 'http://i.imgur.com/UePbdph.jpg'}},
]

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  thumbnail: {
    width: 53,
    height: 81,
  },
})

export default class Root extends Component {
	render() {
		var movie = MOCKED_MOVIES_DATA[0];
	    return (
	      <View style={styles.container}>
	        <Text>{movie.title}</Text>
	        <Text>{movie.year}</Text>
	        <Image source={{uri: movie.posters.thumbnail}} />
	      </View>
	    )
	}
}
