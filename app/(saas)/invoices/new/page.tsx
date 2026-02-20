"use client";

import Heading from "@/components/custom/Heading";
import InvoicePreview from "@/components/custom/Invoices/InvoicePreview";
import { InvoicesProductTable } from "@/components/custom/Invoices/InvoicesProductTable";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useInvoiceStore } from "@/lib/stores/useInvoiceStore";
import { Calendar, Camera, MapPin } from "lucide-react";

const CreateNewInvoicePage = () => {
  const draft = useInvoiceStore((state) => state.draft);
  const setDraftField = useInvoiceStore((state) => state.setDraftField);
  const publishToPreview = useInvoiceStore((state) => state.publishToPreview);

  return (
    <div className="min-h-screen font-sans flex gap-7.5">
      <div className="flex-1 max-w-2xl flex flex-col bg-white rounded-[10px] p-7.5">
        <Heading className="">Create New Invoice</Heading>

        <div className="flex justify-center mb-10">
          <div className="h-28 w-28 rounded-full bg-slate-50 flex items-center justify-center cursor-pointer hover:bg-slate-100 transition-colors">
            <Camera className="h-8 w-8 text-slate-600" />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-6 mb-8">
          <div className="space-y-2">
            <Label className="text-base font-semibold text-slate-900">
              Invoice Id
            </Label>

            <Input
              inputSize="lg"
              value={draft.invoiceId}
              onChange={(e) => setDraftField("invoiceId", e.target.value)}
              className="bg-slate-50 border-none text-slate-700 rounded-xl px-4"
            />
          </div>

          <div className="space-y-2">
            <Label className="text-base font-semibold text-slate-900">
              Date
            </Label>
            <div className="relative">
              <Input
                value={draft.date}
                onChange={(e) => setDraftField("date", e.target.value)}
                className="bg-slate-50 border-none h-14 text-slate-700 rounded-xl px-4"
              />

              <Calendar className="absolute right-4 top-1/2 -translate-y-1/2 h-5 w-5 text-indigo-400" />
            </div>
          </div>

          <div className="space-y-2 col-span-2">
            <Label className="text-base font-semibold text-slate-900">
              Name
            </Label>

            <Input
              value={draft.name}
              onChange={(e) => setDraftField("name", e.target.value)}
              className="bg-slate-50 border-none h-14 text-slate-700 rounded-xl px-4"
            />
          </div>

          <div className="space-y-2">
            <Label className="text-base font-semibold text-slate-900">
              Email
            </Label>

            <Input
              value={draft.email}
              onChange={(e) => setDraftField("email", e.target.value)}
              className="bg-slate-50 border-none h-14 text-slate-700 rounded-xl px-4"
            />
          </div>

          <div className="space-y-2">
            <Label className="text-base font-semibold text-slate-900">
              Address
            </Label>

            <div className="relative">
              <Input
                value={draft.address}
                onChange={(e) => setDraftField("address", e.target.value)}
                className="bg-slate-50 border-none h-14 text-slate-700 rounded-xl px-4"
              />
              <MapPin className="absolute right-4 top-1/2 -translate-y-1/2 h-5 w-5 text-indigo-400" />
            </div>
          </div>
        </div>

        <div className="mb-12">
          <InvoicesProductTable />
        </div>

        <div className="mt-auto flex gap-4 pt-6 border-t border-slate-100">
          <Button
            variant="outline"
            className="flex-1 h-14 rounded-xl text-indigo-600 border-indigo-100 hover:bg-indigo-50 font-medium text-lg"
          >
            Send Invoice
          </Button>

          <Button
            onClick={publishToPreview}
            className="flex-1 h-14 rounded-xl bg-[#635BFF] hover:bg-[#524DE0] text-white font-medium text-lg shadow-md"
          >
            Create Invoice
          </Button>
        </div>
      </div>

      <div className="flex-1 bg-white rounded-[10px] p-7.5">
        <InvoicePreview />
      </div>
    </div>
  );
};

export default CreateNewInvoicePage;
