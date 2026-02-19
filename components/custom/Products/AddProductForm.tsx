"use client";

import React, { useState } from "react";
import { ChevronLeft, Camera, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useProductsCrudStore } from "@/lib/stores/products-crud-store";

export interface ProductFormData {
  name: string;
  brand: string;
  price: string;
  negotiable: boolean;
  description: string;
  // image: File | null;
}

interface AddProductFormProps {
  onClose?: () => void;
  onSubmit: (data: ProductFormData) => void;
}

export function AddProductForm({ onClose, onSubmit }: AddProductFormProps) {
  const [formData, setFormData] = useState<ProductFormData>({
    name: "",
    brand: "",
    price: "",
    negotiable: false,
    description: "",
  });

  const { products, draft, setDraftField, createProduct } =
    useProductsCrudStore();

  const handleTextChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleBrandChange = (value: string) => {
    setFormData((prev) => ({ ...prev, brand: value }));
  };

  const handleNegotiableChange = (checked: boolean) => {
    setFormData((prev) => ({ ...prev, negotiable: checked }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col h-full bg-white font-sans w-full max-w-md mx-auto"
    >
      <div className="flex items-center mb-8 pt-2">
        <Button
          type="button"
          variant="ghost"
          size="icon"
          onClick={onClose}
          className="text-gray-500 hover:text-gray-800"
        >
          <ChevronLeft className="h-6 w-6" />
        </Button>

        <h2 className="text-xl font-bold text-slate-900 flex-1 text-center pr-10">
          Add a New Product
        </h2>
      </div>

      <div className="flex-1 overflow-y-auto pb-6 px-1 space-y-6">
        <div className="flex justify-center">
          <div className="h-28 w-28 rounded-full bg-slate-50 flex items-center justify-center cursor-pointer hover:bg-slate-100 transition-colors">
            <Camera className="h-8 w-8 text-slate-600" />
          </div>
        </div>

        <div className="space-y-2">
          <Label
            htmlFor="name"
            className="text-base font-semibold text-slate-900"
          >
            Product Name
          </Label>

          <Input
            id="name"
            name="name"
            placeholder='Macbook Pro 2021 14"'
            value={formData.name}
            onChange={handleTextChange}
            className="bg-slate-50 border-none h-14 text-slate-700 rounded-xl px-4 focus-visible:ring-1 focus-visible:ring-indigo-500"
            // id="product-name"
            // placeholder="Product name"
            // value={draft.productName}
            // onChange={(event) =>
            //   setDraftField("productName", event.target.value)
            // }
          />
        </div>

        <div className="space-y-2">
          <Label
            htmlFor="brand"
            className="text-base font-semibold text-slate-900"
          >
            Brand
          </Label>

          <Select value={formData.brand} onValueChange={handleBrandChange}>
            <SelectTrigger className="bg-slate-50 border-none h-14 text-slate-700 rounded-xl px-4 focus:ring-1 focus:ring-indigo-500 w-full">
              <SelectValue placeholder="Apple" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="Apple">Apple</SelectItem>
              <SelectItem value="Samsung">Samsung</SelectItem>
              <SelectItem value="Sony">Sony</SelectItem>
              <SelectItem value="Other">Other</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="flex items-end gap-6">
          <div className="space-y-2 flex-1">
            <Label
              htmlFor="price"
              className="text-base font-semibold text-slate-900"
            >
              Price
            </Label>
            <Input
              id="price"
              name="price"
              type="text"
              placeholder="$1200"
              value={formData.price}
              onChange={handleTextChange}
              className="bg-slate-50 border-none h-14 text-slate-700 rounded-xl px-4 focus-visible:ring-1 focus-visible:ring-indigo-500"
            />
          </div>

          <div className="flex items-center gap-3 h-14">
            <Checkbox
              id="negotiable"
              checked={formData.negotiable}
              onCheckedChange={handleNegotiableChange}
              className="h-6 w-6 rounded data-[state=checked]:bg-indigo-500 data-[state=checked]:text-white"
            />
            <Label
              htmlFor="negotiable"
              className="text-base font-medium text-slate-900 cursor-pointer"
            >
              Negotiable
            </Label>
          </div>
        </div>

        {/* Descriptions */}
        <div className="space-y-2">
          <Label
            htmlFor="description"
            className="text-base font-semibold text-slate-900"
          >
            Descriptions
          </Label>
          <Textarea
            id="description"
            name="description"
            placeholder="This the New creation Of apple..."
            value={formData.description}
            onChange={handleTextChange}
            className="bg-slate-50 border-none min-h-[120px] text-slate-600 rounded-xl p-4 resize-none focus-visible:ring-1 focus-visible:ring-indigo-500 leading-relaxed"
          />
        </div>
      </div>

      {/* Bottom Action Area */}
      <div className="pt-4 mt-auto">
        <Button
          type="submit"
          className="w-full h-14 bg-[#635BFF] hover:bg-[#524DE0] text-white font-medium text-lg rounded-xl shadow-md transition-all"
        >
          <Download className="mr-2 h-5 w-5" />
          Save Product
        </Button>
      </div>
    </form>
  );
}
