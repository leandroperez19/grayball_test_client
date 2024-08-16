"use client";

import { FC } from "react";
import Toggle from "../toggle/toggle";
import useTheme from "@/hooks/useTheme";
import { GoSun, FaRegMoon } from "@/assets/icons";

const ThemeToggle: FC = () => {
    const { toggleTheme, theme } = useTheme();

    return (
        <div className="flex items-center justify-center gap-3 md:gap-5">
            <GoSun />
            <Toggle toggled={theme.type === "dark"} onChange={toggleTheme} />
            <FaRegMoon />
        </div>
    );
};

export default ThemeToggle;
