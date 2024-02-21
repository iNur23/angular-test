import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { StateSchema } from "app/store/store";
import { TestBed } from '@angular/core/testing';
import { cold } from 'jasmine-marbles'
import { selectHeroesListData, selectHeroesListError, selectHeroesListHasMore, selectHeroesListIsLoading, selectHeroesListLimit, selectHeroesListPage, selectHeroesListPageOptions, selectHeroesListSearch } from './heroes-list.selectors';

const testState: DeepPartial<StateSchema> = {
    heroesList: { 
        data: [ { name: 'FirstHero' }, { name: 'SecondHero' }, { name: 'ThirdHero' }, ],
        isLoading: false,
        page: 4,
        limit: 3,
        search: 'Test query'
    }
}

describe('Heroes list data selector', () => {
    let store: MockStore<DeepPartial<StateSchema>>;
    const initialState: DeepPartial<StateSchema> = testState;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [
            ],
            providers: [
              provideMockStore({ initialState })
            ],
          });

        store = TestBed.inject(MockStore);
    });

    it('should return data', () => {
        const expected = cold('a', { a: [ { name: 'FirstHero' }, { name: 'SecondHero' }, { name: 'ThirdHero' }, ] })
        expect(store.select(selectHeroesListData)).toBeObservable(expected)
    });

    it('should return empty array', () => {
        store.setState({ heroesList: {} })

        const expected = cold('a', { a: [] })
        expect(store.select(selectHeroesListData)).toBeObservable(expected)
    });

    it('should work with empty state', () => {
        store.setState({})

        const expected = cold('a', { a: [] })
        expect(store.select(selectHeroesListData)).toBeObservable(expected)
    });
});

describe('Heroes list isLoading selector', () => {
    let store: MockStore<DeepPartial<StateSchema>>;
    const initialState: DeepPartial<StateSchema> = testState;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [
            ],
            providers: [
              provideMockStore({ initialState })
            ],
          });

        store = TestBed.inject(MockStore);
    });

    it('should return false', () => {
        const expected = cold('a', { a: false })
        expect(store.select(selectHeroesListIsLoading)).toBeObservable(expected)
    });

    it('should return true', () => {
        store.setState({ heroesList: { isLoading: true } })

        const expected = cold('a', { a: true })
        expect(store.select(selectHeroesListIsLoading)).toBeObservable(expected)
    });

    it('should work with empty state', () => {
        store.setState({})

        const expected = cold('a', { a: false })
        expect(store.select(selectHeroesListIsLoading)).toBeObservable(expected)
    });
});

describe('Heroes list error selector', () => {
    let store: MockStore<DeepPartial<StateSchema>>;
    const initialState: DeepPartial<StateSchema> = testState;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [
            ],
            providers: [
              provideMockStore({ initialState })
            ],
          });

        store = TestBed.inject(MockStore);
    });

    it('should return undefined', () => {
        const expected = cold('a', { a: undefined })
        expect(store.select(selectHeroesListError)).toBeObservable(expected)
    });

    it('should return error', () => {
        store.setState({ heroesList: { error: 'error' } })

        const expected = cold('a', { a: 'error' })
        expect(store.select(selectHeroesListError)).toBeObservable(expected)
    });

    it('should work with empty state', () => {
        store.setState({})

        const expected = cold('a', { a: undefined })
        expect(store.select(selectHeroesListError)).toBeObservable(expected)
    });
});

describe('Heroes list page selector', () => {
    let store: MockStore<DeepPartial<StateSchema>>;
    const initialState: DeepPartial<StateSchema> = testState;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [
            ],
            providers: [
              provideMockStore({ initialState })
            ],
          });

        store = TestBed.inject(MockStore);
    });

    it('should return page', () => {
        const expected = cold('a', { a: 4 })
        expect(store.select(selectHeroesListPage)).toBeObservable(expected)
    });

    it('should return default page', () => {
        store.setState({ heroesList: {} })

        const expected = cold('a', { a: 1 })
        expect(store.select(selectHeroesListPage)).toBeObservable(expected)
    });

    it('should work with empty state', () => {
        store.setState({})

        const expected = cold('a', { a: 1 })
        expect(store.select(selectHeroesListPage)).toBeObservable(expected)
    });
});

describe('Heroes list limit selector', () => {
    let store: MockStore<DeepPartial<StateSchema>>;
    const initialState: DeepPartial<StateSchema> = testState;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [
            ],
            providers: [
              provideMockStore({ initialState })
            ],
          });

        store = TestBed.inject(MockStore);
    });

    it('should return limit', () => {
        const expected = cold('a', { a: 3 })
        expect(store.select(selectHeroesListLimit)).toBeObservable(expected)
    });

    it('should return default limit', () => {
        store.setState({ heroesList: {} })

        const expected = cold('a', { a: 12 })
        expect(store.select(selectHeroesListLimit)).toBeObservable(expected)
    });

    it('should work with empty state', () => {
        store.setState({})

        const expected = cold('a', { a: 12 })
        expect(store.select(selectHeroesListLimit)).toBeObservable(expected)
    });
});

describe('Heroes list search selector', () => {
    let store: MockStore<DeepPartial<StateSchema>>;
    const initialState: DeepPartial<StateSchema> = testState;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [
            ],
            providers: [
              provideMockStore({ initialState })
            ],
          });

        store = TestBed.inject(MockStore);
    });

    it('should return query', () => {
        const expected = cold('a', { a: 'Test query' })
        expect(store.select(selectHeroesListSearch)).toBeObservable(expected)
    });

    it('should return empty string', () => {
        store.setState({ heroesList: {} })

        const expected = cold('a', { a: '' })
        expect(store.select(selectHeroesListSearch)).toBeObservable(expected)
    });

    it('should work with empty state', () => {
        store.setState({})

        const expected = cold('a', { a: '' })
        expect(store.select(selectHeroesListSearch)).toBeObservable(expected)
    });
});

describe('Heroes list page options selector', () => {
    let store: MockStore<DeepPartial<StateSchema>>;
    const initialState: DeepPartial<StateSchema> = testState;
    const defaultOptions = { page: 1, limit: 12, search: '' }

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [
            ],
            providers: [
              provideMockStore({ initialState })
            ],
          });

        store = TestBed.inject(MockStore);
    });

    it('should return options', () => {
        const expected = cold('a', { a: {
            page: 4,
            limit: 3,
            search: 'Test query'
        } })
        expect(store.select(selectHeroesListPageOptions)).toBeObservable(expected)
    });

    it('should return default options', () => {
        store.setState({ heroesList: {} })

        const expected = cold('a', { a: defaultOptions })
        expect(store.select(selectHeroesListPageOptions)).toBeObservable(expected)
    });

    it('should work with empty state', () => {
        store.setState({})

        const expected = cold('a', { a: defaultOptions })
        expect(store.select(selectHeroesListPageOptions)).toBeObservable(expected)
    });
});

describe('Heroes list hasMore selector', () => {
    let store: MockStore<DeepPartial<StateSchema>>;
    const initialState: DeepPartial<StateSchema> = testState;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [
            ],
            providers: [
              provideMockStore({ initialState })
            ],
          });

        store = TestBed.inject(MockStore);
    });

    it('should return true', () => {
        const expected = cold('a', { a: true })
        expect(store.select(selectHeroesListHasMore)).toBeObservable(expected)
    });

    it('should return false', () => {
        store.setState({ heroesList: { data: new Array(9), limit: 10 } })

        const expected = cold('a', { a: false })
        expect(store.select(selectHeroesListHasMore)).toBeObservable(expected)
    });

    it('should work with empty state', () => {
        store.setState({})

        const expected = cold('a', { a: false })
        expect(store.select(selectHeroesListHasMore)).toBeObservable(expected)
    });
});
