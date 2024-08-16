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
            background: colors.white,
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

export default darkTheme;
