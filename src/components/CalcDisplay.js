import React from "react";
import {StyleSheet, View, Text} from 'react-native';


export default class CalcDisplay extends React.Component{

    static defaultProps ={
        display: "",
    }

    render(){
        return (
            <View style={styles.container}>
                <Text style={styles.displayText}>{this.props.display}</Text>
            </View>

        );
    }
}

const styles = StyleSheet.create({
    container: {
        paddingBottom: 20,
        paddingEnd: 15,
    },
    displayText: {
        fontSize: 70,
        color: '#002966',
        textAlign: 'right',
    },
});