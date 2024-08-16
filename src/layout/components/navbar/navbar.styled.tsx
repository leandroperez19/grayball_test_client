"use client";

import { tablet } from "@/styles/constants/sizes";
import styled from "styled-components";

export const NavbarWrapper = styled.nav`
    background-color: ${({ theme }) => theme.navbar.background};
    border-bottom: 1px solid ${({ theme }) => theme.navbar.border};
    height: 50px;
    padding-inline: 24px;

    @media (width >= ${tablet}) {
        height: 80px;
    }
`;
