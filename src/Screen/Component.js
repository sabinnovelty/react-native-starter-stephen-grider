import React from 'react';
import { View, Text, StyleSheet } from 'react-native'

export default function Component() {
    return (
        <View style={styles.parent}>
            <View style={styles.child1}>
                <Text>Child1</Text>
            </View>
            <View style={styles.child2}>
                <Text>Child2</Text>
            </View>
            <View style={styles.child3}>
                <Text>Child3</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    parent: {
        flexDirection: "column",
        flex: 1,


    },
    child1: {
        height: 100,
        borderWidth: 1,
        // alignSelf: "center"
        position: 'absolute',
        ...StyleSheet.absoluteFillObject,
        backgroundColor: 'red'


    },
    child2: {
        height: 100,
        borderWidth: 1,
    },
    child3: {
        height: 100,
        borderWidth: 1,
        // flex: 2
    }
})
