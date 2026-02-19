import { v4 as uuidv4 } from "uuid";
import { create } from "zustand";

export type ProductDraft = {
  image: string;
  productName: string;
  brand: string;
  price: number;
  isPriceNegotiable: boolean;
  description: string;
};

export type Product = ProductDraft & {
  id: string;
  createdAt: string;
  updatedAt: string;
};

const initialProductDraft: ProductDraft = {
  image: "",
  productName: "",
  brand: "",
  price: 0,
  isPriceNegotiable: false,
  description: "",
};

type ProductsCrudStore = {
  products: Product[];
  draft: ProductDraft;
  setDraftField: <K extends keyof ProductDraft>(
    field: K,
    value: ProductDraft[K],
  ) => void;
  setDraft: (draftPatch: Partial<ProductDraft>) => void;
  resetDraft: () => void;
  createProduct: (payload?: Partial<ProductDraft>) => Product;
  updateProduct: (id: string, payload: Partial<ProductDraft>) => void;
  deleteProduct: (id: string) => void;
};

export const useProductsCrudStore = create<ProductsCrudStore>((set, get) => ({
  products: [],
  draft: initialProductDraft,

  setDraftField: (field, value) =>
    set((state) => ({
      draft: {
        ...state.draft,
        [field]: value,
      },
    })),

  setDraft: (draftPatch) =>
    set((state) => ({
      draft: {
        ...state.draft,
        ...draftPatch,
      },
    })),

  resetDraft: () => set({ draft: initialProductDraft }),

  createProduct: (payload = {}) => {
    const now = new Date().toISOString();

    const product: Product = {
      id: uuidv4(),
      ...get().draft,
      ...payload,
      createdAt: now,
      updatedAt: now,
    };

    set((state) => ({
      products: [product, ...state.products],
      draft: initialProductDraft,
    }));

    return product;
  },

  updateProduct: (id, payload) =>
    set((state) => ({
      products: state.products.map((product) =>
        product.id === id
          ? {
              ...product,
              ...payload,
              updatedAt: new Date().toISOString(),
            }
          : product,
      ),
    })),

  deleteProduct: (id) =>
    set((state) => ({
      products: state.products.filter((product) => product.id !== id),
    })),
}));
