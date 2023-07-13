import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { Screens } from "../screens"

const Stack = createNativeStackNavigator()

export const AppRoutes = () => {
    return (
        <Stack.Navigator 
            initialRouteName="home" 
            screenOptions={{
                headerTitleAlign: 'center', 
                headerStyle: {backgroundColor: '#020069'}, 
                headerTintColor: '#fff', 
                statusBarTranslucent: false,
                headerShown: false,
                statusBarStyle: "dark"
                
            }}
        >
            <Stack.Screen 
                name="home" 
                component={Screens.Home} 
                options={{headerTitle: "EVENTOS E LOCAIS"}}
            />
            <Stack.Screen 
                name="condominio" 
                component={Screens.Condominio} 
                options={{headerTitle: "CONDOMINIO"}}
            />
        </Stack.Navigator>
    )
}
