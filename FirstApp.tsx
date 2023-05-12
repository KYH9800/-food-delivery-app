/* eslint-disable @typescript-eslint/no-unused-vars */
import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import {useState} from 'react';

// components
import Settings from './src/pages/Settings';
import Orders from './src/pages/Orders';
import Delivery from './src/pages/Delivery';

// page
import SignIn from './src/pages/SignIn';
import SignUp from './src/pages/SignUp';

export type LoggedInParamList = {
  Orders: undefined;
  Settings: undefined;
  Delivery: undefined;
  Complete: {orderId: string};
};

export type RootStackParamList = {
  SignIn: undefined;
  SignUp: undefined;
};

/*****************************
 * Stack 내부구조 설명

  function Stack() { return <View></View> }
  function Navigator() { return <View></View> }
  function Screen() { return <View></View> }

  Stack.Navigator = Navigator;
  Stack.Screen = Screen;
 *****************************/
/*****************************
 * 이거 그냥 외우자
 * 이걸로 Navigator가 동작한다.
 *****************************/
const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator<RootStackParamList>();

/***************************************************************
 * <Stack.Screen/>의 options은 screen에 대한 option
 * Home 설정 되어 있는 것이 기본 화면
 * 초반에 어떤 페이지가 필요할지 고안하고 <Stack.Navigator/> 안에 쫙 깔면된다.
 ***************************************************************/
function App() {
  /******************* useState *******************/
  const [isLoggedIn, setLoggedIn] = useState(false);

  return (
    <NavigationContainer>
      {isLoggedIn ? (
        <Tab.Navigator>
          <Tab.Screen
            name="Orders"
            component={Orders}
            options={{title: '오더 목록'}}
          />
          <Tab.Screen
            name="Delivery"
            component={Delivery}
            options={{headerShown: false}}
          />
          <Tab.Screen
            name="Settings"
            component={Settings}
            options={{title: '내 정보'}}
          />
        </Tab.Navigator>
      ) : (
        <Stack.Navigator>
          <Stack.Screen
            name="SignIn"
            component={SignIn}
            options={{title: '로그인'}}
          />
          <Stack.Screen
            name="SignUp"
            component={SignUp}
            options={{title: '회원가입'}}
          />
        </Stack.Navigator>
      )}
    </NavigationContainer>
  );
}

export default App;

/***************************************************************
 * import {
 *   SafeAreaView, // 노치 부분을 채워서 아래 부분부터 그려준다.
 *   StyleSheet, // css를 그리기 위해 사용하는 것
 *   Text, // span tag
 *   View, // div tag
 * ScrollView, // Scroll 부분을 담당, 성능 문제로 Flatlist를 사용한다.
 * StatusBar, // 상단 베터리 부분을 그려준다. react-native-status-bar-height 라이브러리로 높이 구한다.
 * useColorScheme, // light 및 dark 테마
 * } from 'react-native';
 ***************************************************************/
