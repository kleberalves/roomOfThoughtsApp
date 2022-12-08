import { ViewStyle, TextStyle } from "react-native";
import styled from "styled-components/native";
import { DefaultText } from "./Texts";

export const TaskTitleTheme = styled(DefaultText)`
        font-size: 18px;
    `;

export const TextButtonTheme = styled(DefaultText)`
        font-size: 16px;
        margin-left: 10px;
    `;

export const ButtonAction = styled.TouchableOpacity`
        height: 30px;
        border-radius: 8px;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        padding: 0px 15px 0px 15px;
        margin: 0px 3px;
        width: 120px;
    `;


export const ButtonExpand = styled.TouchableOpacity`
        padding-top: 10px;
        height: 45px;
        margin: 0px 20px 5px 0px;
    `;

export const BoxEditStyle: ViewStyle = {
    borderRadius: 15,
    marginTop: 0,
    marginLeft: 0,
    marginBottom: 0,
    marginRight: 0,
    overflow: 'hidden',
    height: 0
};

export const BoxEditInnerStyle: ViewStyle = {
    padding: 10,
    width: "100%",
    display: "flex",
    flexDirection: "row",
};

export const BarButtonsStyle: ViewStyle = {
    display: "flex",
    flexDirection: "row",
    flexWrap: "nowrap",
    flexGrow: 1
}

export const TextInputStyle: TextStyle = {
    marginTop: 0,
    marginLeft: 0,
    marginBottom: 0,
    marginRight: 0,
    padding: 10,
    fontFamily: "Recoleta"
};

export const TextInputTitleStyle: TextStyle = {
    marginTop: 0,
    marginLeft: 10,
    marginBottom: 0,
    marginRight: 0,
    fontSize: 20,
    paddingLeft: 0,
    fontFamily: "Recoleta",
    borderBottomWidth: 1,
};

export const TextInputDescriptionStyle: TextStyle = {
    height: 100,
    marginTop: 5,
    color: "#555"
};