"use client";

import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { useProductsCrudStore } from "@/lib/stores/products-crud-store";
import { useProductsDrawerStore } from "@/lib/stores/products-drawer-store";
import { AddProductForm } from "./AddProductForm";

const AddProductSheet = () => {
  const { isAddProductDrawerOpen, setAddProductDrawerOpen } =
    useProductsDrawerStore();

  const { products, draft, setDraftField, createProduct } =
    useProductsCrudStore();

  const handleCreateProduct = () => {
    createProduct();
    setAddProductDrawerOpen(false);
  };

  console.log("products", products);

  return (
    <Sheet open={isAddProductDrawerOpen} onOpenChange={setAddProductDrawerOpen}>
      <SheetContent side="right" className="sm:max-w-md gap-0">
        <SheetHeader className="sr-only">
          <SheetTitle>Add Product</SheetTitle>
          <SheetDescription>Add product details here.</SheetDescription>
        </SheetHeader>

        <div className="grid gap-4 px-4 overflow-auto py-2">
          <AddProductForm
            onSubmit={() => {
              console.log("submit");
              handleCreateProduct();
            }}
          />

          {/* <div className="grid gap-2">
            <Label htmlFor="product-image">Image</Label>
            <Input
              id="product-image"
              placeholder="Image URL"
              value={draft.image}
              onChange={(event) => setDraftField("image", event.target.value)}
            />
          </div>

          <div className="grid gap-2">
            <Label htmlFor="product-name">Product Name</Label>
            <Input
              id="product-name"
              placeholder="Product name"
              value={draft.productName}
              onChange={(event) =>
                setDraftField("productName", event.target.value)
              }
            />
          </div>

          <div className="grid gap-2">
            <Label htmlFor="product-brand">Brand</Label>
            <Input
              id="product-brand"
              placeholder="Brand"
              value={draft.brand}
              onChange={(event) => setDraftField("brand", event.target.value)}
            />
          </div>

          <div className="grid gap-2">
            <Label htmlFor="product-price">Price</Label>
            <Input
              id="product-price"
              type="number"
              min={0}
              placeholder="0"
              value={draft.price}
              onChange={(event) =>
                setDraftField("price", Number(event.target.value) || 0)
              }
            />
          </div>

          <div className="flex items-center gap-2">
            <Checkbox
              id="product-price-negotiable"
              checked={draft.isPriceNegotiable}
              onCheckedChange={(checked) =>
                setDraftField("isPriceNegotiable", checked === true)
              }
            />
            <Label htmlFor="product-price-negotiable">Price Negotiable</Label>
          </div>

          <div className="grid gap-2">
            <Label htmlFor="product-description">Description</Label>
            <Input
              id="product-description"
              placeholder="Description"
              value={draft.description}
              onChange={(event) =>
                setDraftField("description", event.target.value)
              }
            />
          </div> */}
        </div>

        {/* <SheetFooter>
          <Button onClick={handleCreateProduct}>Save Product</Button>
        </SheetFooter> */}
      </SheetContent>
    </Sheet>
  );
};

export default AddProductSheet;
