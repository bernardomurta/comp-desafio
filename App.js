import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Header from './Header'
import Card from './card'

export default function App() {
  return (
    <>
      <Header />
      <Card textos="ola" />
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
})
