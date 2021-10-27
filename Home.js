import React from 'react'
import { View, Image, ScrollView, Dimensions } from 'react-native'

const { width } = Dimensions.get('window')
const { height } = (width * 100) / 60
const imagens = [
  'http://www.dcc.ufla.br/wp-content/uploads/2013/03/LogoComp.png',
  'https://twitter.com/compjunior/status/1441517610424799235/photo/1',
  'https://ufla.br/dcom/wp-content/uploads/2014/07/ufla-logo-viagem.jpg'
]

export default class App extends React.Component {
  render() {
    return (
      <View style={{ marginTop: 50, width, height }}>
        <ScrollView
          pagingEnabled
          horizontal
          style={{ marginTop: 50, width, height }}
        >
          {imagens.map((imagem, index) => (
            <Image
              key={index}
              source={{
                uri: imagem
              }}
              style={{ width, height, resizeMode: 'contain' }}
            />
          ))}
        </ScrollView>
      </View>
    )
  }
}
