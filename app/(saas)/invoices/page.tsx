"use client";

import { useState } from "react";
import Heading from "@/components/custom/Heading";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Plus, Search } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useInvoiceStore } from "@/lib/stores/useInvoiceStore";
import { InvoicesTable } from "@/components/custom/Invoices/InvoicesTable";
import { InvoicesTableColumns } from "@/components/custom/Invoices/InvoicesTableColumns";

const InvoicePage = () => {
  const router = useRouter();
  const invoices = useInvoiceStore((state) => state.invoices);

  const [globalFilter, setGlobalFilter] = useState("");

  return (
    <div>
      <div className="flex items-center justify-between mb-7.5">
        <Heading className="">Invoice</Heading>

        <div className="flex items-center gap-5">
          <div className="relative w-64">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
            <Input
              type="text"
              placeholder="Search..."
              value={globalFilter}
              onChange={(e) => setGlobalFilter(e.target.value)}
              className="pl-9 "
            />
          </div>

          <Button asChild>
            <Link href="/invoices/new">
              <Plus />
              Add New
            </Link>
          </Button>
        </div>
      </div>

      <InvoicesTable
        columns={InvoicesTableColumns}
        data={invoices}
        globalFilter={globalFilter}
      />
    </div>
  );
};

export default InvoicePage;
