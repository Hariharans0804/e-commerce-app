import { Dimensions, Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Fontisto from 'react-native-vector-icons/Fontisto'
import { useRoute } from '@react-navigation/native'
import products from '../constants/products';
import { Colors, Fonts } from '../constants';
import { useDispatch } from 'react-redux';
import { addProduct } from '../slices/cart';

const SingleProductScreen = () => {

  const route = useRoute();
  const { productId } = route.params;

  const product = products.find((product) => product.id === productId);
  // console.log('product', product);

  const dispatch = useDispatch();

  const addToCart = () => {
    dispatch(addProduct(product))
  }

  return (
    <ScrollView>
      <View style={styles.product}>
        <View style={styles.productTop}>
          <Image source={{ uri: product.image }} style={styles.image} />
        </View>
        <View>
          <Text style={styles.productText}>{product.title}</Text>
          <Text style={styles.productPrice}>₹ {product.price}</Text>
        </View>
        <TouchableOpacity onPress={addToCart}>
          <View style={styles.button}>
            <Text style={styles.buttonText}>Add to Cart</Text>
            <Fontisto
              name="shopping-basket"
              size={20}
              color={Colors.DEFAULT_WHITE}
              style={styles.buttonIcon}
            />
          </View>
        </TouchableOpacity>
        <View>
          <Text style={styles.productDesc}>* 100% Original Products</Text>
          <Text style={styles.productDesc}>* Free Delivery on order above Rs.799</Text>
          <Text style={styles.productDesc}>* Pay on delivery might be available</Text>
          <Text style={styles.productDesc}>* Easy 30 days returns and exchanges</Text>
          <Text style={styles.productDesc}>* Try & Buy might be available</Text>
        </View>
      </View>
    </ScrollView>
  )
}

export default SingleProductScreen

const { width } = Dimensions.get('screen');
const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: '100%'
  },
  product: {
    alignItems: 'center'
  },
  productTop: {
    width: width,
    height: width - 50
  },
  productText: {
    textAlign: 'center',
    paddingVertical: 10,
    fontSize: 18,
    fontFamily: Fonts.POPPINS_REGULAR
  },
  productPrice: {
    textAlign: 'center',
    fontSize: 20,
    fontFamily: Fonts.POPPINS_SEMI_BOLD
  },
  productDesc: {
    paddingVertical: 10,
    fontSize: 15,
    fontFamily: Fonts.POPPINS_REGULAR
  },
  button: {
    backgroundColor: Colors.DARK_PINK_COLOR,
    paddingHorizontal: 25,
    paddingVertical: 7,
    borderRadius: 5,
    flexDirection: 'row',
    alignItems: 'center',
    // gap:5,
    marginVertical: 10,
  },
  buttonText: {
    fontSize: 18,
    fontFamily: Fonts.POPPINS_MEDIUM,
    color: Colors.DEFAULT_WHITE,
    paddingTop: 5
  },
  buttonIcon: {
    paddingLeft: 10
  }
})