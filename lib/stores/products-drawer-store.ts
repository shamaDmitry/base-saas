import { create } from "zustand";

type ProductsDrawerStore = {
  isAddProductDrawerOpen: boolean;
  openAddProductDrawer: () => void;
  closeAddProductDrawer: () => void;
  setAddProductDrawerOpen: (open: boolean) => void;
};

export const useProductsDrawerStore = create<ProductsDrawerStore>((set) => ({
  isAddProductDrawerOpen: false,
  openAddProductDrawer: () => set({ isAddProductDrawerOpen: true }),
  closeAddProductDrawer: () => set({ isAddProductDrawerOpen: false }),
  setAddProductDrawerOpen: (open) => set({ isAddProductDrawerOpen: open }),
}));

export const openAddProductDrawer = () => {
  useProductsDrawerStore.getState().openAddProductDrawer();
};

export const closeAddProductDrawer = () => {
  useProductsDrawerStore.getState().closeAddProductDrawer();
};

export const setAddProductDrawerOpen = (open: boolean) => {
  useProductsDrawerStore.getState().setAddProductDrawerOpen(open);
};
