import * as R from 'react-native';

interface ButtonActionsProps extends R.TouchableOpacityProps {
    text: string
}

export const ButtonActions = ({text, ...rest }: ButtonActionsProps) => {
    return (
        <R.TouchableOpacity style={style.container} {...rest} >
            <R.Text style={style.text}> {text} </R.Text>
        </R.TouchableOpacity>
    )
}

const style = R.StyleSheet.create({
    container: {
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        width: 200,
        height: 50,
        backgroundColor: '#020069',
        borderRadius: 10,
    },

    text: {
        color: '#fff',
        fontSize: 16
    }
})