import { View, StyleSheet, Text } from 'react-native'
import theme from '../theme'

const styles = StyleSheet.create({
  tabText: {
    fontSize: theme.fontSizes.tab,
    color: theme.colors.tab,
    fontWeight: theme.fontWeights.bold,
  },
})

const AppBarTab = ({ tabName, tabStyles }) => {
  return (
    <View style={tabStyles}>
      <Text style={styles.tabText}>{tabName}</Text>
    </View>
  )
}

export default AppBarTab
