import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { StateSchema } from "app/store/store";
import { TestBed } from '@angular/core/testing';
import { cold } from 'jasmine-marbles'
import { selectHeroesData, selectHeroesError, selectHeroesHasMore, selectHeroesIsLoading } from './heroes-page.selectors';

const testState: DeepPartial<StateSchema> = {
    heroesPage: {
        heroes: {
            data: [ { name: 'FirstHero' }, { name: 'SecondHero' }, { name: 'ThirdHero' }, ],
            isLoading: false,
        },
        pagination: { limit: 3 }
    }
}

describe('Heroes data selector', () => {
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

    it('should return data', () => {
        const expected = cold('a', { a: [ { name: 'FirstHero' }, { name: 'SecondHero' }, { name: 'ThirdHero' }, ] })
        expect(store.select(selectHeroesData)).toBeObservable(expected)
    });

    it('should return empty array', () => {
        store.setState({ heroesPage: { heroes: {} } })

        const expected = cold('a', { a: [] })
        expect(store.select(selectHeroesData)).toBeObservable(expected)
    });

    it('should work with empty state', () => {
        store.setState({})

        const expected = cold('a', { a: [] })
        expect(store.select(selectHeroesData)).toBeObservable(expected)
    });
});

describe('Heroes isLoading selector', () => {
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

    it('should return false', () => {
        const expected = cold('a', { a: false })
        expect(store.select(selectHeroesIsLoading)).toBeObservable(expected)
    });

    it('should return true', () => {
        store.setState({ heroesPage: { heroes: { isLoading: true } } })

        const expected = cold('a', { a: true })
        expect(store.select(selectHeroesIsLoading)).toBeObservable(expected)
    });

    it('should work with empty state', () => {
        store.setState({})

        const expected = cold('a', { a: false })
        expect(store.select(selectHeroesIsLoading)).toBeObservable(expected)
    });
});

describe('Heroes error selector', () => {
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

    it('should return undefined', () => {
        const expected = cold('a', { a: undefined })
        expect(store.select(selectHeroesError)).toBeObservable(expected)
    });

    it('should return error', () => {
        store.setState({ heroesPage: { heroes: { error: 'error' } } })

        const expected = cold('a', { a: 'error' })
        expect(store.select(selectHeroesError)).toBeObservable(expected)
    });

    it('should work with empty state', () => {
        store.setState({})

        const expected = cold('a', { a: undefined })
        expect(store.select(selectHeroesError)).toBeObservable(expected)
    });
});

describe('Heroes hasMore selector', () => {
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

    it('should return true', () => {
        const expected = cold('a', { a: true })
        expect(store.select(selectHeroesHasMore)).toBeObservable(expected)
    });

    it('should return false', () => {
        store.setState({ heroesPage: { heroes: { data: new Array(9) }, pagination: { limit: 10 } } })

        const expected = cold('a', { a: false })
        expect(store.select(selectHeroesHasMore)).toBeObservable(expected)
    });

    it('should work with empty state', () => {
        store.setState({})

        const expected = cold('a', { a: false })
        expect(store.select(selectHeroesHasMore)).toBeObservable(expected)
    });
});