import React, { useReducer } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const reducer = (state, action) => {
    switch (action.type) {
        case 'increment': return { ...state, counter: state.counter + 1 };
            break;
        case 'decrement': return { ...state, counter: state.counter - 1 };
            break;
        default: return state;
    }
}

export default function Home({ navigation }) {
    const [state, dispatch] = useReducer(reducer, { counter: 0 })
    return (
        <View>
            <Text>Home Component {state.counter}</Text>
            <Button onPress={() => navigation.navigate('Component')} title="Go to component" />
            <Button title="increment" onPress={() => dispatch({ type: 'increment' })} />
            <View style={styles.parent}>
                <View style={styles.viewOneStyle} />
                <View style={styles.viewTwoStyle} />
                <View style={styles.viewThreeStyle} />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    parent: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    viewOneStyle: {
        width: 100,
        height: 100,
        backgroundColor: 'green'
    },
    viewTwoStyle: {
        width: 100,
        height: 100,
        backgroundColor: 'blue',
        marginTop: 100
        // position: 'absolute',
        // top: 50,
        // left: 150
    },
    viewThreeStyle: {
        width: 100,
        height: 100,
        backgroundColor: 'red'
    }
})
