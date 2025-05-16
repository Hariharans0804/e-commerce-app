import { Alert, Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { CardField, useStripe } from '@stripe/stripe-react-native'
import { useNavigation } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import { Colors } from '../constants';
import axios from 'axios';
import { clearProducts } from '../slices/cart';

const PaymentInput = () => {

    const { confirmPayment } = useStripe();

    const navigation = useNavigation();
    const dispatch = useDispatch();

    const products = useSelector(state => state.cart.items);
    const total = products.reduce((sum, { price }) => sum + price, 0);

    const getData = async () => {
        const response = await axios.post(
            'http://192.168.29.176:5500/create-payment',
            {
                total,
            },
        );
        return response.data.clientSecret;
    };

    const handlePay = async () => {
        const clientSecret = await getData();

        const { paymentIntent, error } = await confirmPayment(clientSecret, {
            paymentMethodType: 'Card'
        })

        if (error) {
            Alert("Sorry, something went wrong!");
        } else if (paymentIntent) {
            Alert("Payment Successfull!");
            dispatch(clearProducts());
            navigation.navigate('Home');
        }
    }

    return (
        <View>
            <CardField
                postalCodeEnabled={true}
                placeholders={{
                    number: '2342 5623 7634 1234',
                }}
                cardStyle={{ backgroundColor: Colors.DEFAULT_WHITE, textColor: Colors.DEFAULT_BLACK }}
                style={{ width: '100%', height: 50, marginVertical: 30 }}
            />
            <Button title='Pay' onPress={handlePay} />
        </View>
    )
}

export default PaymentInput

const styles = StyleSheet.create({})