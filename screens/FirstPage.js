import { StyleSheet, Text, View, Dimensions, Image, TextInput, FlatList, TouchableOpacity } from 'react-native'
import React from 'react'

const FirstPage = ({ navigation }) => {
    const DATA = [
        {
            "id": "1",
            "name": "John",
            "message": "hello, how r u"

        },
        {
            "id": "2",
            "name": "John",
            "message": "hello, how r u"

        },
        {
            "id": "3",
            "name": "John",
            "message": "hello, how r u"

        },
        {
            "id": "4",
            "name": "John",
            "message": "hello, how r u"

        },
        {
            "id": "5",
            "name": "John",
            "message": "hello, how r u"

        },
        {
            "id": "6",
            "name": "John",
            "message": "hello, how r u"

        },
        {
            "id": "7",
            "name": "John",
            "message": "hello, how r u"

        },
        {
            "id": "8",
            "name": "John",
            "message": "hello, how r u"

        }
    ]
    return (
        <View style={styles.container}>
            <View style={styles.headerContain}>

                <Image source={{
                    uri: 'https://reactnative.dev/img/tiny_logo.png',
                }} style={styles.userIcon} />
                <Text style={styles.messageText}>Messager</Text>
                <Image source={{
                    uri: 'https://reactnative.dev/img/tiny_logo.png',
                }} style={styles.bellIcon} />
            </View>

            <View style={styles.searchInput}>
                <TextInput placeholder='Search' style={styles.userInputText} />
            </View>

            <View style={styles.toggleContent}>
                <View style={styles.toggleContentText}>
                    <Text>INBOX</Text>
                </View>
                <View style={styles.toggleContentText}>
                    <Text>COMMUNITY</Text>
                </View>

            </View>
            <View style={styles.messageArea}>
                {DATA ? <FlatList
                    data={DATA}
                    renderItem={({ item }) =>
                        <View style={styles.listrender}>

                            <View style={{ flexDirection: 'row', height: 70, }}>
                                <Image source={{
                                    uri: 'https://reactnative.dev/img/tiny_logo.png',
                                }} style={styles.userIcon2} />
                                <View style={{ marginLeft: 15 }}>
                                    <Text style={{ fontSize: 20, color: 'black' }}>{item.name}</Text>
                                    <Text>{item.message}</Text>
                                </View>
                            </View>
                            <Text style={{ marginRight: 18 }}>71/100</Text>

                        </View>}
                    keyExtractor={item => item.id}
                />
                    : null}


            </View>

        </View>
    )
}

export default FirstPage

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    headerContain: {
        // backgroundColor: 'pink',
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height * 0.1,
        justifyContent: 'space-between',
        flexDirection: 'row',
        alignItems: 'center'
    },
    userIcon: {
        height: 40, width: 40, borderRadius: 20, marginHorizontal: 10,
    },
    messageText: { fontSize: 30, color: 'black' },
    bellIcon: {
        height: 20, width: 20, marginHorizontal: 10,
    },
    searchInput: {
        alignItems: 'center',
    },
    userInputText: {
        height: Dimensions.get('window').height * 0.05,
        width: Dimensions.get('window').width * 0.9,
        backgroundColor: 'lightgrey',
        borderRadius: 10,
        // marginLeft:Dimensions.get('window').width*0.05,
        paddingLeft: 20,
    },
    toggleContent: {
        justifyContent: 'space-around',
        flexDirection: 'row',
        height: Dimensions.get('window').height * 0.05,
        width: Dimensions.get('window').width,
        marginTop: 10,
        // backgroundColor: 'yellow',
        alignItems: 'center'
    },
    listrender:{ flexDirection: 'row', justifyContent: 'space-between' },
    toggleContentText:{ borderBottomWidth: 5, borderColor: 'cyan' },
    userIcon2:{
        height: 60, width: 60, borderRadius: 30, marginHorizontal: 10,
    },
    messageArea: {
        backgroundColor: 'lightgrey',
        height: Dimensions.get('window').height * 0.8,
        width: Dimensions.get('window').width,
    }
})