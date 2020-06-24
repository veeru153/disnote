import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import moment from 'moment';


const DateHeader = ({ timestamp }) => {
    return (
        <View>
            <Text style={styles.date}>
                {moment.unix(timestamp).startOf('day').format("MMMM DD, Y")}
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    date: {
        fontSize: 24,
        fontWeight: "600",
        color: '#fff',
        margin: 2
    }
})

export default DateHeader;