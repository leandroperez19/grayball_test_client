import { DefaultTheme } from "styled-components";
import colors from "../constants/colors";

const lightTheme: DefaultTheme = {
    type: "light",
    palette: {
        text: {
            primary: colors.black,
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
            primary: colors.lighterGray,
            secondary: colors.white,
            tertiary: colors.lightGray,
        },
    },
    page: {
        background: colors.lighterGray,
        scrollbarThumb: colors.purple,
    },
    navbar: {
        background: colors.white,
        icons: colors.purple,
        border: colors.lightGray,
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
            hoverBackground: colors.lightPurple,
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
            background: colors.lightBlueGray,
            color: colors.grayishGreen,
            borderOnFocus: colors.transparent,
            labelColor: colors.grayishGreen,
            labelColorFocus: colors.grayishGreen,
            dangerColor: colors.red,
        },
    },
    dropdown: {
        background: colors.lightBlueGray,
        color: colors.black,
        labelColor: colors.purple,
        optionsBg: colors.lighterGray,
        selectedHover: colors.lightGray,
        optionHover: colors.softGray,
    },
    cards: {
        background: colors.veryDarkGray,
        color: colors.white,
    },
};

export default lightTheme;
