import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Welcome from '../views/Welcome';
import LogIn from '../views/LogIn';

/*
 *  +-----------------------------------+
 *  | Arquivo de rotas.                 |
 *  +-----------------------------------+
*/ 

const Stack = createNativeStackNavigator();

export default function Routes() {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name = 'Welcome'
                component = {Welcome}
                options = {{ headerShown: false }}
            />

            <Stack.Screen
                name = 'LogIn'
                component = {LogIn}
                options = {{ headerShown: false }}
            />
        </Stack.Navigator>
    );
};