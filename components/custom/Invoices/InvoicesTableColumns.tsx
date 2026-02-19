"use client";

import React, { useState } from "react";
import { ColumnDef } from "@tanstack/react-table";
import { useRouter } from "next/navigation";
import {
  MoreHorizontal,
  Star,
  Pencil,
  Trash2,
  Mail,
  Calendar,
  ArrowUpDown,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { Invoice, useInvoiceStore } from "@/lib/stores/useInvoiceStore";

const RowActions = ({ invoice }: { invoice: Invoice }) => {
  const router = useRouter();

  const deleteInvoice = useInvoiceStore((state) => state.deleteInvoice);
  const toggleStar = useInvoiceStore((state) => state.toggleStar);

  const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false);

  const handleEdit = () => {
    router.push(`/invoices/edit/${invoice.id}`);
  };

  const handleDeleteConfirm = () => {
    deleteInvoice(invoice.id);
    setIsDeleteDialogOpen(false);
  };

  return (
    <div className="flex items-center justify-end gap-2">
      <Button
        variant="ghost"
        size="icon"
        onClick={() => toggleStar(invoice.id)}
        className="hover:bg-transparent"
      >
        <Star
          className={`h-5 w-5 ${invoice.isStarred ? "fill-yellow-400 text-yellow-400" : "text-gray-300"}`}
        />
      </Button>

      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button
            variant="ghost"
            className="h-8 w-8 p-0 text-gray-400 hover:text-gray-600"
          >
            <span className="sr-only">Open menu</span>
            <MoreHorizontal className="h-5 w-5" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent
          align="end"
          className="w-32 rounded-xl shadow-lg border-gray-100"
        >
          <DropdownMenuItem
            onClick={handleEdit}
            className="text-blue-600 focus:text-blue-700 cursor-pointer"
          >
            <Pencil className="mr-2 h-4 w-4" />
            Edit
          </DropdownMenuItem>
          <DropdownMenuItem
            onClick={() => setIsDeleteDialogOpen(true)}
            className="text-red-600 focus:text-red-700 focus:bg-red-50 cursor-pointer"
          >
            <Trash2 className="mr-2 h-4 w-4" />
            Delete
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>

      <AlertDialog
        open={isDeleteDialogOpen}
        onOpenChange={setIsDeleteDialogOpen}
      >
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
            <AlertDialogDescription>
              This will permanently delete invoice {invoice.invoiceId} for{" "}
              {invoice.name}. This action cannot be undone.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction
              onClick={handleDeleteConfirm}
              className="bg-red-600 hover:bg-red-700"
            >
              Delete
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
};

export const InvoicesTableColumns: ColumnDef<Invoice>[] = [
  {
    id: "select",
    header: ({ table }) => (
      <Checkbox
        checked={table.getIsAllPageRowsSelected()}
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
        className="rounded border-gray-300"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
        className="rounded border-gray-300 data-[state=checked]:bg-indigo-500 data-[state=checked]:border-indigo-500"
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "invoiceId",
    header: ({ column }) => (
      <Button
        variant="ghost"
        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        className="px-0 hover:bg-transparent font-medium text-gray-500"
      >
        Invoice Id <ArrowUpDown className="ml-2 h-3 w-3" />
      </Button>
    ),
    cell: ({ row }) => (
      <div className="font-medium text-gray-700">
        {row.getValue("invoiceId")}
      </div>
    ),
  },
  {
    accessorKey: "name",
    header: ({ column }) => (
      <Button
        variant="ghost"
        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        className="px-0 hover:bg-transparent font-medium text-gray-500"
      >
        Name <ArrowUpDown className="ml-2 h-3 w-3" />
      </Button>
    ),
    cell: ({ row }) => {
      const invoice = row.original;
      return (
        <div className="flex items-center gap-3">
          <Avatar className="h-9 w-9">
            <AvatarImage src={invoice.avatarUrl} alt={invoice.name} />
            <AvatarFallback>
              {invoice.name.substring(0, 2).toUpperCase()}
            </AvatarFallback>
          </Avatar>
          <span className="font-medium text-gray-900">{invoice.name}</span>
        </div>
      );
    },
  },
  {
    accessorKey: "email",
    header: ({ column }) => (
      <Button
        variant="ghost"
        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        className="px-0 hover:bg-transparent font-medium text-gray-500"
      >
        Email <ArrowUpDown className="ml-2 h-3 w-3" />
      </Button>
    ),
    cell: ({ row }) => (
      <div className="flex items-center gap-2 text-gray-700 font-medium">
        <div className="bg-green-100 p-1.5 rounded-md">
          <Mail className="h-3 w-3 text-green-600" />
        </div>
        {row.getValue("email")}
      </div>
    ),
  },
  {
    accessorKey: "date",
    header: ({ column }) => (
      <Button
        variant="ghost"
        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        className="px-0 hover:bg-transparent font-medium text-gray-500"
      >
        Date <ArrowUpDown className="ml-2 h-3 w-3" />
      </Button>
    ),
    cell: ({ row }) => (
      <div className="flex items-center gap-2 text-gray-700 font-medium">
        <div className="bg-blue-100 p-1.5 rounded-md">
          <Calendar className="h-3 w-3 text-blue-600" />
        </div>
        {row.getValue("date")}
      </div>
    ),
  },
  {
    accessorKey: "status",
    header: ({ column }) => (
      <Button
        variant="ghost"
        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        className="px-0 hover:bg-transparent font-medium text-gray-500"
      >
        Status <ArrowUpDown className="ml-2 h-3 w-3" />
      </Button>
    ),
    cell: ({ row }) => {
      const status = row.getValue("status") as string;
      let badgeStyle = "";
      if (status === "Complete")
        badgeStyle = "bg-[#E6F5EC] text-[#28A745] hover:bg-[#E6F5EC]";
      if (status === "Pending")
        badgeStyle = "bg-[#FFF4E5] text-[#FD7E14] hover:bg-[#FFF4E5]";
      if (status === "Cancel")
        badgeStyle = "bg-[#FCE8E8] text-[#DC3545] hover:bg-[#FCE8E8]";

      return (
        <Badge
          variant="outline"
          className={`border-none px-4 py-1.5 font-bold rounded-lg ${badgeStyle}`}
        >
          {status}
        </Badge>
      );
    },
  },
  {
    id: "actions",
    cell: ({ row }) => <RowActions invoice={row.original} />,
  },
];
