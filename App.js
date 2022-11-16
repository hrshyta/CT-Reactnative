import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {
    StyleSheet, Button, View, SafeAreaView,
    Text, Alert
} from 'react-native';
const CleverTap = require('clevertap-react-native');

export default function App() {
  return (
    <View style={styles.container}>
      <Button
                     title="UserLogin"
                                     onPress={() =>
                                         CleverTap.onUserLogin({'Identity': '2', 'Email': 'tstharsh@gmail.com'})}

      />
      <Button
                           title="RaiseEvent"
                                           onPress={() =>
                                               CleverTap.recordEvent(
                                               'Test Event', {'Tech stack': 'React Native',
                                                                                    'Category': 'Android'

                                                                                   })}

            />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

