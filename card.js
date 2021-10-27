import React, { useRef } from 'react'

import {
  SafeAreaView,
  ScrollView,
  Text,
  StyleSheet,
  View,
  ImageBackground,
  Animated,
  useWindowDimensions,
  TouchableOpacity
} from 'react-native'

const images = [
  'http://www.dcc.ufla.br/wp-content/uploads/2013/03/LogoComp.png',
  'https://www.instagram.com/p/CUOC4qjLqJ-/',
  'https://ufla.br/dcom/wp-content/uploads/2014/07/ufla-logo-viagem.jpg'
]

const App = props => {
  const handleclick = () => {
    ;<Text>{(props.textos = 'fica aquiiii')}</Text>
  }
  const scrollX = useRef(new Animated.Value(0)).current

  const { width: windowWidth } = useWindowDimensions()

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.scrollContainer}>
        <ScrollView
          horizontal={true}
          pagingEnabled
          showsHorizontalScrollIndicator={false}
          onScroll={Animated.event([
            {
              nativeEvent: {
                contentOffset: {
                  x: scrollX
                }
              }
            }
          ])}
          scrollEventThrottle={1}
        >
          {images.map((image, imageIndex) => {
            return (
              <View
                style={{
                  width: windowWidth,
                  height: 250
                }}
                key={imageIndex}
              >
                <ImageBackground source={{ uri: image }} style={styles.card}>
                  <TouchableOpacity style={styles.button} onPress={handleclick}>
                    <View style={styles.infoText}>
                      <Text>Press Here</Text>
                    </View>
                  </TouchableOpacity>
                </ImageBackground>
              </View>
            )
          })}
        </ScrollView>
        <View style={styles.indicatorContainer}>
          {images.map((image, imageIndex) => {
            const width = scrollX.interpolate({
              inputRange: [
                windowWidth * (imageIndex - 1),
                windowWidth * imageIndex,
                windowWidth * (imageIndex + 1)
              ],
              outputRange: [8, 16, 8],
              extrapolate: 'clamp'
            })
            return (
              <Animated.View
                key={imageIndex}
                style={[styles.normalDot, { width }]}
              />
            )
          })}
        </View>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  scrollContainer: {
    height: 300,
    alignItems: 'center',
    justifyContent: 'center'
  },
  card: {
    flex: 1,
    marginVertical: 4,
    marginHorizontal: 16,
    borderRadius: 5,
    overflow: 'hidden',
    alignItems: 'center',
    justifyContent: 'flex-end'
  },

  infoText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold'
  },
  normalDot: {
    height: 8,
    width: 8,
    borderRadius: 4,
    backgroundColor: 'silver',
    marginHorizontal: 4
  },
  indicatorContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 10
  },
  textContainer: {
    backgroundColor: 'rgba(0,0,0, 0.7)',
    paddingHorizontal: 100,
    paddingVertical: 8,
    borderRadius: 5
  }
})

export default App
