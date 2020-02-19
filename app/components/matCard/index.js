import React, { Component } from 'react';
import { View, StyleSheet, Text, Image,title,price,Bedroom,land, description,category,subtitle, } from 'react-native';

export default class MatCard extends Component {
    render() {
        const { title, subtitle, category
            , description, img, price,land,Bedroom } = this.props.data
        return (
            <View style={styles.card}>
                <Image style={styles.logo} source={img} />
                <Text style={styles.title}>
                    {title}
                </Text>
                {/* <Text style={styles.text}>{title}</Text> */}
                <Text style={styles.text}>{price}</Text>
                <Text style={styles.text}>{Bedroom}</Text>
                <Text style={styles.text}>{description}</Text>
                <Text style={styles.text}>{land}</Text>
                <Text style={styles.text}>{category}</Text>

<Text style={styles.text}>{subtitle}</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    card: {
        backgroundColor: '#5D6D7E',  
        padding: 30,
        borderRadius: 12,
        marginTop: 30,
    },
    title: {
        fontSize: 24,
        fontWeight: '700',
        color: '#fff'
    },
    logo: {
        width: 325,
        height: 150,
        borderRadius: 12,
        marginBottom: 24,
    },
    text: {
        color: '#fff'
    }
})

