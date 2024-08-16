import { ReactNode } from "react";
import { HTMLAttributes, forwardRef } from "react";
import { ButtonWrapper } from "./button.styled";
import { Size } from "@/styles/mixins";

export interface buttonStatic {
    size: "xs" | "sm" | "regular" | "lg";
    color: "primary" | "secondary" | "danger";
}

interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
    children: ReactNode | string;
    size?: buttonStatic["size"];
    color?: buttonStatic["color"];
    disabled?: boolean;
    radius?: Size;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
    (
        {
            children,
            size = "regular",
            color = "primary",
            disabled = false,
            radius = "24px",
            ...props
        },
        ref
    ) => {
        return (
            <ButtonWrapper
                $size={size}
                $color={color}
                disabled={disabled}
                $radius={radius}
                ref={ref}
                {...props}
            >
                {children}
            </ButtonWrapper>
        );
    }
);

Button.displayName = "Button";

export default Button;
