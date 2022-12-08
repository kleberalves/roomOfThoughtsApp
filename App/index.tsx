
import React, { useEffect, useRef, useState } from 'react';
import {
  NativeScrollEvent,
  NativeSyntheticEvent,
  PanResponder,
  SafeAreaView,
  ScrollView,
  StyleProp,
  Text,
  View,
  ViewStyle,
  Animated as AnimatedRN,
  TextStyle
} from 'react-native';
import Animated, { useSharedValue, useAnimatedGestureHandler, withSpring, useAnimatedStyle } from 'react-native-reanimated';
import { PanGestureHandler } from 'react-native-gesture-handler';

import { ThemeProvider } from 'styled-components';
import Header from './components/Header';

import TaskCard from './components/TaskCard';
import { ETaskState } from './enums/ETaskState';
import useAppTheme from './services/useAppTheme';
import { backgroundStyle, BoxNewTaskStyle, BoxNewTaskText, scrollViewStyle } from './styles/HomeStyles';

const App = () => {
  const [activeChildrenIndex, setActiveChildrenIndex] = useState<number>(-1);

  const { theme } = useAppTheme();


  const BoxNewTaskStyleTheme: StyleProp<ViewStyle> = {
    backgroundColor: theme.bg,
    borderColor: theme.bgGray
  };
  const BoxNewTaskTextTheme: TextStyle = {
    color: theme.fg
  }

  return (
    <ThemeProvider theme={theme}>
      <SafeAreaView style={backgroundStyle}>
        <Header />

        <ScrollView scrollEventThrottle={1}
          contentInsetAdjustmentBehavior="automatic">
          <View style={scrollViewStyle}>


            <TaskCard title="To-Do" typeState={ETaskState.Todo} indexControl={{
              current: 0,
              active: activeChildrenIndex,
              set: setActiveChildrenIndex
            }}
            />

            <TaskCard title="In Progress" typeState={ETaskState.InProgress} indexControl={{
              current: 1,
              active: activeChildrenIndex,
              set: setActiveChildrenIndex
            }}
            />

            <TaskCard title="Done" typeState={ETaskState.Done} indexControl={{
              current: 2,
              active: activeChildrenIndex,
              set: setActiveChildrenIndex
            }}
            />
          </View>
        </ScrollView>

        <View
          style={[BoxNewTaskStyleTheme, BoxNewTaskStyle]}>
          <Text style={[BoxNewTaskTextTheme, BoxNewTaskText]}>New task</Text>
        </View>
      </SafeAreaView>
    </ThemeProvider>
  );
};

export default App;
