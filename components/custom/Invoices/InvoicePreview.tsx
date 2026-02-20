"use client";

import { Button } from "@/components/ui/button";
import { useInvoiceStore } from "@/lib/stores/useInvoiceStore";
import { Download, PrinterCheck } from "lucide-react";

const InvoicePreview = () => {
  const preview = useInvoiceStore((state) => state.preview);

  const subtotal = preview.items.reduce(
    (acc, item) => acc + item.rate * item.qty,
    0,
  );
  const discount = subtotal * 0.05; // 5% mock discount
  const total = subtotal - discount;

  return (
    <div className="flex flex-col h-full">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-gray-900">Preview</h2>

        <div className="flex gap-2">
          <Button
            variant="ghost"
            size="icon"
            className="text-indigo-600 bg-indigo-50 hover:bg-indigo-100 rounded-full"
          >
            <Download className="h-5 w-5" />
          </Button>

          <Button
            variant="ghost"
            size="icon"
            className="text-indigo-600 bg-indigo-50 hover:bg-indigo-100 rounded-full"
          >
            <PrinterCheck className="h-5 w-5" />
          </Button>
        </div>
      </div>

      {/* Invoice Document Paper */}
      <div className="bg-white rounded-xl shadow-sm flex-1 p-10 flex flex-col font-sans">
        <div className="flex justify-between items-start mb-12 bg-accent pl-7.5 pt-9.25 pr-4.5 pb-6.5">
          <div>
            <div className="h-12 w-12 bg-blue-500 rounded-lg flex items-center justify-center text-white text-3xl font-bold mb-6">
              J
            </div>
            <div className="text-xs text-gray-500 uppercase font-semibold mb-2">
              Recipient
            </div>
            <div className="text-sm font-bold text-gray-800 uppercase">
              {preview.name}
            </div>
            <div className="text-xs text-gray-500 mt-1 max-w-[150px] leading-relaxed">
              4304 Liberty Avenue
              <br />
              92680 Tustin, CA
              <br />
              VAT no.: 12345678
            </div>
            <div className="text-xs text-blue-500 mt-4">
              @ company.mail@gmail.com
            </div>
            <div className="text-xs text-blue-500">m +386 714 505 8385</div>
          </div>

          {/* Invoice Meta */}
          <div className="text-right">
            <div className="text-xs text-blue-500 mb-1">
              @ your.mail@gmail.com
            </div>
            <div className="text-xs text-blue-500 mb-8">
              m +386 989 271 3115
            </div>

            <h1 className="text-4xl font-normal text-gray-900 mb-6">Invoice</h1>

            <div className="text-xs text-gray-500 uppercase font-semibold">
              Invoice No.
            </div>
            <div className="text-sm text-gray-800 mb-4">
              {preview.invoiceId}
            </div>

            <div className="text-xs text-gray-500 uppercase font-semibold">
              Invoice Date
            </div>
            <div className="text-sm text-gray-800">{preview.date}</div>
          </div>
        </div>

        {/* Invoice Items Table */}
        <table className="w-full text-sm text-left mb-8">
          <thead>
            <tr className="border-b border-gray-100">
              <th className="py-3 text-xs text-gray-400 font-semibold uppercase">
                Task Description
              </th>
              <th className="py-3 text-xs text-gray-400 font-semibold uppercase text-right">
                Hours
              </th>
              <th className="py-3 text-xs text-gray-400 font-semibold uppercase text-right">
                Rate
              </th>
              <th className="py-3 text-xs text-gray-400 font-semibold uppercase text-right">
                Amount
              </th>
            </tr>
          </thead>
          <tbody>
            {preview.items.map((item) => (
              <tr key={item.id} className="border-b border-gray-50">
                <td className="py-4 font-medium text-gray-800">{item.name}</td>
                <td className="py-4 text-gray-600 text-right">{item.qty}</td>
                <td className="py-4 text-gray-600 text-right">
                  {item.rate} USD
                </td>
                <td className="py-4 text-gray-800 text-right font-medium">
                  {(item.rate * item.qty).toLocaleString()} USD
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* Totals */}
        <div className="w-full max-w-[250px] ml-auto space-y-3 mb-10">
          <div className="flex justify-between text-xs font-semibold text-gray-500 uppercase">
            <span>Subtotal</span>
            <span className="text-gray-800">
              {subtotal.toLocaleString()} USD
            </span>
          </div>
          <div className="flex justify-between text-xs font-semibold text-gray-500 uppercase border-b border-gray-100 pb-3">
            <span>Discount 5%</span>
            <span className="text-gray-800">
              {discount.toLocaleString()} USD
            </span>
          </div>
          <div className="flex justify-between text-xs font-bold text-gray-900 uppercase pt-1">
            <span>Total</span>
            <span className="text-blue-500">{total.toLocaleString()} USD</span>
          </div>
        </div>

        {/* Footer Notes */}
        <div className="mt-auto">
          <div className="text-xs text-gray-400 text-center mb-8">
            Transfer the amount to the business account below. Please include
            invoice number on your check.
            <br />
            <span className="font-semibold text-gray-500 mt-1 inline-block">
              BANK: <span className="text-gray-800">FTSBUS33</span> • IBAN:{" "}
              <span className="text-gray-800">GB82-1111-2222-3333</span>
            </span>
          </div>
          <div className="text-xs text-gray-400 mb-10">
            <span className="font-semibold text-gray-500 uppercase block mb-2">
              Notes
            </span>
            All amounts are in dollars. Please make the payment within 15 days
            from the issue of date of this invoice. Tax is not charged on the
            basis of paragraph 1 of Article 94 of the Value Added Tax Act.
            <br />
            <br />
            Thank you for your confidence in my work.
            <br />
            Signature
          </div>
        </div>
      </div>
    </div>
  );
};

export default InvoicePreview;
