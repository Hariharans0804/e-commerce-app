import { Button, Dimensions, Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Colors, Fonts } from '../constants'
import { useNavigation } from '@react-navigation/native'

const ProductCard = ({ id, title, price, image }) => {

    const navigation = useNavigation();
    return (
        <View style={styles.card}>
            <View style={styles.productTop}>
                <Image source={{ uri: image }} style={styles.image} />
                <View>
                    <Text style={styles.productText}>{title}</Text>
                    <Text style={styles.productPrice}>₹{price}</Text>
                </View>
                <Button
                    title='View Product'
                    onPress={
                        () => navigation.navigate(
                            'Cart', {
                            screen: 'Single Product Screen',
                            params: { productId: id }
                        })
                    }
                />
            </View>
        </View>
    )
}

export default ProductCard

const { width } = Dimensions.get('screen');

const styles = StyleSheet.create({
    image: {
        width: '100%',
        height: '100%'
    },
    productTop: {
        width: width - 150,
        height: width - 50
    },
    card: {
        elevation: 11,
        backgroundColor: Colors.DEFAULT_WHITE,
        marginVertical: 20,
        alignItems: 'center',
        width: width - 70,
        height: width + 100,
        borderRadius: 10,
        paddingBottom: 50
    },
    productText: {
        textAlign: 'center',
        paddingVertical: 10,
        fontSize: 14,
        fontFamily: Fonts.POPPINS_REGULAR
    },
    productPrice: {
        textAlign: 'center',
        fontSize: 20,
        fontFamily: Fonts.POPPINS_SEMI_BOLD
    }

})