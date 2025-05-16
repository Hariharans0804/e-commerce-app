import { Button, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useSelector } from 'react-redux'
import { CartProduct } from '../components';
import { useNavigation } from '@react-navigation/native';
import { Fonts } from '../constants';

const CartScreen = () => {

  const products = useSelector(state => state.cart.items);
  // console.log(products);

  const total = products.reduce((sum, { price }) => sum + price, 0);

  const navigation = useNavigation();

  return (
    <ScrollView>
      {products.map((product, index) => {
        return <CartProduct key={index} product={product} />
      })}
      {products.length !== 0 ? (
        <View>
          <View style={styles.amountContainer}>
            <Text style={styles.amountTitle}>Total Amount : </Text>
            <Text style={styles.amount}>₹ {total}</Text>
          </View>
          <Button title='Buy Now' onPress={() => { navigation.navigate('Payment Screen') }} />
        </View>
      ) : (
        <View styles={styles.button}>
          <Text style={styles.default}>Your Cart is Empty!</Text>
          <Button title='Purchase Items' onPress={() => navigation.navigate('Products Screen')} />
        </View>
      )
      }
    </ScrollView >
  )
}

export default CartScreen

const styles = StyleSheet.create({
  button: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  default: {
    fontSize: 20,
    paddingVertical: 20,
    textAlign:'center'
  },
  amountContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10
  },
  amountTitle: {
    fontSize: 20,
  },
  amount: {
    fontFamily: Fonts.POPPINS_MEDIUM,
    fontSize: 22,
    paddingTop: 8
  }
})