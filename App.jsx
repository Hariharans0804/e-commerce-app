import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Navigator from './src/navigations'
import { Provider } from 'react-redux'
import { store } from './src/app/store'

const App = () => {
  return (
    <Provider store={store}>
      <Navigator />
    </Provider>
  )
}

export default App

const styles = StyleSheet.create({})


// import { Colors, Fonts } from './src/constants'
// import MaterialIcons from 'react-native-vector-icons/MaterialIcons'

// <Text style={{ fontFamily: Fonts.POPPINS_BOLD }}>App.jsx</Text>
// <MaterialIcons
//   name="adb"
//   size={20}
//   color={Colors.PRIMARY_COLOR}
//   style={{ marginLeft: 5 }}/>
// /