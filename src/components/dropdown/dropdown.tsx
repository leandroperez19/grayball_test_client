"use client";

import { FC, MouseEvent, useEffect, useRef, useState } from "react";
import { DropdownWrapper } from "./dropdown.styled";
import { FaChevronDown } from "@/assets/icons";
import { parseText } from "@/utils/parseText";

type SimpleDropdownProps = {
    label: string;
    selected: string;
    options: string[];
    disabled?: boolean;
};

const SimpleDropdown: FC<SimpleDropdownProps> = ({
    label,
    selected,
    options,
    disabled = false,
}) => {
    const [isActive, setIsActive] = useState(false);
    const [selectedOption, setSelectedOption] = useState(selected);

    return (
        <DropdownWrapper
            className={`${parseText(label)} ${
                disabled ? "disabled" : "custom-dropdown"
            }`}
        >
            <div
                className="option-selected flex items-center justify-between rounded-lg"
                onClick={() => !disabled && setIsActive(true)}
            >
                <div className="left flex items-center gap-3">
                    <div className="text flex flex-col gap-1">
                        <div className="label text-xs">{label}</div>
                        <div className="selected">{selectedOption}</div>
                    </div>
                </div>
                <FaChevronDown />
            </div>
            {isActive && (
                <Options
                    options={options}
                    setIsActive={setIsActive}
                    selectedOption={selectedOption}
                    disabled={disabled}
                    name={parseText(label) ?? ""}
                    setSelectedOption={setSelectedOption}
                />
            )}
        </DropdownWrapper>
    );
};

type OptionsProps = {
    options: string[];
    setIsActive: (x: boolean) => void;
    selectedOption: string;
    setSelectedOption: (x: string) => void;
    disabled: boolean;
    name: string;
};

const Options: FC<OptionsProps> = ({
    options,
    setIsActive,
    selectedOption,
    setSelectedOption,
    disabled,
    name,
}) => {
    const optionsRef = useRef<HTMLDivElement>(null);

    const closeAux = () => {
        optionsRef.current?.classList.add("inactive");
        setTimeout(() => {
            setIsActive(false);
        }, 300);
    };

    const selectHandler = (opt: string) => {
        setSelectedOption(opt);
        closeAux();
    };

    useEffect(() => {
        const close = (e: MouseEvent<HTMLElement> | globalThis.MouseEvent) => {
            const element = e.target as Element;

            if (element.closest(".Options") || element.closest(`.${name}`))
                return;
            closeAux();
        };
        document.body.addEventListener("click", (e) => close(e));
        return () => document.body.removeEventListener("click", close);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <div className="Options rounded-lg" ref={optionsRef}>
            {options.map((opt, i) => (
                <div
                    className={`option ${opt === selectedOption && "selected"}`}
                    key={i}
                    onClick={() => !disabled && selectHandler(opt)}
                >
                    {opt}
                </div>
            ))}
        </div>
    );
};

export default SimpleDropdown;
