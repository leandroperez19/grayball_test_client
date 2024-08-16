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
            color: colors.purple,
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
};

export default lightTheme;
