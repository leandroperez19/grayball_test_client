"use client";

import { forwardRef } from "react";
import { InputWrapper } from "./input.styled";
import { InputProps } from "./input.types";
import InputHooks from "./input.hooks";

const Input = forwardRef<HTMLInputElement, InputProps>(
    (
        {
            errorMessage,
            error = Boolean(errorMessage),
            disabled = false,
            label,
            placeholder,
            customCssClass = "tek_input",
            size = "medium",
            bordered = true,
            icon,
            labelFocusFont = "10px",
            labelFont = "14px",
            labelColor = null,
            labelColorFocus = null,
            showStatusIcon = false,
            success = null,
            elevated = false,
            color = "primary",
            showErrorMessage = true,
            ...props
        },
        ref
    ) => {
        const {
            inputValAux,
            ref: inputReference,
            onBlurValue,
            returnIcon,
        } = InputHooks();

        return (
            <InputWrapper
                $error={error}
                $success={Boolean(success)}
                $disabled={disabled}
                $size={size}
                $bordered={bordered}
                $labelFocusFont={labelFocusFont}
                $labelFont={labelFont}
                $labelColor={labelColor}
                $labelColorFocus={labelColorFocus}
                $icon={Boolean(icon)}
                $showStatusIcon={showStatusIcon}
                className={`${customCssClass} custom_input`}
                $color={color}
            >
                {label && elevated && (
                    <span className="label-elevated">{label}</span>
                )}
                <div
                    className={`input ${inputValAux ? "full" : "empty"} ${
                        error ? "error" : "regular"
                    }`}
                    ref={inputReference}
                >
                    {icon && icon}
                    {label && !elevated && (
                        <span className="label block">{label}</span>
                    )}
                    <input
                        type="text"
                        ref={ref}
                        placeholder={placeholder}
                        disabled={disabled}
                        autoComplete="off"
                        onBlurCapture={onBlurValue}
                        {...props}
                    />
                    {returnIcon(showStatusIcon, error, Boolean(success))}
                </div>
                {showErrorMessage && (
                    <div className="error">
                        {error && errorMessage && (
                            <span className="error-message">
                                {errorMessage}
                            </span>
                        )}
                    </div>
                )}
            </InputWrapper>
        );
    }
);

Input.displayName = "Input";

export default Input;
