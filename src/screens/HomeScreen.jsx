import { Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Colors, Fonts, Images } from '../constants'

const HomeScreen = () => {
  return (
    <ScrollView>
      <View>
        <Image source={Images.PRODUCTSIMAGE1} style={{ width: '100%', height: 200 }} />
      </View>
      <View style={styles.homeTitle1}>
        <Text style={styles.homeTitle1Text}>Shop on Today's Deal</Text>
      </View>
      <View style={styles.homeBox1}>
        <View style={styles.homeBoxItem}>
          <Image source={Images.PRODUCT1} style={{ width: '60%', height: 250 }} />
          <Text>Apple iPhone 15 Mini 64 GB, Pink</Text>
          <Text>MRP : ₹ 64,900</Text>
        </View>
        <View style={styles.homeBoxMini}>
          <View style={styles.homeBoxItem}>
            <Image source={Images.PRODUCT2} style={{ width: '43%', height: 90 }} />
            <View style={styles.items}>
              <Text>Apple iphone XR 128 GB, Desert Titanium</Text>
              <Text>MRP : ₹ 42,600</Text>
            </View>
          </View>
        </View>
        <View style={styles.homeBoxMini}>
          <View style={styles.homeBoxItem}>
            <Image source={Images.PRODUCT3} style={{ width: '43%', height: 90 }} />
            <View style={styles.items}>
              <Text>Apple iphone SE 128 GB, Blue</Text>
              <Text>MRP : ₹ 57,900</Text>
            </View>
          </View>
        </View>
        <View style={styles.homeBoxMini}>
          <View style={styles.homeBoxItem}>
            <Image source={Images.PRODUCT4} style={{ width: '43%', height: 90 }} />
            <View style={styles.items}>
              <Text>Apple iphone XR 64 GB, White</Text>
              <Text>MRP : ₹ 16,100</Text>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.homeTitle1}>
        <Text style={styles.homeTitle1Text}>Great Beauty Products</Text>
      </View>
      <View>
        <Image source={Images.PRODUCTSIMAGE2} style={{ width: '100%', height: 260 }} />
      </View>
      <View style={styles.homeTitle1}>
        <Text style={styles.homeTitle2Text}>Blockbuster Sale</Text>
      </View>
      <View style={styles.homeBox1}>
        <View style={styles.homeBoxItem}>
          <Image source={Images.PRODUCT5} style={{ width: '60%', height: 350 }} />
          <Text style={{ textAlign: 'center' }}>
            Men Blue Kalamkari Block Printed Straight Sustainable Kurta with Roll-Up Sleeves
          </Text>
          <Text>MRP : ₹ 1600</Text>
        </View>
        <View style={styles.homeBoxMini}>
          <View style={styles.homeBoxItem}>
            <Image source={Images.PRODUCT6} style={{ width: '80%', height: 120 }} />
            <View style={styles.items}>
              <Text>Men Brown Slim Fit Printed Casusal Shirt</Text>
              <Text>MRP : ₹ 1136</Text>
            </View>
          </View>
          <View style={styles.homeBoxItem}>
            <Image source={Images.PRODUCT7} style={{ width: '80%', height: 120 }} />
            <View style={styles.items}>
              <Text>Men Blue Regular Fit Faded Denim Shirt</Text>
              <Text>MRP : ₹ 999</Text>
            </View>
          </View>
          <View style={styles.homeBoxItem}>
            <Image source={Images.PRODUCT8} style={{ width: '80%', height: 120 }} />
          </View>
          <View style={styles.items}>
            <Text>Men Gray Regular Fit Faded Plain Shirt</Text>
            <Text>MRP : ₹ 1,999</Text>
          </View>
        </View>
      </View>
    </ScrollView>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
  homeTitle1: {
    paddingVertical: 10
  },
  homeTitle1Text: {
    textAlign: 'center',
    fontSize: 25,
    fontFamily: Fonts.POPPINS_REGULAR,
  },
  homeBox1: {
    backgroundColor: Colors.DEFAULT_WHITE,
  },
  homeBoxMini: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    flexWrap: 'wrap',
    marginVertical: 20
  },
  items: {
    width: 100
  },
  homeTitle2Text: {
    fontSize: 20,
    fontFamily: Fonts.POPPINS_REGULAR,
    paddingHorizontal: 10,
    paddingTop: 20,
  },
  homeBoxItem: {
    alignItems: 'center'
  }
})