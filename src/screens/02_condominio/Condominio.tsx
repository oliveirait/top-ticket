import * as R from "react-native" 
import { useNavigation } from '@react-navigation/native'
import { Components } from "../../components"

export const Condominio = () => {

    const navigation = useNavigation()

    function handleBackPage () {
        navigation.goBack()
    }
    return (
        <R.View style={styles.container}>
            <R.Text>Segunda Tela</R.Text>
            <Components.Button text="Voltar" onPress={handleBackPage}/>
        </R.View>
    )
}

const styles = R.StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
})