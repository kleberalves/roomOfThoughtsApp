import { useColorScheme } from "react-native";
import { IAppTheme } from "../interfaces/IAppTheme";

const useAppTheme = () => {

    const isDarkMode = useColorScheme() === 'dark';

    const theme: IAppTheme = isDarkMode ? {
        fg: "#fafafa",
        bg: "#000",
        bg2: "#070708",
        bgGray: "#333",
        bgFade: "#333333F5",
        bgButtonAlert: "#623f3f",
        bgButtonPrimary: "#3e569a"
    } : {
        fg: "#000",
        bg: "#fafafa",
        bg2: "#FFF",
        bgGray: "#f2f2f2",
        bgFade: "#FAFAFAf5",
        bgButtonAlert: "#E7D6D6",
        bgButtonPrimary: "#DADEE9"
    };
    const applyThemeKeys = (content: string): string => {
        let _content: string = content.split("$THEMEFG").join(theme.fg);
        _content = _content.replace("$THEMEBGGRAY", theme.bgGray);
        return _content;
    }

    return { theme, applyThemeKeys };

}

export default useAppTheme;