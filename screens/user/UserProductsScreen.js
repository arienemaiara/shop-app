import React from 'react';
import { FlatList, Button, StyleSheet, Platform } from 'react-native';
import { useSelector, useDispatch } from 'react-redux'; 
import { HeaderButtons, Item } from 'react-navigation-header-buttons';

import ProductItem from '../../components/shop/ProductItem';
import HeaderButton from '../../components/ui/HeaderButton';
import Colors from '../../constants/Colors';
import * as productsActions from '../../store/actions/products';

const UserProductsScreen = props => {
    const dispatch = useDispatch();
    const userProducts = useSelector(state => state.products.userProducts);

    const editProductHandler = (id) => {
        props.navigation.navigate('EditProduct', { productId: id });
    }

    return (<FlatList 
        data={userProducts}
        keyExtractor={item => item.id}
        renderItem={itemData => (
            <ProductItem 
                imageUrl={itemData.item.imageUrl}
                title={itemData.item.title}
                price={itemData.item.price}
                onSelect={() => {}}
            >
                <Button 
                    color={Colors.primary}
                    title="Edit"
                    onPress={() => {
                        editProductHandler(itemData.item.id);
                    }} />
                <Button 
                    color={Colors.secondary}
                    title="Delete"
                    onPress={() => {
                        dispatch(productsActions.deleteProduct(itemData.item.id));
                    }} /> 
            </ProductItem>
        )}
    />);
};

const styles = StyleSheet.create({

});

UserProductsScreen.navigationOptions = navData => {
    return {
        headerTitle: 'Your Products',
        headerLeft: () => (<HeaderButtons HeaderButtonComponent={HeaderButton}>
            <Item 
                title='Menu'
                iconName={Platform.OS === 'android' ? 'md-menu' : 'ios-menu' }
                onPress={() => {
                    navData.navigation.toggleDrawer();
                }} />
        </HeaderButtons>),
        headerRight: () => (<HeaderButtons HeaderButtonComponent={HeaderButton}>
            <Item 
                title='Add'
                iconName={Platform.OS === 'android' ? 'md-create' : 'ios-create' }
                onPress={() => {
                    navData.navigation.navigate('EditProduct');
                }} />
        </HeaderButtons>)
    }
};


export default UserProductsScreen;