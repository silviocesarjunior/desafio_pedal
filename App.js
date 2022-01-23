import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Home from '../Desafio/screens/Home';
import Percurso from '../Desafio/screens/Percurso';

const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator >
      <Stack.Screen name="Monitor de Atividade" component={Home} />
      <Stack.Screen name="Gravar atividade" component={Percurso} />
     
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
  );
}


