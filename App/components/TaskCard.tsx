
import React, { ReactNode, useEffect, useState } from 'react';
import styled from 'styled-components/native';
import { ETaskState } from '../enums/ETaskState';
import { ITaskItem } from '../interfaces/ITaskItem';
import TaskCardItem from './TaskCardItem';
import { GestureResponderEvent, StyleProp, View, ViewStyle, } from 'react-native';
import Animated, { useAnimatedStyle, useSharedValue, withTiming } from 'react-native-reanimated';
import { IIndexControl } from '../interfaces/IIndexControl';
import { ImgIndicatorDone, ImgIndicatorInProgress, ImgIndicatorTodo } from '../img/ImgDots';
import useAppTheme from '../services/useAppTheme';
import { BoxTasksCardStyle, ButtonExpandTheme, CardTitleTheme, DotsTextTheme, taskCardViewStyle, TextButtonExpand } from '../styles/TaskCardStyles';


type TaskCardProps = {
    title?: string;
    children?: ReactNode;
    typeState: ETaskState;
    indexControl: IIndexControl;
}

const TaskCard = ({ title, typeState, indexControl }: TaskCardProps) => {

    const [activeChildrenIndex, setActiveChildrenIndex] = useState<number>(-1);
    const [tasks, setTasks] = useState<ITaskItem[]>([]);
    const { theme, applyThemeKeys } = useAppTheme();

    const CardTitle = styled(CardTitleTheme)`
        color: ${theme.fg};
    `;

    const DotsText = styled(DotsTextTheme)`
        color: ${theme.fg}
    `;

    const ButtonExpand = styled(ButtonExpandTheme)`
        background-color: ${theme.bgFade};
    `;


    const taskCardViewStyleTheme: StyleProp<ViewStyle> = {
        shadowColor: theme.fg,
        borderColor: theme.bgGray,
        backgroundColor: theme.bg2
    }

    const boxHeight = useSharedValue(150);
    const boxAnimation = useAnimatedStyle(() => {
        return {
            height: withTiming(boxHeight.value, { duration: 850 })
        }
    });

    const onButtonExpandPress = (event: GestureResponderEvent) => {

        indexControl.active === indexControl.current ?
            indexControl.set(-1) :
            indexControl.set(indexControl.current);

        setActiveChildrenIndex(-1);
    }

    const expandCard = () => {
        indexControl.set(indexControl.current);
    }

    const removeTaskCardItem = (indexChildren: number) => {
        tasks.splice(indexChildren, 1);
        setTasks(tasks);
        setActiveChildrenIndex(-1);
    }

    const saveTaskCardItem = (indexChildren: number, taskEdited: ITaskItem) => {
        tasks[indexChildren] = taskEdited;
        setTasks(tasks);
        setActiveChildrenIndex(-1);
    }

    useEffect(() => {

        if (indexControl.active === indexControl.current) {
            boxHeight.value = (50 * tasks.length) + 90;
        } else {
            boxHeight.value = 150;
            setActiveChildrenIndex(-1);
        }

    }, [indexControl.active]);

    useEffect(() => {

        if (activeChildrenIndex > -1) {
            boxHeight.value = ((50 * tasks.length) + 90) + 160;
        } else {
            boxHeight.value = (50 * tasks.length) + 90;
        }

    }, [activeChildrenIndex]);

    useEffect(() => {

        let items: ITaskItem[] = [
            {
                title: "Tarefa 1",
                description: "Description 1",
                state: typeState
            },
            {
                title: "Tarefa 1",
                description: "Description 1",
                state: typeState
            },
            {
                title: "Tarefa 1",
                description: "Description 1",
                state: typeState
            },
            {
                title: "Tarefa 1",
                description: "Description 1",
                state: typeState
            },
            {
                title: "Tarefa 1",
                description: "Description 1",
                state: typeState
            },
        ];
        setTasks(items);
    }, [])

    const IconXml = typeState === ETaskState.Done ? applyThemeKeys(ImgIndicatorDone) :
        typeState === ETaskState.InProgress ? applyThemeKeys(ImgIndicatorInProgress) :
            applyThemeKeys(ImgIndicatorTodo);


    return <View style={[taskCardViewStyleTheme, taskCardViewStyle]}>

        <CardTitle>{title}</CardTitle>
        <DotsText>...</DotsText>

        <Animated.View style={[BoxTasksCardStyle, boxAnimation]}>
            {tasks.map((task: ITaskItem, index: number) => {
                return <TaskCardItem key={index} task={task} indexControl={{
                    current: index,
                    active: activeChildrenIndex,
                    set: setActiveChildrenIndex
                }}
                    removeTaskCardItem={removeTaskCardItem}
                    expandTasksCard={expandCard}
                    saveTaskCardItem={saveTaskCardItem}
                    iconXml={IconXml} />
            })}
        </Animated.View>

        {tasks.length > 2 && <ButtonExpand onPress={onButtonExpandPress} >
            {indexControl.active === indexControl.current ?
                <TextButtonExpand>Lessen</TextButtonExpand> :
                <TextButtonExpand>Expand to see more</TextButtonExpand>}
        </ButtonExpand>}
    </View>

};

export default TaskCard;