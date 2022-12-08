
import React, { useEffect, useState } from 'react';
import { GestureResponderEvent, TextInput, TextStyle, View, ViewStyle } from 'react-native';
import styled from 'styled-components/native';
import { IIndexControl } from '../interfaces/IIndexControl';
import { ITaskItem } from '../interfaces/ITaskItem';
import Animated, { useAnimatedStyle, useSharedValue, withTiming } from 'react-native-reanimated';

import useAppTheme from '../services/useAppTheme';
import { SvgXml } from 'react-native-svg';
import { ImgButtonDiscard, ImgButtonSave } from '../img/ImgButtons';
import { BarButtonsStyle, BoxEditInnerStyle, BoxEditStyle, ButtonAction, ButtonExpand, TaskTitleTheme, TextButtonTheme, TextInputDescriptionStyle, TextInputStyle, TextInputTitleStyle } from '../styles/TaskCardItemStyles';

type TaskCardItemProps = {
    task: ITaskItem;
    iconXml: string;
    indexControl: IIndexControl;
    expandTasksCard: () => void;
    removeTaskCardItem: (indexChildren: number) => void;
    saveTaskCardItem: (indexChildren: number, taskItem: ITaskItem) => void;
}

const TaskCardItem = ({ task, indexControl, expandTasksCard, removeTaskCardItem, saveTaskCardItem, iconXml }: TaskCardItemProps) => {

    const { theme } = useAppTheme();
    const [taskEdit, setTaskEdit] = useState<ITaskItem>(task);


    const TaskTitle = styled(TaskTitleTheme)`
        color: ${theme.fg};
    `;

    const TextButton = styled(TextButtonTheme)`
        color: ${theme.fg};
    `;


    const ButtonDiscard = styled(ButtonAction)`
        background: ${theme.bgButtonAlert};
    `;

    const ButtonSave = styled(ButtonAction)`
       background: ${theme.bgButtonPrimary};
    `;


    const BoxEditStyleTheme: ViewStyle = {
        backgroundColor: theme.bgGray,
    };

    const TextInputStyleTheme: TextStyle = {
        color: theme.fg
    };

    const onButtonExpandPress = (event: GestureResponderEvent) => {
        indexControl.set(indexControl.current);
        expandTasksCard();
    }

    const onButtonSavePress = (event: GestureResponderEvent) => {
        saveTaskCardItem(indexControl.current, taskEdit);
        indexControl.set(-1);
    }

    const onButtonDiscardPress = (event: GestureResponderEvent) => {
        removeTaskCardItem(indexControl.current);
    }

    const editTask = (editedTask: ITaskItem) => {
        setTaskEdit({
            ...taskEdit,
            ...editedTask
        });
    }

    const boxTitleHeight = useSharedValue(45);
    const boxTitleAnimation = useAnimatedStyle(() => {
        return {
            height: withTiming(boxTitleHeight.value, { duration: 450 })
        }
    });

    const boxEditHeight = useSharedValue(0);
    const boxEditAnimation = useAnimatedStyle(() => {
        return {
            height: withTiming(boxEditHeight.value, { duration: 450 })
        }
    });

    useEffect(() => {

        if (indexControl.current === indexControl.active) {
            boxEditHeight.value = 210;
            boxTitleHeight.value = 0;
        } else {
            boxEditHeight.value = 0;
            boxTitleHeight.value = 45;
        }
    }, [indexControl])



    return <View>
        <Animated.View style={[boxTitleAnimation]}>
            <ButtonExpand onPress={onButtonExpandPress}>
                <TaskTitle>
                    {iconXml && <SvgXml xml={iconXml} width="20px" style={{ marginRight: 20 }} />}
                    {task.title}</TaskTitle>
            </ButtonExpand>
        </Animated.View>

        <Animated.View style={[BoxEditStyle, BoxEditStyleTheme, boxEditAnimation]}>
            <View style={[BoxEditInnerStyle]}>
                {iconXml && <SvgXml xml={iconXml} width="25px" style={{ marginTop: 15 }} />}
                <View>
                    <TextInput
                        defaultValue={taskEdit.title}
                        style={[TextInputStyle, TextInputStyleTheme, TextInputTitleStyle]}
                        onChangeText={e => editTask({ title: e })}>
                    </TextInput>
                    <TextInput defaultValue={taskEdit.description}
                        style={[TextInputStyle, TextInputStyleTheme, TextInputDescriptionStyle]}
                        multiline={true}
                        numberOfLines={20}
                        onChangeText={e => editTask({ description: e })}>
                    </TextInput>
                    <View style={BarButtonsStyle}>
                        <ButtonDiscard onPress={onButtonDiscardPress}>
                            <SvgXml xml={ImgButtonDiscard} width="16px" style={{ marginTop: 0 }} /><TextButton>Discard</TextButton>
                        </ButtonDiscard>
                        <ButtonSave onPress={onButtonSavePress}>
                            <SvgXml xml={ImgButtonSave} width="16px" style={{ marginTop: 0 }} /><TextButton>Save task</TextButton>
                        </ButtonSave>
                    </View>
                </View>
            </View>
        </Animated.View>
    </View>

};

export default React.memo(TaskCardItem);