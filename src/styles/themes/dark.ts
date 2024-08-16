import { DefaultTheme } from "styled-components";
import colors from "../constants/colors";

const darkTheme: DefaultTheme = {
    type: "dark",
    palette: {
        text: {
            primary: colors.white,
            secondary: colors.mediumGray,
            danger: colors.red,
        },
        common: {
            white: colors.white,
            black: colors.black,
            purple: colors.purple,
            green: colors.green,
        },
        backgrounds: {
            primary: colors.veryDarkGray,
            secondary: colors.darkGray,
            tertiary: colors.gray,
        },
    },
    page: {
        background: colors.veryDarkGray,
        scrollbarThumb: colors.purple,
    },
    navbar: {
        background: colors.darkGray,
        icons: colors.purple,
        border: colors.gray,
    },
    buttons: {
        primary: {
            background: colors.purple,
            color: colors.white,
            hoverBackground: colors.lightPurple,
            hoverColor: colors.white,
        },
        secondary: {
            background: colors.opaquePurple,
            color: colors.white,
            hoverBackground: colors.darkGray,
            hoverColor: colors.white,
        },
        danger: {
            background: colors.red,
            color: colors.white,
            hoverBackground: colors.lightPurple,
            hoverColor: colors.white,
        },
    },
    toggle: {
        background: colors.purple,
        ball: colors.white,
        hoverBackground: colors.lightPurple,
    },
    input: {
        primary: {
            borderColor: colors.opaqueGray,
            background: colors.transparent,
            color: colors.black,
            borderOnFocus: colors.black,
            labelColor: colors.opaqueGray,
            labelColorFocus: colors.opaqueGray,
            dangerColor: colors.red,
        },
        secondary: {
            borderColor: colors.transparent,
            background: colors.gray,
            color: colors.white,
            borderOnFocus: colors.transparent,
            labelColor: colors.gray2,
            labelColorFocus: colors.grayishGreen,
            dangerColor: colors.red,
        },
    },
    dropdown: {
        background: colors.veryDarkGray,
        color: colors.white,
        labelColor: colors.purple,
        optionsBg: colors.gray,
        selectedHover: colors.darkerGray,
        optionHover: colors.darkGray,
    },
    cards: {
        background: colors.veryDarkGray,
        color: colors.white,
    },
};

export default darkTheme;
