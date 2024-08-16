"use client";

import { FocusEvent, useCallback, useRef, useState } from "react";
import { MdErrorOutline, FaRegCircleCheck } from "@/assets/icons";

const InputHooks = () => {
    const [inputValAux, setInputValAux] = useState<string | null>(null);
    const ref = useRef<HTMLDivElement | null>(null);
    const input = ref.current?.querySelector("input");

    const returnIcon = (
        showStatusIcon: boolean,
        error: boolean,
        success: boolean
    ) => {
        if (!showStatusIcon) return null;
        if (error && !success) {
            return (
                <div className="status-icon mr-3 z-10 absolute">
                    <MdErrorOutline color="error" />
                </div>
            );
        }
        if (!error && success) {
            return (
                <div className="status-icon mr-3 z-10 absolute">
                    <FaRegCircleCheck color="success" />
                </div>
            );
        }
        return null;
    };

    const onBlurValue = useCallback(
        (e: FocusEvent<HTMLInputElement, Element>) =>
            setInputValAux(e.target.value),
        []
    );

    return {
        inputValAux,
        ref,
        input,
        onBlurValue,
        returnIcon,
    };
};

export default InputHooks;
