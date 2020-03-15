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
                        
                    }} />
                <Button 
                    color={Colors.secondary}
                    title="Delete"
                    onPress={() => {
                        dispatch(productsActions.deleteProduct(itemData.item.id))
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
        </HeaderButtons>)
    }
};


export default UserProductsScreen;