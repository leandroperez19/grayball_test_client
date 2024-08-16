import "styled-components";

declare module "styled-components" {
    export interface DefaultTheme {
        type: "light" | "dark";
        palette: {
            text: {
                primary: string;
                secondary: string;
                danger: string;
            };
            common: {
                white: string;
                black: string;
                purple: string;
                green: string;
            };
            backgrounds: {
                primary: string;
                secondary: string;
                tertiary: string;
            };
        };
        navbar: {
            background: string;
            icons: string;
            border: string;
        };
        page: {
            background: string;
            scrollbarThumb: string;
        };
        buttons: {
            primary: {
                background: string;
                hoverBackground: string;
                color: string;
                hoverColor: string;
            };
            secondary: {
                background: string;
                hoverBackground: string;
                color: string;
                hoverColor: string;
            };
            danger: {
                background: string;
                hoverBackground: string;
                color: string;
                hoverColor: string;
            };
        };
        toggle: {
            background: string;
            ball: string;
            hoverBackground: string;
        };
        input: {
            primary: {
                borderColor: string;
                background: string;
                color: string;
                borderOnFocus: string;
                labelColor: string;
                labelColorFocus: string;
                dangerColor: string;
            };
            secondary: {
                borderColor: string;
                background: string;
                color: string;
                borderOnFocus: string;
                labelColor: string;
                labelColorFocus: string;
                dangerColor: string;
            };
        };
        dropdown: {
            background: string;
            color: string;
            labelColor: string;
            optionsBg: string;
            selectedHover: string;
            optionHover: string;
        };
        cards: {
            background: string;
            color: string;
        };
    }
}
