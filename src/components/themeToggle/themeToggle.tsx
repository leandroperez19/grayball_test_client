"use client";

import { FC } from "react";
import Toggle from "../toggle/toggle";
import useTheme from "@/hooks/useTheme";
import { GoSun, GoMoon } from "@/assets/icons";

const ThemeToggle: FC = () => {
    const { toggleTheme, theme } = useTheme();

    return (
        <div className="flex items-center justify-center gap-2">
            <GoSun color={theme.palette.text.primary} />
            <Toggle toggled={theme.type === "dark"} onChange={toggleTheme} />
            <GoMoon color={theme.palette.text.primary} />
        </div>
    );
};

export default ThemeToggle;
