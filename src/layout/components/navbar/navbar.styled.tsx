"use client";

import { tablet } from "@/styles/constants/sizes";
import { flex, fullSize } from "@/styles/mixins";
import styled from "styled-components";

export const NavbarWrapper = styled.nav`
    background-color: ${({ theme }) => theme.navbar.background};
    border-bottom: 1px solid ${({ theme }) => theme.navbar.border};
    height: 50px;
    padding-inline: 24px;
    position: fixed;
    width: 100%;
    z-index: 25;

    @media (width >= ${tablet}) {
        height: 80px;
    }

    .content {
        ${fullSize()};
        ${flex("center", "space-between")}

        .right {
            ${flex()};
            gap: 8px;
        }
    }
`;
