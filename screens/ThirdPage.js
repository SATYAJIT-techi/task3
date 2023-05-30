import { StyleSheet, Text, View, Dimensions, Image, Switch } from 'react-native'
import React,{useState} from 'react'

const ThirdPage = () => {
    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);
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
        },
        {
            "id": "4",
            "image": "https://reactnative.dev/img/tiny_logo.png",
            "name": "John",
            "message": "lorem if sum was tlorem if sum was not metlorem if sum was not metlorem if sum was not met",
        },
        {
            "id": "4",
            "image": "https://reactnative.dev/img/tiny_logo.png",
            "name": "John",
            "message": "lorem if sum was tlorem if sum was not metlorem if sum was not metlorem if sum was not met",
        },
        {
            "id": "4",
            "image": "https://reactnative.dev/img/tiny_logo.png",
            "name": "John",
            "message": "lorem if sum was tlorem if sum was not metlorem if sum was not metlorem if sum was not met",
        }
    ]
    return (
        <View>
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
            <View style={styles.aboutTextcontaintcontaint}>
                <Text style={styles.abouttext}>ABOUT</Text>

                <Text numberOfLines={3} style={{ fontSize: 17, maxWidth: 350 }}>
                    A startup company is a newly formed business with particular momentum
                     behind it based on perceived demand for its product or service. 
                     The intention of a startup is to grow rapidly as a result of offering 
                     something that addresses a particular market gap.</Text>
                <View style={styles.termsncondition}>
                    <Text style={{ color: 'black', fontSize: 20 }}>Terms And Condition</Text>
                    <Text style={{ color: 'cyan' }}>See More</Text>
                </View>
                <View style={styles.notification}>
                    <Text style={{ color: 'black', fontSize: 20 }}>Notification</Text>
                    <Switch
                        trackColor={{ false: '#767577', true: '#81b0ff' }}
                        thumbColor={isEnabled ? '#f5dd4b' : '#f4f3f4'}
                        ios_backgroundColor="#3e3e3e"
                        onValueChange={toggleSwitch}
                    value={isEnabled}
                    />
                </View>
            </View>
            <View>
                <Text style={{marginLeft:20,color:'black',fontSize:25}}>Participants</Text>
                {
                    DATA.map((item,index) => {
                        return(
                            <View key={index} style={{flexDirection:'row',marginTop:10}}>
                                <Image source={{uri:'https://reactnative.dev/img/tiny_logo.png'}} style={styles.usericon}/>
                            
                                <Text style={{marginLeft:10,fontSize:20,color:'black'}}>{item.name}</Text>
                                </View>
                        )
                    })
                }
            </View>
        </View>
    )
}

export default ThirdPage

const styles = StyleSheet.create({
    headerContain: {
        // backgroundColor: 'pink',
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height * 0.1,
        justifyContent: 'space-between',
        flexDirection: 'row',
        alignItems: 'center'
    },
    aboutTextcontaint: {
        backgroundColor: 'lightgrey',
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height * 0.22,
        paddingLeft: 10,
        paddingRight: 10,
        paddingTop: 5,
        // marginTop:10
    },
    abouttext:{ fontSize: 20, color: 'black', marginBottom: 10 },
    termsncondition:{ flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: 5, marginTop: 20 },
    notification:{ flexDirection: 'row',justifyContent:'space-between',marginHorizontal:5,marginTop:10 },
    usericon:{height:40,width:40,borderRadius:20,marginLeft:20},
})