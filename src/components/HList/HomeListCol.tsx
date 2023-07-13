import { EventsProps } from "../../@types/eventsProps"
import { ListRenderItemInfo, View, Image, Text, StyleSheet } from "react-native"


export const ListCol = ({item}: ListRenderItemInfo<EventsProps> ) => {
    return (
        <View style={styles.container}>
            <View style={styles.containerImage}>
                <Image 
                    source={{uri: item?.eventImageUrl }}  
                    style={styles.image}
                    resizeMode="contain"
                />
            </View>
            <View>
                <Text style={styles.textEvent}>{item?.eventDataInit} {'>'} {item?.eventDataEnd} {', '} {item?.eventHora}</Text>
            </View>
            <View>
                <Text style={styles.textName}>{item?.eventName.toUpperCase()}</Text>
            </View>
            <View>
                <Text style={styles.textLocal}>{item?.eventEnd}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {flex: 1, justifyContent: 'center', alignItems: 'flex-start', margin: 10, backgroundColor: '#fff'},
    containerImage: { flex: 1 ,width: 200, height: 150, elevation: 200, shadowColor: '#000'},
    image: {width: '100%', height: '100%', borderRadius: 10},
    textEvent: {color: '#638dff', fontWeight: "800", marginVertical: 3},
    textHour: {color: '#638dff', fontWeight: "800", marginVertical: 3},
    textName: {fontWeight: "bold"},
    textLocal: {},
    
})