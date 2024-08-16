import React, { FC } from "react";
import { HomePageWrapper } from "./homePage.styled";
import Input from "@/components/input/input";
import SimpleDropdown from "@/components/dropdown/dropdown";
import ProductCard from "./components/productCard/productCard";
import { items } from "./mock";

const HomePage: FC = () => {
    return (
        <HomePageWrapper>
            <h1 className="text-lg text-primary font-bold md:text-2xl">
                Buy Products
            </h1>
            <Input
                label="Search"
                color="secondary"
                size="large"
                customCssClass="mt-5"
            />
            <div className="card-deck rounded-lg p-6">
                <div className="dropdown-container w-full md:flex md:justify-end">
                    <div className="dropdow w-full md:max-w-48">
                        <SimpleDropdown
                            label="Sort by"
                            options={[
                                "Newest",
                                "Oldest",
                                "Price (Lowest)",
                                "Price (Highest)",
                            ]}
                            selected="Newest"
                        />
                    </div>
                </div>
                <div className="cards mt-5">
                    {items.map((x, i) => (
                        <ProductCard item={x} key={i + x.id} />
                    ))}
                </div>
            </div>
        </HomePageWrapper>
    );
};

export default HomePage;
