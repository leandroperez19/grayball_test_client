import { FC, ReactNode } from "react";
import { DefaultLayoutWrapper } from "./defaultLayout.styled";
import { Navbar } from "../components/navbar/navbar";

type DefaultLayoutProps = {
    children: ReactNode;
};

export const DefaultLayout: FC<DefaultLayoutProps> = ({ children }) => {
    return (
        <DefaultLayoutWrapper>
            <Navbar />
            {children}
        </DefaultLayoutWrapper>
    );
};
