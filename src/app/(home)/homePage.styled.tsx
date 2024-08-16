"use client";

import { GridResponsive, pageContainer } from "@/styles/mixins";
import styled from "styled-components";

export const HomePageWrapper = styled.div`
    ${pageContainer}

    .card-deck {
        min-height: 480px;
        background-color: ${({ theme }) => theme.palette.backgrounds.secondary};
        box-shadow: 0 0 8px #fff2;

        .cards {
            ${GridResponsive("240px")}
            gap: 24px;
        }
    }
`;
