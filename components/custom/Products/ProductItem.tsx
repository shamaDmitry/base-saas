import React from "react";
import { Star } from "lucide-react";
import { cn } from "@/lib/utils";
import Image from "next/image";

export type Product = {
  id: number | string;
  name: string;
  rating: number;
  price: number;
  image: string;
};

interface ProductItemProps {
  product: Product;
}

const ProductItem: React.FC<ProductItemProps> = ({ product }) => {
  return (
    <div className="flex items-center space-x-4 py-4">
      <div className="h-24 w-24 shrink-0 overflow-hidden rounded-lg bg-blue-100 p-2 flex items-center justify-center">
        <Image
          src={product.image}
          alt={product.name}
          className="h-full w-auto object-contain object-center"
          width={96}
          height={96}
        />
      </div>
      <div className="flex-1">
        <h3 className="text-sm font-medium text-gray-900">{product.name}</h3>
        <div className="mt-1 flex items-center">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star
              key={i}
              className={cn(
                "h-4 w-4",
                i < product.rating
                  ? "fill-yellow-400 text-yellow-400"
                  : "text-gray-300 fill-gray-100",
              )}
            />
          ))}
        </div>
        <p className="mt-1 text-sm font-medium text-gray-900">
          ${product.price}
        </p>
      </div>
    </div>
  );
};

export default ProductItem;
