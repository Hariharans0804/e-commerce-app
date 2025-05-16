import { Dimensions, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import { Colors, Fonts } from '../constants'
import { useDispatch } from 'react-redux'
import { removeProduct } from '../slices/cart'

const CartProduct = ({ product }) => {

    const dispatch = useDispatch();

    return (
        <View style={styles.product}>
            <View style={styles.imageContainer}>
                <Image source={{ uri: product.image }} style={styles.image} />
            </View>
            <View style={styles.textContainer}>
                <Text style={styles.productText}>{product.title}</Text>
            </View>
            <View style={styles.priceContainer}>
                <Text style={styles.productPrice}>₹ {product.price}</Text>
            </View>
            <TouchableOpacity style={styles.deleteContainer}
                onPress={() => {
                    dispatch(removeProduct(product.id));
                }}>
                <MaterialCommunityIcons name='delete' size={20} color={Colors.DEFAULT_RED} />
            </TouchableOpacity>
        </View>
    )
}

export default CartProduct

const { width } = Dimensions.get('screen');

const styles = StyleSheet.create({
    image: {
        width: '100%',
        height: '100%'
    },
    imageContainer: {
        width: width - 350,
        height: width - 310,
        flex: 0.2,
    },
    product: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 10,
        // borderWidth:1,
    },
    textContainer: {
        flex: 0.5,
        paddingHorizontal: 5
    },
    productText: {
        textAlign: 'center',
        paddingVertical: 10,
        fontSize: 12,
        fontFamily: Fonts.POPPINS_REGULAR
    },
    priceContainer: {
        flex: 0.25,
    },
    productPrice: {
        textAlign: 'center',
        fontSize: 16,
        fontFamily: Fonts.POPPINS_MEDIUM
    },
    deleteContainer: {
        flex: 0.05,
        paddingBottom: 5,
        paddingHorizontal: 5
    },

})