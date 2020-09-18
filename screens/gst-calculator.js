import React from 'react';
import {Text, View} from 'react-native';

class GstCalculator extends React.Component {
  componentDidMount() {
    if (global.mixpanel) {
      global.mixpanel.track('visited gst calculator screen');
      console.log(global.user);
    }
  }

  render() {
    return (
      <View>
        <Text>Gst calculator</Text>
      </View>
    );
  }
}

export default GstCalculator;
