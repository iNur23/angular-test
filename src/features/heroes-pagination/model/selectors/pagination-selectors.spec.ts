import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { StateSchema } from "app/store/store";
import { TestBed } from '@angular/core/testing';
import { cold } from 'jasmine-marbles'
import {
    selectHeroesPagination,
    selectHeroesPaginationLimit,
    selectHeroesPaginationPage
} from './pagination.selectors';

const testState: DeepPartial<StateSchema> = {
    heroesPage: {
        pagination: { page: 4, limit: 3 }
    }
}

describe('Pagination page selector', () => {
    let store: MockStore<DeepPartial<StateSchema>>;
    const initialState: DeepPartial<StateSchema> = testState;

    beforeEach(() => {
        TestBed.configureTestingModule({            
            providers: [
              provideMockStore({ initialState })
            ],
          });

        store = TestBed.inject(MockStore);
    });

    it('should return page', () => {
        const expected = cold('a', { a: 4 })
        expect(store.select(selectHeroesPaginationPage)).toBeObservable(expected)
    });

    it('should return default page', () => {
        store.setState({ heroesPage: { pagination: {} } })

        const expected = cold('a', { a: 1 })
        expect(store.select(selectHeroesPaginationPage)).toBeObservable(expected)
    });

    it('should work with empty state', () => {
        store.setState({})

        const expected = cold('a', { a: 1 })
        expect(store.select(selectHeroesPaginationPage)).toBeObservable(expected)
    });
});

describe('Pagination limit selector', () => {
    let store: MockStore<DeepPartial<StateSchema>>;
    const initialState: DeepPartial<StateSchema> = testState;

    beforeEach(() => {
        TestBed.configureTestingModule({            
            providers: [
              provideMockStore({ initialState })
            ],
          });

        store = TestBed.inject(MockStore);
    });

    it('should return limit', () => {
        const expected = cold('a', { a: 3 })
        expect(store.select(selectHeroesPaginationLimit)).toBeObservable(expected)
    });

    it('should return default limit', () => {
        store.setState({ heroesPage: { pagination: {} } })

        const expected = cold('a', { a: 12 })
        expect(store.select(selectHeroesPaginationLimit)).toBeObservable(expected)
    });

    it('should work with empty state', () => {
        store.setState({})

        const expected = cold('a', { a: 12 })
        expect(store.select(selectHeroesPaginationLimit)).toBeObservable(expected)
    });
});


describe('Pagination selector', () => {
    let store: MockStore<DeepPartial<StateSchema>>;
    const initialState: DeepPartial<StateSchema> = testState;
    const defaultOptions = { page: 1, limit: 12 }

    beforeEach(() => {
        TestBed.configureTestingModule({            
            providers: [
              provideMockStore({ initialState })
            ],
          });

        store = TestBed.inject(MockStore);
    });

    it('should return options', () => {
        const expected = cold('a', { a: { page: 4, limit: 3 } })
        expect(store.select(selectHeroesPagination)).toBeObservable(expected)
    });

    it('should return default options', () => {
        store.setState({ heroesPage: { pagination: undefined } })

        const expected = cold('a', { a: defaultOptions })
        expect(store.select(selectHeroesPagination)).toBeObservable(expected)
    });

    it('should work with empty state', () => {
        store.setState({})

        const expected = cold('a', { a: defaultOptions })
        expect(store.select(selectHeroesPagination)).toBeObservable(expected)
    });
});
