import { StyleSheet, Text, View, Image, Dimensions, ImageBackground, FlatList, TextInput, KeyboardAvoidingView } from 'react-native'
import React from 'react'

const SecondPage = () => {

    const DATA = [
        {
            "id": "1",
            "image": "https://reactnative.dev/img/tiny_logo.png",
            "name": "John",
            "message": "lorem if sum was not met lorem if sum was not metlorem if sum was ",
        },
        {
            "id": "2",
            "image": "https://reactnative.dev/img/tiny_logo.png",
            "name": "John",
            "message": "lorem if sum was not met lorem if sum was not metlorem if sum was not metlorem if sum was not metlorem if sum was not met",
        },
        {
            "id": "3",
            "image": "https://reactnative.dev/img/tiny_logo.png",
            "name": "John",
            "message": "lorem if sum was not met lorem if sum was not metlorem if sum was not metlorem if sum w met",
        },
        {
            "id": "4",
            "image": "https://reactnative.dev/img/tiny_logo.png",
            "name": "John",
            "message": "lorem if sum was tlorem if sum was not metlorem if sum was not metlorem if sum was not met",
        }
    ]


    return (
        <View style={styles.container}>
            <View style={styles.headerContain}>
                <View style={{
                    flexDirection: 'row', justifyContent: 'space-around',
                    width: Dimensions.get('window').width * 0.5
                }}>
                    <Text> - </Text>
                    <Image source={{
                        uri: 'https://reactnative.dev/img/tiny_logo.png',
                    }} style={{
                        height: 40, width: 40, borderRadius: 20, marginHorizontal: 10,
                    }} />
                    <View>
                        <Text style={{ fontSize: 20, color: 'black' }}>Startup House</Text>
                        <Text>91/100</Text>
                    </View>
                </View>
                <Image source={{
                    uri: 'https://reactnative.dev/img/tiny_logo.png',
                }} style={{
                    height: 20, width: 20, marginHorizontal: 10,
                }} />
            </View>

            <View style={{
                backgroundColor: 'lightgrey',
                height: Dimensions.get('window').height*0.9,
            }}>
                {console.log(DATA)}
                {

                    DATA ?
                        <FlatList
                            data={DATA}
                            renderItem={({ item }) => {
                                return (
                                    <View style={{ height: 70, flexDirection: 'row', maxWidth: 350, marginTop: 10, marginLeft: 10 }}>
                                        <Image source={{ uri: 'https://reactnative.dev/img/tiny_logo.png', }} style={{ height: 50, width: 50, borderRadius: 25 }} />
                                        <View style={{ borderRadius: 15, marginLeft: 10, backgroundColor: 'darkgrey', padding: 4 }}>

                                            <Text style={{ fontSize: 18, color: 'black' }}>{item.name}</Text>
                                            <Text style={{ maxWidth: 200 }}>{item.message}</Text>


                                        </View>
                                    </View>
                                )
                            }}
                            keyExtractor={item => item.id}
                        />
                        : null


                }

                
                    <TextInput style={{ height: 40, width: Dimensions.get('window').width * 0.9, backgroundColor: 'white', borderRadius: 20, marginHorizontal: 20, marginVertical: 10 }} placeholder='Type a message' />

            </View>
        </View>
    )
}

export default SecondPage

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    headerContain: {
        // backgroundColor: 'yellow',
        elevation: 5,
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height * 0.08,
        justifyContent: 'space-between',
        flexDirection: 'row',
        alignItems: 'center'
    },
})