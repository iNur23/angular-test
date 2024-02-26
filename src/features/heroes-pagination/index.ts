export { paginationActions } from "./model/slice/pagination.actions";

export { initialState as paginationInitialState } from "./model/slice/pagination.reducer";

export { selectHeroesPagination, selectHeroesPaginationLimit } from "./model/selectors/pagination.selectors";

export { paginationReducer } from "./model/slice/pagination.reducer";

export { PaginationSchema } from "./model/types/pagination";

export { HeroesPaginationComponent } from "./ui/heroes-pagination.component";
