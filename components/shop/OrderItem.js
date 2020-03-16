import React, { useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

import CartItem from './CartItem';
import Colors from '../../constants/Colors';

import Card from '../ui/Card';

const OrderItem = props => {

    const [showDetails, setShowDetails] = useState(false);



    return (
        <Card style={styles.orderItem}>
            <View style={styles.summary}>
                <Text style={styles.totalAmount}>${props.amount.toFixed(2)}</Text>
                <Text style={styles.date}>{props.date}</Text>
            </View>
            <Button
                color={Colors.primary}
                title={showDetails ? 'Hide Details' : 'Show Details'}
                onPress={() => {
                    setShowDetails(prevState => !prevState)
                }}
            />
            {showDetails &&
                <View style={styles.detailItem}>
                    {props.items.map(cardItem => 
                        <CartItem 
                            key={cardItem.productId}
                            quantity={cardItem.quantity}
                            title={cardItem.productTitle}
                            amount={cardItem.sum}
                            deletable={false}
                        />
                    )}
                </View>
            }
        </Card>
    )
};

const styles = StyleSheet.create({
    orderItem: {
        margin: 20,
        padding: 10,
        alignItems: 'center'
    },
    detailItem: {
        width: '100%'
    },
    summary: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%'
    },
    totalAmount: {
        fontWeight: 'bold',
        fontSize: 16
    },
    data: {
        fontSize: 16,
        color: '#888'
    }
});

export default OrderItem;