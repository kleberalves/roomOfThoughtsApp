import { StyleProp, ViewStyle, TextStyle } from "react-native";

export const backgroundStyle = {
    height: "100%",
};

export const scrollViewStyle: StyleProp<ViewStyle> = {
    marginBottom: 100
};

export const BoxNewTaskStyle: StyleProp<ViewStyle> = {
    position: "absolute",
    bottom: 50,
    borderRadius: 18,
    borderWidth: 5,
    padding: 10,
    width: "80%",
    left: "10%",
    display: "flex",
    alignItems: "center"
};


export const BoxNewTaskText: TextStyle = {
    fontFamily: "Recoleta",
    fontSize: 18
}
