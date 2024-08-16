import { FC } from "react";
import { formatCurrency } from "@/utils/formatCurrency";
import Image from "next/image";
import NumericInput from "../cardNumericInput/cardNumericInput";
import { ProductCardWrapper } from "./productCard.styled";
import Button from "@/components/button/button";

export interface Item {
    id: string;
    image: {
        url: string;
    };
    inStock: boolean;
    onSale?: boolean;
    name: string;
    minQuantity: number;
    maxQuantity: number;
    price: number;
    previousPrice?: number;
    description: string;
}

type ProductCardProps = {
    item: Item;
};

const ProductCard: FC<ProductCardProps> = ({ item }) => {
    return (
        <ProductCardWrapper className="Items-card rounded-lg">
            <div className="top flex justify-between">
                <div
                    className={`left flex flex-col ${
                        !item.onSale
                            ? "items-center justify-center"
                            : "justify-between"
                    }`}
                >
                    {item.onSale && (
                        <div className="on-sale flex items-center gap-2">
                            ON SALE
                        </div>
                    )}
                    {item.inStock && <div className="in-stock">In stock</div>}
                </div>
                <div className="right">
                    <NumericInput
                        value={item.minQuantity}
                        maxQuantity={item.maxQuantity}
                    />
                </div>
            </div>
            <div className="image mt-3">
                <Image
                    src={item.image.url}
                    alt="item"
                    width={80}
                    height={80}
                    objectFit="cover"
                />
            </div>
            <div className="name mt-4 text-xs lg:text-sm">
                <span>{item.name}</span>
            </div>
            <div className="price flex items-center gap-3 text-sm">
                <div className="main-price font-semibold">
                    {formatCurrency(item.price)}
                </div>
                {item.previousPrice && (
                    <div className="previous-price font-light line-through decoration-red-600">
                        {formatCurrency(item.previousPrice)}
                    </div>
                )}
            </div>
            <p className="description mt-2.5 text-xs opacity-75 font-light">
                {item.description}
            </p>
            <div className="buttons text-white grid grid-cols-2 gap-2">
                <Button color="secondary" radius="8px">
                    Details
                </Button>
                <Button radius="8px">Add to Cart</Button>
            </div>
        </ProductCardWrapper>
    );
};

export default ProductCard;
