import './config/firebase';
import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import RootNavigation from './navigation'; //noot needed to add './navigation/index' as every time there is an index file inside a folder, the index file can be used with the folder name.

export default function App() {
  return (
    <View style={styles.container}>
        <RootNavigation/>
      <StatusBar style="auto" />
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
