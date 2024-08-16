"use client";

import Button from "@/components/button/button";
import { FC } from "react";
import { useNumericInput } from "./cardNumericInput.hooks";

type NumericInputProps = {
    value: number;
    maxQuantity: number;
};

const NumericInput: FC<NumericInputProps> = ({ value, maxQuantity }) => {
    const { minusHandler, quantity, plusHandler } = useNumericInput(
        value,
        maxQuantity
    );

    return (
        <div className="flex justify-between items-center min-w-20">
            <Button
                className="minus text-base w-5"
                onClick={minusHandler}
                radius="6px"
                size="xs"
            >
                -
            </Button>
            <div className="quantity">{quantity}</div>
            <Button
                className="plus text-base w-5"
                onClick={plusHandler}
                radius="6px"
                size="xs"
            >
                +
            </Button>
        </div>
    );
};

export default NumericInput;
