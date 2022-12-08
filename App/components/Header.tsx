
import React, { useEffect } from 'react';

import {
    useColorScheme,
} from 'react-native';

import styled from 'styled-components/native';
import { DefaultText } from '../styles/Texts';
import Animated, { useAnimatedStyle, useSharedValue, withTiming } from 'react-native-reanimated';
import { SvgXml } from 'react-native-svg';
import { ImgLogoXml } from '../img/ImgLogo';
import useAppTheme from '../services/useAppTheme';


type HeaderProps = {
    small?: boolean;
}
const Header = ({ small }: HeaderProps) => {

    const { theme, applyThemeKeys } = useAppTheme();

    const View = styled.View`
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding: 0px 0px 24px;
        height: auto;
    `;

    const boxHeight = useSharedValue(160);
    const boxAnimation = useAnimatedStyle(() => {
        return {
            height: withTiming(boxHeight.value, { duration: 400 })
        }
    });

    const ImageLogo = styled.Image`
        width: 69px;
        height: 67px;
    `;

    const Title = styled(DefaultText)`
        font-size: ${small ? "25px" : "30px"};
        color: ${theme.fg}
        height: 40px;
    `;

    const SubTitle = styled(DefaultText)`
        font-size: 20px;
        color: ${theme.fg}
    `;

    const imgLogoXml = applyThemeKeys(ImgLogoXml);

    useEffect(() => {

        small ?
            boxHeight.value = 40
            : boxHeight.value = 160;

    }, [small]);

    return (<Animated.View style={boxAnimation}>
        <View>
            {!small && <SvgXml xml={imgLogoXml} width="69px" height="67px" />}
            <Title>Room of Thoughts</Title>
            {!small && <SubTitle>Don't think, throw in the room</SubTitle>}
        </View></Animated.View>
    );
};

export default Header;