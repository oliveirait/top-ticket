import { Dimensions, StyleSheet } from 'react-native'


export const styles = StyleSheet.create({
    container: {
        flex: 1,
    },

    header: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#fff',
        width: '100%',
        height: 80,
        flexDirection: 'row',
        
    },

    userLogo: {
        width: 60,
        height: 60,
        borderRadius: 100,
        borderWidth: 0,
        alignSelf: 'center',
        margin: 1
    },

    userInfoContainer: {
        
    },

    userInfo: {
        width: Dimensions.get('screen').width/1.3,
        height: 60,
        borderWidth: 0,
        paddingLeft: 15,
        
    },

    userText: {
        margin: 0,
        textAlign: 'left'
    },

    listContainer: {
        flex: 1,
        backgroundColor: '#fff',
        width: '100%',
        

    },

    col1: {
        flex: 1,
        backgroundColor: '#fff',
        borderWidth: 0,
        height: '100%',
        marginBottom: 10
    }, 

    col2: {
        flex: 1,
        backgroundColor: '#fff',
        borderWidth: 0,
        height: '100%',
        marginBottom: 10
    },

    col3: {
        flex: 1,
        backgroundColor: '#fff',
        borderWidth: 0,
        height: '100%',
        marginBottom: 10
    },

    titleCol: {
        fontSize: 16, padding: 10, paddingBottom: -5, fontWeight: "bold"
    }



})