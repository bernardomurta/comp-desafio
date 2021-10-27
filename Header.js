import React from 'react'
import { StyleSheet, Text, View, Image, SafeAreaView } from 'react-native'

const Header = () => {
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Image
          source={require('./assets/comp.png')}
          style={{ width: 40, height: 40 }}
          resizeMode="contain"
        />
        <Text style={styles.headerText}>CompJr</Text>
        <Image
          source={require('./assets/usuario.png')}
          style={{ width: 40, height: 40 }}
          resizeMode="contain"
        />
      </View>
    </SafeAreaView>
  )
}
const styles = StyleSheet.create({
  header: {
    backgroundColor: '#101010',
    flexDirection: 'row'
  },
  container: {
    paddingTop: 10,
    paddingBottom: 10,
    backgroundColor: 'lightseagreen',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingRight: 10,
    paddingLeft: 10
  },
  headerText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white'
  }
})
export default Header
