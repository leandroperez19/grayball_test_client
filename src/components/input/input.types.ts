import { HTMLAttributes, ReactNode } from "react";

export interface sharedProps {
    size: "xs" | "sm" | "medium" | "large" | "xl";
    color: "primary" | "secondary";
    bordered: boolean;
    error: boolean;
    disabled: boolean;
    labelFocusFont: `${number}px` | `${number}rem`;
    labelFont: `${number}px` | `${number}rem`;
    labelColor: `#${string}` | `rgba(${string})` | null;
    labelColorFocus: `#${string}` | `rgba(${string})` | null;
    showStatusIcon: boolean;
    success: boolean;
}

export interface InputProps extends HTMLAttributes<HTMLInputElement> {
    label?: string;
    placeholder?: string;
    customCssClass?: string;
    errorMessage?: string;
    showErrorMessage?: boolean;
    error?: sharedProps["error"];
    disabled?: sharedProps["disabled"];
    size?: sharedProps["size"];
    bordered?: sharedProps["bordered"];
    icon?: ReactNode;
    labelFocusFont?: sharedProps["labelFocusFont"];
    labelFont?: sharedProps["labelFont"];
    labelColor?: sharedProps["labelColor"];
    labelColorFocus?: sharedProps["labelColorFocus"];
    name?: string;
    id?: string;
    showStatusIcon?: sharedProps["showStatusIcon"];
    success?: sharedProps["success"];
    elevated?: boolean;
    color?: sharedProps["color"];
}

export type InputWrapperProps = {
    $size: sharedProps["size"];
    $error: sharedProps["error"];
    $success: sharedProps["success"];
    $disabled: sharedProps["disabled"];
    $bordered: sharedProps["bordered"];
    $labelFocusFont: sharedProps["labelFocusFont"];
    $labelFont: sharedProps["labelFont"];
    $labelColor: sharedProps["labelColor"];
    $labelColorFocus: sharedProps["labelColorFocus"];
    $icon: boolean;
    $showStatusIcon: sharedProps["showStatusIcon"];
    $color: sharedProps["color"];
};
