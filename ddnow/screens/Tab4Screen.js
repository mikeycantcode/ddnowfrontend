import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

function Tab4Screen() {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Stats</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#D5DCDD',
    },
    text: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
});

export default Tab4Screen;
