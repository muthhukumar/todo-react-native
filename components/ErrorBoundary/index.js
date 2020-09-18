import React from 'react';
import {Text, View, StyleSheet} from 'react-native';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false,
    };
  }
  static getDerivedStateFromError(error) {
    return {hasError: true};
  }
  componentDidCatch(error, errorInfo) {
    //TODO when a error is thrown log those error to the mixpanel or elastic search
  }

  render() {
    const {hasError} = this.state;
    return (
      <React.Fragment>
        {hasError ? (
          <View style={styles.container}>
            <Text>Something went wrong. Please restart the app</Text>
          </View>
        ) : (
          this.props.children
        )}
      </React.Fragment>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default ErrorBoundary;
