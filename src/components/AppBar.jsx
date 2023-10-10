import { View, StyleSheet } from 'react-native'
import Constants from 'expo-constants'
import theme from '../theme'
import AppBarTab from './AppBarTab'

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    backgroundColor: theme.backgroundColors.appBar,
    padding: '1rem',
  },
})

const AppBar = () => {
  return (
    <View style={styles.container}>
      <AppBarTab tabName={'Repositories'} />
    </View>
  )
}

export default AppBar
