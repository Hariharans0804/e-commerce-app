import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { StripeProvider } from '@stripe/stripe-react-native'
import { PaymentInput } from '../components'

const PaymentScreen = () => {
  return (
    <StripeProvider publishableKey='pk_test_51ROccwEx3j1pDnQtv5bBvbrhx2oNqsosN4xLkbeEuSCIrhtSOu51AeZ0Tox2OnupnE1Z3VZ8wC3gz4UHpKzjNlfj00yFPjmDMv'>
      <PaymentInput />
    </StripeProvider>
  )
}

export default PaymentScreen

const styles = StyleSheet.create({})