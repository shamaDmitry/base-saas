import { create } from "zustand";

export type InvoiceStatus = "Complete" | "Pending" | "Cancel";

export interface Invoice {
  id: string;
  invoiceId: string;
  name: string;
  avatarUrl: string;
  email: string;
  date: string;
  status: InvoiceStatus;
  isStarred: boolean;
}

export type ProductItem = {
  id: string;
  name: string;
  rate: number;
  qty: number;
};

export type InvoiceData = {
  invoiceId: string;
  date: string;
  name: string;
  email: string;
  address: string;
  items: ProductItem[];
};

const defaultDraft: InvoiceData = {
  invoiceId: "#876370",
  date: "01/12/2021",
  name: "Alison G.",
  email: "Example@gmail.com",
  address: "Street",
  items: [
    { id: "1", name: "ipod 2021", rate: 1000, qty: 10 },
    { id: "2", name: "Apple Mackbook", rate: 1500, qty: 10 },
    { id: "3", name: "i phone 12", rate: 885, qty: 10 },
  ],
};

interface InvoiceStore {
  invoices: Invoice[];
  deleteInvoice: (id: string) => void;
  toggleStar: (id: string) => void;

  draft: InvoiceData;
  preview: InvoiceData;
  setDraftField: (
    field: keyof Omit<InvoiceData, "items">,
    value: string,
  ) => void;
  addDraftItem: (item: ProductItem) => void;
  removeDraftItem: (id: string) => void;
  publishToPreview: () => void;
}

const initialData: Invoice[] = [
  {
    id: "1",
    invoiceId: "#876364",
    name: "Arrora gaur",
    avatarUrl: "https://placehold.co/40x40/png?text=AG",
    email: "arroragaur@gmail.com",
    date: "12 Dec, 2020",
    status: "Complete",
    isStarred: true,
  },
  {
    id: "2",
    invoiceId: "#876123",
    name: "James Mullican",
    avatarUrl: "https://placehold.co/40x40/png?text=JM",
    email: "jamesmullican@gmail.com",
    date: "10 Dec, 2020",
    status: "Pending",
    isStarred: false,
  },
  {
    id: "3",
    invoiceId: "#876213",
    name: "Robert Bacins",
    avatarUrl: "https://placehold.co/40x40/png?text=RB",
    email: "robertbacins@gmail.com",
    date: "09 Dec, 2020",
    status: "Complete",
    isStarred: false,
  },
  {
    id: "4",
    invoiceId: "#876987",
    name: "Bethany Jackson",
    avatarUrl: "https://placehold.co/40x40/png?text=BJ",
    email: "bethanyjackson@gmail.com",
    date: "09 Dec, 2020",
    status: "Cancel",
    isStarred: false,
  },
  {
    id: "5",
    invoiceId: "#871345",
    name: "Anne Jacob",
    avatarUrl: "https://placehold.co/40x40/png?text=AJ",
    email: "annejacob@gmail.com",
    date: "10 Dec, 2020",
    status: "Complete",
    isStarred: false,
  },
];

export const useInvoiceStore = create<InvoiceStore>((set) => ({
  invoices: initialData,

  deleteInvoice: (id) =>
    set((state) => ({
      invoices: state.invoices.filter((inv) => inv.id !== id),
    })),

  toggleStar: (id) =>
    set((state) => ({
      invoices: state.invoices.map((inv) =>
        inv.id === id ? { ...inv, isStarred: !inv.isStarred } : inv,
      ),
    })),

  draft: defaultDraft,
  preview: defaultDraft,

  setDraftField: (field, value) =>
    set((state) => ({
      draft: { ...state.draft, [field]: value },
    })),

  addDraftItem: (item) =>
    set((state) => ({
      draft: { ...state.draft, items: [...state.draft.items, item] },
    })),

  removeDraftItem: (id) =>
    set((state) => ({
      draft: {
        ...state.draft,
        items: state.draft.items.filter((item) => item.id !== id),
      },
    })),

  publishToPreview: () =>
    set((state) => ({
      preview: { ...state.draft },
    })),
}));
