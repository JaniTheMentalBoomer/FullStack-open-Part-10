import Constants from 'expo-constants'
import { Text, StyleSheet, View } from 'react-native'
import RepositoryList from './RepositoryList'
import AppBar from './AppBar'

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    flexShrink: 1,
  },
  titleText: {
    fontSize: '2rem',
    fontWeight: 600,
    marginBottom: '1rem',
    fontFamily: 'Cochin',
  },
})

const Main = () => {
  return (
    <>
      <AppBar />
      <View style={styles.container}>
        <Text style={styles.titleText}>Rate Repository Application</Text>
        <RepositoryList />
      </View>
    </>
  )
}

export default Main
