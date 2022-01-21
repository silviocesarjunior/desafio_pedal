import React from 'react';
import { View, Image, StyleSheet } from 'react-native';


export default class MenuItem extends React.Component {
    render() {
        return (
            <View style={styles.menuItem}>
                <Image 
                source={this.props.itemImage}
                style={styles.images} />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    menuItem: {
        width: '25%',
        height: '100%',
    },
    images: {
        justifyContent: 'space-between',
    }
});