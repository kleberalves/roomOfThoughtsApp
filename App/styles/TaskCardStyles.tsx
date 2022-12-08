import { ViewStyle, StyleProp } from "react-native";
import { AnimateStyle } from "react-native-reanimated";
import styled from "styled-components/native";
import { H1, DefaultText } from "./Texts";

export const CardTitleTheme = styled(H1)`
        font-size: 30px;
        margin: 30px 35px 0px 35px;
    `;

export const DotsTextTheme = styled(DefaultText)`
        font-size: 60px;
        letter-spacing: 7px;
        line-height: 30px;
        height: 20px;
        margin: 0px 35px 0px 35px;
    `;

export const ButtonExpandTheme = styled.TouchableOpacity`
        width: 100%;
        height: 60px;
        display: flex;
        align-items: center;
        justify-content: center;
        border-bottom-left-radius: 40px;
        border-bottom-right-radius: 40px;
        position: absolute;
        bottom: -5px;
        border-top: 1px dashed #C8C8C8;
    `;

export const TextButtonExpand = styled.Text`
        font-size: 16px;
        color: #939393;
        font-family: "Recoleta";
    `;

export const BoxTasksCardStyle: AnimateStyle<ViewStyle> = {
    borderRadius: 15,
    marginTop: 0,
    marginLeft: 5,
    marginBottom: 0,
    marginRight: 5,
    padding: 20,
    overflow: 'hidden'
};

export const taskCardViewStyle: StyleProp<ViewStyle> = {
    shadowOffset: { width: 10, height: 10 },
    shadowOpacity: 0.25,
    shadowRadius: 35,
    marginTop: 20,
    marginLeft: 20,
    marginBottom: 0,
    marginRight: 20,
    borderRadius: 40,
    borderWidth: 1

}