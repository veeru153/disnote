import React, { useState } from 'react';
import { View, TextInput, Text, StyleSheet, Button, SectionList } from 'react-native';
import { TouchableOpacity, FlatList } from 'react-native-gesture-handler';
import moment from 'moment';
import momentTz from 'moment-timezone';
import Card from './Card';
import DateHeader from './DateHeader';

const Notes = (props) => {
    const [text, setText] = useState('');
    const [height, setHeight] = useState(42);
    const [notes, setNotes] = useState([]);

    const handleNoteSumbit = () => {
        let timestamp = moment().unix();
        let prevTs = notes.length != 0 ? notes[notes.length-1].timestamp : "00000";

        if(moment.unix(timestamp).format('YMMDD') != moment.unix(prevTs).format('YMMDD')) {
            setNotes(notes => [...notes, {type: 'section', timestamp: timestamp}])
        }
        
        setNotes(notes => [...notes, {type: 'note', timestamp: timestamp, content: text} ])
        setText('');
        setHeight(42)
    }

    const renderList = (item) => {
        if(item.type == 'section') {
            return ( <DateHeader timestamp={item.timestamp} />)
        } else {
            return ( <Card timestamp={item.timestamp} note={item.content} /> )
        }
    }

    return (
        <View style={styles.Notes}>
            <View style={styles.notesContainer}>
                <FlatList
                    data={notes}
                    renderItem={({ item }) => renderList(item)}
                    keyExtractor={(item, key) => `${key}`}
                />
            </View>
            <View style={styles.textInpContainer}>
                <TextInput
                    style={{ ...styles.textInp, height: height }}
                    placeholder="Type something..."
                    onChangeText={text => setText(text)}
                    defaultValue={text}
                    onContentSizeChange={e => setHeight(e.nativeEvent.contentSize.height)}
                    multiline
                />
                <TouchableOpacity style={styles.textSubmitBtn} onPress={handleNoteSumbit}>
                    <Text style={{ color: '#dcddde' }}>Send</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    Notes: {
        display: 'flex',
        padding: 8,
        width: '100%',
        height: '100%',
        // backgroundColor: '#36393f',
        backgroundColor: '#2f3136',
        flex: 1
    },
    notesContainer: {
        flex: 11,
    },
    textInpContainer: {
        display: "flex",
        flexDirection: "row",
        borderRadius: 8,
        overflow: "hidden"

    },
    textInp: {
        flex: 8,
        padding: 12,
        backgroundColor: '#40444b',
        height: 44,
        fontSize: 16,
        color: '#dcddde',
    },
    textSubmitBtn: {
        flex: 4,
        width: 52,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: '#40444b',
    }
})

export default Notes;