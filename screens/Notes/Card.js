import React, { useState } from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import moment from 'moment';

const Card = (props) => {
    const [expanded, setExpand] = useState(false);

    const styles = StyleSheet.create({
        Card: {
            backgroundColor: '#36393f',
            borderRadius: 8,
            padding: 8,
            margin: 2,
        },
        timestamp: {
            color: '#72767d',
            fontSize: 12
        },
        note: {
            color: '#dcddde',
            fontSize: 16,
        },
        toolbar: {
            display: expanded ? 'flex' : 'none',
            height: 40,
        }
    })

    return (
        <TouchableOpacity 
            style={styles.Card} 
            onPress={() => setExpand(!expanded)}
            activeOpacity={1}
        >
            <Text style={styles.timestamp}>
                {moment.unix(props.timestamp).format("h:mm A")}
            </Text>
            <Text style={styles.note}>{props.note}</Text>
            <View style={styles.toolbar}>
                <Text>Buttons</Text>
            </View>
        </TouchableOpacity>
    )
}


export default Card;