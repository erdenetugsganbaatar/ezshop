import { createSelector } from "reselect";

const selectCrud = (state) => state.client;

export const selectCurrentItem = createSelector(
  [selectCrud],
  (crud) => crud.current
);

export const selectAllCategories = createSelector(
  [selectCrud],
  (crud) => crud.category  
);
export const selectAllBanners = createSelector(
  [selectCrud],
  (crud) => crud.banner
);
export const selectAllSpecials = createSelector(
  [selectCrud],
  (crud) => crud.special
);
export const selectAllBrandWithProduct = createSelector(
  [selectCrud],
  (crud) => crud.brandWithProduct
);
export const selectAllBrands = createSelector(
  [selectCrud],
  (crud) => crud.brand
);
export const selectItemById = (itemId) =>
  createSelector(selectListItems, (list) =>
    list.result.items.find((item) => item._id === itemId)
  );

export const selectCreatedItem = createSelector(
  [selectCrud],
  (crud) => crud.create
);
export const selectProducts = createSelector(
  [selectCrud],
  (crud) => crud.product
);

export const selectUpdatedItem = createSelector(
  [selectCrud],
  (crud) => crud.update
);

export const selectReadItem = createSelector([selectCrud], (crud) => crud.read);

export const selectDeletedItem = createSelector(
  [selectCrud],
  (crud) => crud.delete
);

export const selectSearchedItems = createSelector(
  [selectCrud],
  (crud) => crud.search
);
