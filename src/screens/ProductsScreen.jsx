import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import products from '../constants/products';
import { ProductCard } from '../components';

// console.log(products);

const ProductsScreen = () => {
  return (
    <ScrollView>
      <View style={styles.container}>
        {products.map((product, index) => {
          return (
            <ProductCard
              key={index}
              id={product.id}
              title={product.title}
              price={product.price}
              image={product.image}
            />
          )
        })}
      </View>
    </ScrollView>
  )
}

export default ProductsScreen

const styles = StyleSheet.create({
  container:{
    alignItems:'center'
  }
})