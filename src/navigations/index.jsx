import React from 'react'
import { Text, TouchableOpacity } from 'react-native';

import { NavigationContainer, useNavigation } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator, DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';
import Ionicons from 'react-native-vector-icons/Ionicons';

import { Colors, Fonts } from '../constants'
import { CartScreen, HomeScreen, PaymentScreen, ProductsScreen, SingleProductScreen } from '../screens';
import { useSelector } from 'react-redux';

const defaultNavigationOptions = {
    headerStyle: {
        backgroundColor: Colors.PRIMARY_COLOR,
    },
    headerTitleStyle: {
        fonFamily: Fonts.POPPINS_BOLD,
    },
    headerBackTitleStyle: {
        fonFamily: Fonts.POPPINS_REGULAR,
    },
    headerTintColor: Colors.DEFAULT_WHITE,
    headerTitle: 'ECommerce App',
    headerRight: () => {
        const navigation = useNavigation();
        const products = useSelector(state => state.cart.items);
        return (
            <TouchableOpacity
                style={{ marginRight: 20 }}
                onPress={() => navigation.navigate('Cart', { screen: 'Cart Screen' })}
            >
                <Text style={
                    {
                        position: 'absolute',
                        backgroundColor: Colors.DEFAULT_RED,
                        color: Colors.DEFAULT_WHITE,
                        zIndex: 10,
                        paddingHorizontal: 5,
                        borderRadius: 999,
                        fontSize: 12,
                        fontWeight: 'bold',
                        right: -8,
                        top: -5
                    }
                }>{products.length}</Text>
                <Ionicons name='cart' size={30} color={Colors.DEFAULT_WHITE} />
            </TouchableOpacity>
        )
    }
};


const Stack = createNativeStackNavigator();

const CartNavigator = () => {
    return (
        <Stack.Navigator initialRouteName='Cart Screen' screenOptions={{ headerShown: false }}>
            <Stack.Screen name='Cart Screen' component={CartScreen} />
            <Stack.Screen name='Single Product Screen' component={SingleProductScreen} />
            <Stack.Screen name='Payment Screen' component={PaymentScreen} />
        </Stack.Navigator>
    );
};


const Drawer = createDrawerNavigator();

const MyDrawer = () => {
    return (
        <Drawer.Navigator screenOptions={{
            ...defaultNavigationOptions,
            drawerActiveTintColor: Colors.DEFAULT_LIGHT_GRAY,
            drawerItemStyle: {
                marginVertical: 5,
            },
            drawerLabelStyle: {
                color: Colors.DEFAULT_WHITE,
                fontFamily: Fonts.POPPINS_REGULAR,
                fontSize: 16,
                // marginTop:5
            },
            drawerStyle: {
                backgroundColor: Colors.NAVY_BLUE_COLOR,
                width: 300
            }
        }}>
            <Drawer.Screen name='Home Screen' component={HomeScreen}
                options={{
                    drawerIcon: () => (
                        <Ionicons name='home' size={20} color={Colors.DEFAULT_WHITE} />
                    )
                }}
            />
            <Drawer.Screen name='Products Screen' component={ProductsScreen}
                options={{
                    drawerIcon: () => (
                        <Ionicons name='cube' size={20} color={Colors.DEFAULT_WHITE} />
                    )
                }}
            />
            <Drawer.Screen name='Cart' component={CartNavigator}
                options={{
                    drawerIcon: () => (
                        <Ionicons name='cart' size={20} color={Colors.DEFAULT_WHITE} />
                    )
                }}
            />
        </Drawer.Navigator>
    )
}


export default function Navigator() {
    return (
        <NavigationContainer>
            <MyDrawer />
        </NavigationContainer>
    );
};
