import * as R from "react-native"
import { styles } from "./styles";
import { useNavigation } from '@react-navigation/native';
import { useEffect, useState } from "react";
import axios from 'axios';

import { Components } from "../../components";
import { GitHubProps } from "../../@types/githubProps";
import { EventsProps } from "../../@types/eventsProps";
import { ListCol } from "../../components/HList/HomeListCol";



export const Home = () => {

    const navigation = useNavigation()
    const [github, setGithub] = useState({} as GitHubProps)
    const [list] = useState<EventsProps[]>([
        {
            id: '9874ykfsdakfd', 
            eventImageUrl: 'https://th.bing.com/th/id/OIF.YmiDx0e07WX1rwXyjgYwIw?pid=ImgDet&rs=1',
            eventDataInit: '01 Ago',
            eventDataEnd: '07 Set',
            eventHora: '19:00',
            eventName: 'Roberto Carlos', 
            eventEnd: 'Jeunese Arena, Rio de Janeiro, RJ'  
        },

        {
            id: '9874ykf4830ufhlsdakflsdakfd', 
            eventImageUrl: 'https://yoconciertos.com/wp-content/uploads/2020/02/marilia-mendoza.jpg',
            eventDataInit: '01 Ago',
            eventDataEnd: '07 Set',
            eventHora: '19:00',
            eventName: 'Marilia Mendonça', 
            eventEnd: 'Teatro Samuca, Sao Paulo, SP'  
        },

        {
            id: 'fgdsgfds', 
            eventImageUrl: 'https://assets-global.website-files.com/646fe05b7f9f336ff2f3a94e/64949a4449ac83b2f6240d91_BANNER_1920X1080_DATAEXTRARJ.png',
            eventDataInit: '01 Ago',
            eventDataEnd: '07 Set',
            eventHora: '19:00',
            eventName: 'Taylor Swift', 
            eventEnd: 'Teatro Samuca, Sao Paulo, SP'  
        },

        {
            id: '5245253', 
            eventImageUrl: 'https://www.minasgerais.com.br/imagens/eventos/1646825557ycUNOy7g52.jpg',
            eventDataInit: '01 Ago',
            eventDataEnd: '07 Set',
            eventHora: '19:00',
            eventName: 'Metálica', 
            eventEnd: 'Teatro Samuca, Sao Paulo, SP'  
        },

        {
            id: '54dsfgfsdg', 
            eventImageUrl: 'https://images.ticket360.com.br/images.ticket360/midias/responsive/509.jpg',
            eventDataInit: '01 Ago',
            eventDataEnd: '07 Set',
            eventHora: '19:00',
            eventName: 'Lulu Santos', 
            eventEnd: 'Jeunese Arena, Rio de Janeiro, RJ'  
        },
    ])

   
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
                        renderItem={ ListCol }
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
                        renderItem={ ListCol }
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
                        renderItem={ ListCol }
                    />
                </R.View>
            </R.View>
        </R.ScrollView>
    )
}