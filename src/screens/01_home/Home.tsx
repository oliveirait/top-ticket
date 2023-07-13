import * as R from "react-native"
import { useNavigation } from '@react-navigation/native';
import { Components } from "../../components";
import { GitHubProps } from "../../@types/github";
import { useEffect, useState } from "react";
import axios from 'axios';


interface EventsProps {
    id: string
    eventImageUrl: string
    eventName: string
    eventData: string
    eventHora: string
    eventEnd: string
}

export const Home = () => {

    const navigation = useNavigation()
    const [github, setGithub] = useState({} as GitHubProps)
    const [list] = useState<EventsProps[]>([
        {
            id: '9874ykfsdakfd', 
            eventImageUrl: 'https://th.bing.com/th/id/OIF.YmiDx0e07WX1rwXyjgYwIw?pid=ImgDet&rs=1',
            eventData: '01 Ago > 07 Ago',
            eventHora: 'oeqhljsfdjls', 
            eventName: 'Roberto Carlos', 
            eventEnd: 'Jeunese Arena, Rio de Janeiro, RJ'  
        },

        {
            id: '9874ykf4830ufhlsdakflsdakfd', 
            eventImageUrl: 'https://yoconciertos.com/wp-content/uploads/2020/02/marilia-mendoza.jpg',
            eventData: '01 Ago > 07 Ago',
            eventHora: 'oeqhljsfdjls', 
            eventName: 'Marilia Mendonça', 
            eventEnd: 'Teatro Samuca, Sao Paulo, SP'  
        },

        {
            id: 'fgdsgfds', 
            eventImageUrl: 'https://assets-global.website-files.com/646fe05b7f9f336ff2f3a94e/64949a4449ac83b2f6240d91_BANNER_1920X1080_DATAEXTRARJ.png',
            eventData: '01 Ago > 07 Ago',
            eventHora: 'oeqhljsfdjls', 
            eventName: 'Taylor Swift', 
            eventEnd: 'Teatro Samuca, Sao Paulo, SP'  
        },

        {
            id: '5245253', 
            eventImageUrl: 'https://www.minasgerais.com.br/imagens/eventos/1646825557ycUNOy7g52.jpg',
            eventData: '01 Ago > 07 Ago',
            eventHora: 'oeqhljsfdjls', 
            eventName: 'Metálica', 
            eventEnd: 'Teatro Samuca, Sao Paulo, SP'  
        },

        {
            id: '54dsfgfsdg', 
            eventImageUrl: 'https://images.ticket360.com.br/images.ticket360/midias/responsive/509.jpg',
            eventData: '01 Ago > 07 Ago', 
            eventHora: 'oeqhljsfdjls', 
            eventName: 'Lulu Santos', 
            eventEnd: 'Jeunese Arena, Rio de Janeiro, RJ'  
        },
    ])

    const ListCol1 = ({item}: R.ListRenderItemInfo<EventsProps> ) => {
        return (
            <R.View style={{flex: 1, justifyContent: 'center', alignItems: 'flex-start', margin: 10, backgroundColor: '#fff'}}>
                <R.View style={{ flex: 1 ,width: 200, height: 150, elevation: 200, shadowColor: '#000'}}>
                    <R.Image 
                        source={{uri: item?.eventImageUrl }}  
                        style={{width: '100%', height: '100%', borderRadius: 10}}
                        resizeMode="contain"
                    />
                </R.View>
                <R.View>
                    <R.Text style={{color: '#638dff', fontWeight: "800", marginVertical: 3}}>{item?.eventData}</R.Text>
                </R.View>
                <R.View>
                    <R.Text style={{fontWeight: "bold"}}>{item?.eventName.toUpperCase()}</R.Text>
                </R.View>
                <R.View>
                    <R.Text>{item?.eventEnd}</R.Text>
                </R.View>
            </R.View>
        )
    }

    const ListCol2 = ({item}: R.ListRenderItemInfo<EventsProps> ) => {
        return (
            <R.View style={{flex: 1, justifyContent: 'center', alignItems: 'flex-start', margin: 10, backgroundColor: '#fff'}}>
                <R.View style={{ flex: 1 ,width: 200, height: 150, elevation: 200, shadowColor: '#000'}}>
                    <R.Image 
                        source={{uri: item?.eventImageUrl }}  
                        style={{width: '100%', height: '100%', borderRadius: 10}}
                        resizeMode="contain"
                    />
                </R.View>
                <R.View>
                    <R.Text style={{color: '#638dff', fontWeight: "800", marginVertical: 3}}>{item?.eventData}</R.Text>
                </R.View>
                <R.View>
                    <R.Text style={{fontWeight: "bold"}}>{item?.eventName.toUpperCase()}</R.Text>
                </R.View>
                <R.View>
                    <R.Text>{item?.eventEnd}</R.Text>
                </R.View>
            </R.View>
        )
    }

    const ListCol3 = ({item}: R.ListRenderItemInfo<EventsProps> ) => {
        return (
            <R.View style={{flex: 1, justifyContent: 'center', alignItems: 'flex-start', margin: 10, backgroundColor: '#fff'}}>
                <R.View style={{ flex: 1 ,width: 200, height: 150, elevation: 200, shadowColor: '#000'}}>
                    <R.Image 
                        source={{uri: item?.eventImageUrl }}  
                        style={{width: '100%', height: '100%', borderRadius: 10}}
                        resizeMode="contain"
                    />
                </R.View>
                <R.View>
                    <R.Text style={{color: '#416bdd', fontWeight: "800", marginVertical: 3}}>{item?.eventData}</R.Text>
                </R.View>
                <R.View>
                    <R.Text style={{fontWeight: "bold"}}>{item?.eventName.toUpperCase()}</R.Text>
                </R.View>
                <R.View>
                    <R.Text>{item?.eventEnd}</R.Text>
                </R.View>
            </R.View>
        )
    }


   
    function handleNextPage () {
        navigation.navigate('condominio')
    }

    async function getUser () {
        await axios.get(`https://api.github.com/users/oliveirait`)
            .then((data) => { 
                setGithub(data.data) 
            })
            .catch((err) => console.log(err))
    }

    useEffect(() => {
        getUser()
       
    }, [])

    return (
        <R.ScrollView style={styles.container}>
            <R.View style={styles.header}>
                <R.View style={styles.userLogo}>
                    <R.Image 
                        source={{uri: github?.avatar_url }}  
                        style={{width: '100%', height: '100%', borderRadius: 100}}
                        resizeMode="contain"
                    />
                </R.View>
                <R.View style={styles.userInfoContainer}>
                    <R.View style={{...styles.userInfo, justifyContent: 'center'}}>
                        <R.Text style={styles.userText}>{github?.name}</R.Text>
                        <R.Text style={styles.userText}>{github?.location}</R.Text>
                    </R.View>
                </R.View>
            </R.View>

            <R.View style={styles.listContainer}>
                <R.View style={{flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 5}}>
                    <R.Text style={styles.titleCol}>Eventos em destaque</R.Text>
                    <R.TouchableOpacity> 
                        <R.Text style={{...styles.titleCol, color: '#154add'}}>Ver mais</R.Text> 
                    </R.TouchableOpacity>
                </R.View>
                
                <R.View style={styles.col1}>
                    <R.FlatList 
                        showsHorizontalScrollIndicator={false}
                        horizontal
                        data={list}
                        keyExtractor={(item) => item?.id}
                        renderItem={ ListCol1 }
                    />
                </R.View>
                <R.View style={styles.col2}>
                <R.View style={{flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 5}}>
                    <R.Text style={styles.titleCol}>Festas e shows</R.Text>
                    <R.TouchableOpacity> 
                        <R.Text style={{...styles.titleCol, color: '#154add'}}>Ver mais</R.Text> 
                    </R.TouchableOpacity>
                </R.View>
                <R.FlatList 
                        showsHorizontalScrollIndicator={false}
                        horizontal
                        data={list}
                        keyExtractor={(item) => item?.id}
                        renderItem={ ListCol2 }
                    />
                </R.View>
                <R.View style={styles.col3}>
                
                <R.View style={{flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 5}}>
                    <R.Text style={styles.titleCol}>Peças de teatro e Standup</R.Text>
                    <R.TouchableOpacity> 
                        <R.Text style={{...styles.titleCol, color: '#154add'}}>Ver mais</R.Text> 
                    </R.TouchableOpacity>
                </R.View>
                
                <R.FlatList 
                        showsHorizontalScrollIndicator={false}
                        horizontal
                        data={list}
                        keyExtractor={(item) => item?.id}
                        renderItem={ ListCol3 }
                    />
                </R.View>
            </R.View>
        </R.ScrollView>
    )
}

const styles = R.StyleSheet.create({
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
        width: R.Dimensions.get('screen').width/1.3,
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