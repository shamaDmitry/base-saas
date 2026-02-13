import ProductItem, { Product } from "@/components/custom/Products/ProductItem";
import { Button } from "@/components/ui/button";
import { MoreHorizontal } from "lucide-react";
import { FC } from "react";

interface TopSellingProductsProps {
  products: Product[];
}

const TopSellingProducts: FC<TopSellingProductsProps> = ({ products }) => {
  return (
    <div className="bg-white p-6 rounded-[10px]">
      <div className="flex items-center justify-between mb-2">
        <h2 className="text-lg font-semibold text-gray-900">
          Top Selling Products
        </h2>

        <Button variant="ghost" size="icon" className="h-8 w-8">
          <MoreHorizontal className="h-5 w-5 text-gray-500" />
          <span className="sr-only">Menu</span>
        </Button>
      </div>

      <div className="divide-y divide-gray-200">
        {products.map((product) => (
          <ProductItem key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default TopSellingProducts;
