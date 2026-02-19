"use client";

import { useState } from "react";
import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  getSortedRowModel,
  SortingState,
  useReactTable,
} from "@tanstack/react-table";
import { ArrowUpDown } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import Image from "next/image";

type Order = {
  id: string;
  trackingNo: string;
  productName: string;
  img: string;
  price: number;
  totalOrder: number;
  totalAmount: number;
};

const data: Order[] = [
  {
    id: "876364",
    trackingNo: "#876364",
    productName: "Camera Lens",
    img: "https://placehold.co/40x40/FFC0CB/FFFFFF.png?text=Lens",
    price: 178,
    totalOrder: 325,
    totalAmount: 146660,
  },
  {
    id: "876368",
    trackingNo: "#876368",
    productName: "Black Sleep Dress",
    img: "https://placehold.co/40x40/000000/FFFFFF.png?text=Dress",
    price: 14,
    totalOrder: 53,
    totalAmount: 46660,
  },
  {
    id: "876412",
    trackingNo: "#876412",
    productName: "Argan Oil",
    img: "https://placehold.co/40x40/8B4513/FFFFFF.png?text=Oil",
    price: 21,
    totalOrder: 78,
    totalAmount: 346676,
  },
  {
    id: "876621",
    trackingNo: "#876621",
    productName: "EAU DE Parfum",
    img: "https://placehold.co/40x40/FFD700/FFFFFF.png?text=Parfum",
    price: 32,
    totalOrder: 98,
    totalAmount: 346981,
  },
];

export const columns: ColumnDef<Order>[] = [
  {
    accessorKey: "trackingNo",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          className="hover:bg-transparent px-0 font-medium text-gray-500"
        >
          Tracking no
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }) => (
      <div className="font-medium text-gray-600">
        {row.getValue("trackingNo")}
      </div>
    ),
  },
  {
    accessorKey: "productName",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          className="hover:bg-transparent px-0 font-medium text-gray-500"
        >
          Product Name
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }) => {
      // We can access the original object for the image URL
      const order = row.original;
      return (
        <div className="flex items-center gap-3">
          <div className="h-9 w-9 overflow-hidden rounded-md border border-gray-100">
            <Image
              src={order.img}
              alt={order.productName}
              className="h-full w-full object-cover"
              width={40}
              height={40}
            />
          </div>
          <span className="font-medium text-gray-700">{order.productName}</span>
        </div>
      );
    },
  },
  {
    accessorKey: "price",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          className="hover:bg-transparent px-0 font-medium text-gray-500"
        >
          Price
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }) => {
      const price = parseFloat(row.getValue("price"));
      const formatted = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
        maximumFractionDigits: 0,
      }).format(price);

      return <div className="font-medium text-gray-600">{formatted}</div>;
    },
  },
  {
    accessorKey: "totalOrder",
    header: ({ column }) => {
      return (
        <div className="text-center">
          <Button
            variant="ghost"
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
            className="hover:bg-transparent px-0 font-medium text-gray-500"
          >
            Total Order
            <ArrowUpDown className="ml-2 h-4 w-4" />
          </Button>
        </div>
      );
    },
    cell: ({ row }) => {
      return (
        <div className="flex justify-center">
          <span className="inline-flex items-center justify-center rounded-lg bg-cyan-50 px-4 py-1.5 text-sm font-bold text-cyan-500 min-w-[3rem]">
            {row.getValue("totalOrder")}
          </span>
        </div>
      );
    },
  },
  {
    accessorKey: "totalAmount",
    header: ({ column }) => {
      return (
        <div className="text-right">
          <Button
            variant="ghost"
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
            className="hover:bg-transparent px-0 font-medium text-gray-500"
          >
            Total Amount
            <ArrowUpDown className="ml-2 h-4 w-4" />
          </Button>
        </div>
      );
    },
    cell: ({ row }) => {
      const amount = parseFloat(row.getValue("totalAmount"));
      const formatted = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
        maximumFractionDigits: 0,
      }).format(amount);

      return (
        <div className="text-right font-medium text-gray-600">{formatted}</div>
      );
    },
  },
];

export default function RecentOrdersDataTable() {
  const [sorting, setSorting] = useState<SortingState>([]);

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    onSortingChange: setSorting,
    getSortedRowModel: getSortedRowModel(),
    state: {
      sorting,
    },
  });

  return (
    <Table>
      <TableHeader>
        {table.getHeaderGroups().map((headerGroup) => (
          <TableRow
            key={headerGroup.id}
            className="border-gray-100 hover:bg-transparent"
          >
            {headerGroup.headers.map((header) => {
              return (
                <TableHead key={header.id}>
                  {header.isPlaceholder
                    ? null
                    : flexRender(
                        header.column.columnDef.header,
                        header.getContext(),
                      )}
                </TableHead>
              );
            })}
          </TableRow>
        ))}
      </TableHeader>

      <TableBody>
        {table.getRowModel().rows?.length ? (
          table.getRowModel().rows.map((row) => (
            <TableRow
              key={row.id}
              data-state={row.getIsSelected() && "selected"}
              className="border-gray-50 hover:bg-gray-50/50 h-16"
            >
              {row.getVisibleCells().map((cell) => (
                <TableCell key={cell.id}>
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </TableCell>
              ))}
            </TableRow>
          ))
        ) : (
          <TableRow>
            <TableCell colSpan={columns.length} className="h-24 text-center">
              No results.
            </TableCell>
          </TableRow>
        )}
      </TableBody>
    </Table>
  );
}
