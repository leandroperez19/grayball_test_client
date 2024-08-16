import { FC } from "react";
import { NavbarWrapper } from "./navbar.styled";
import Image from "next/image";

import { FaShoppingCart } from "@/assets/icons";
import colors from "@/styles/constants/colors";
import ThemeToggle from "@/components/themeToggle/themeToggle";

export const Navbar: FC = () => {
    return (
        <NavbarWrapper>
            <div className="content">
                <div className="left">
                    <Image src="/logo.webp" alt="logo" width={30} height={30} />
                </div>
                <div className="right">
                    <FaShoppingCart color={colors.lightPurple} size={20} />
                    <ThemeToggle />
                </div>
            </div>
        </NavbarWrapper>
    );
};
