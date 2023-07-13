import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { AppRoutes } from './AppRoutes';


export const Routes = () => {
    return (
        <NavigationContainer>
            <AppRoutes />
        </NavigationContainer>
    )
}