import { FC } from "react";
import { NavbarWrapper } from "./navbar.styled";
import Image from "next/image";

import { FaShoppingCart } from "@/assets/icons";
import colors from "@/styles/constants/colors";
import ThemeToggle from "@/components/themeToggle/themeToggle";

export const Navbar: FC = () => {
    return (
        <NavbarWrapper>
            <div className="content flex items-center justify-between w-full h-full">
                <div className="left">
                    <Image src="/logo.webp" alt="logo" width={30} height={30} />
                </div>
                <div className="right flex gap-4">
                    <FaShoppingCart color={colors.lightPurple} size={20} />
                    <ThemeToggle />
                </div>
            </div>
        </NavbarWrapper>
    );
};
