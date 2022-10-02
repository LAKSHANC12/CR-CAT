import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';

import styles from './HomeCC.styles';

class HomeCC extends React.Component {
  constructor() {
    super();
    this.state = {
      count: 0,
    };
  }

  onButtonPress() {
    this.setState({
      count: this.state.count + 2,
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>{this.state.count}</Text>
          
        <TouchableOpacity
          style={styles.btn}
          onPress={() => this.onButtonPress()}>
          <Text style={styles.btnTitle}>add Button</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default HomeCC;
