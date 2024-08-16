import { useState } from "react";

export const useNumericInput = (value: number, maxQuantity: number) => {
    const [quantity, setQuantity] = useState(value);

    const plusHandler = () =>
        quantity < maxQuantity &&
        setQuantity((prevQuantity) => prevQuantity + 1);
    const minusHandler = () =>
        quantity !== value && setQuantity((prevQuantity) => prevQuantity - 1);

    return {
        quantity,
        plusHandler,
        minusHandler,
    };
};
