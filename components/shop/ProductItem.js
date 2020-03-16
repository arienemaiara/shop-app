import React from 'react';
import { 
    TouchableOpacity,
    TouchableNativeFeedback,
    Platform,
    View,
    Text,
    Image,
    StyleSheet
} from 'react-native';

const ProductItem = props => {

    let TouchableCmp = TouchableOpacity;
    if (Platform.OS === 'android' && Platform.Version >= 21) {
        TouchableCmp = TouchableNativeFeedback
    }

    return (
        <TouchableCmp 
            onPress={props.onViewDetail}>
            <View style={styles.product}>
                <Image
                    style={styles.image} 
                    source={{uri: props.imageUrl}} />
                <View style={styles.details} >
                    <Text style={styles.title}>{props.title}</Text>
                    <Text style={styles.price}>${props.price.toFixed(2)}</Text>
                </View>
                <View style={styles.actions}>
                    {props.children}
                </View>
            </View>
        </TouchableCmp>
    )
};

const styles = StyleSheet.create({
    product: {
        shadowColor: 'black',
        shadowOpacity: 0.26,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 8,
        elevation: 5,
        borderRadius: 10,
        backgroundColor: 'white',
        height: 300,
        margin: 20,
        overflow: 'hidden'
    },
    image: {
        width: '100%',
        height: '65%'
    },
    details: {
        alignItems: 'center',
        height: '17%',
        padding: 10
    },
    title: {
        fontWeight: 'bold',
        fontSize: 18,
        marginVertical: 4
    },
    price: {
        fontSize: 14,
        color: '#888'
    },
    actions: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: '20%',
        paddingHorizontal: 20
    }
});

export default ProductItem;