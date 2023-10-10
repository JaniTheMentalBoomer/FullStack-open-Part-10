import { Text, View, StyleSheet } from 'react-native'

const RepositoryItem = ({ data, index }) => {
  return (
    <View key={index}>
      <Text style={styles.baseText}>Full name: {data.fullName}</Text>
      <Text style={styles.baseText}>Description: {data.description}</Text>
      <Text style={styles.baseText}>Language: {data.language}</Text>
      <Text style={styles.baseText}>Stars: {data.stargazerCount}</Text>
      <Text style={styles.baseText}>Forks: {data.forksCount}</Text>
      <Text style={styles.baseText}>Reviews: {data.reviewCount}</Text>
      <Text style={styles.baseText}>Rating: {data.ratingAverage}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  baseText: {
    fontSize: '1rem',
    fontWeight: 'bold',
    fontFamily: 'Cochin',
  },
})

export default RepositoryItem
