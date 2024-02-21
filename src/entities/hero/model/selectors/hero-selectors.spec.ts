import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { StateSchema } from "app/store/store";
import { TestBed } from '@angular/core/testing';
import { selectHeroData, selectHeroError, selectHeroIsLoading, selectHeroSection } from './hero.selectors';
import { cold } from 'jasmine-marbles'

const testState: DeepPartial<StateSchema> = {
    hero: {
       data: { name: 'Test name' },
       isLoading: false,
       selectedSection: 'biography'
    }
}

describe('Hero data selector', () => {
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

    it('should return hero', () => {
        const expected = cold('a', { a: { name: 'Test name' } })
        expect(store.select(selectHeroData)).toBeObservable(expected)
    });

    it('should return undefined', () => {
        store.setState({ hero: {} })

        const expected = cold('a', { a: undefined })
        expect(store.select(selectHeroData)).toBeObservable(expected)
    });

    it('should work with empty state', () => {
        store.setState({})

        const expected = cold('a', { a: undefined })
        expect(store.select(selectHeroData)).toBeObservable(expected)
    });
});

describe('Hero isLoading selector', () => {
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
        expect(store.select(selectHeroIsLoading)).toBeObservable(expected)
    });

    it('should return true', () => {
        store.setState( { hero: { isLoading: true } } )

        const expected = cold('a', { a: true })
        expect(store.select(selectHeroIsLoading)).toBeObservable(expected)
    });

    it('should work with empty state', () => {
        store.setState({})

        const expected = cold('a', { a: false })
        expect(store.select(selectHeroIsLoading)).toBeObservable(expected)
    });
});

describe('Hero error selector', () => {
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
        expect(store.select(selectHeroError)).toBeObservable(expected)
    });

    it('should return error', () => {
        store.setState( { hero: { error: 'error' } } )

        const expected = cold('a', { a: 'error' })
        expect(store.select(selectHeroError)).toBeObservable(expected)
    });

    it('should work with empty state', () => {
        store.setState({})

        const expected = cold('a', { a: undefined })
        expect(store.select(selectHeroError)).toBeObservable(expected)
    });
});

describe('Hero section selector', () => {
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

    it('should return section "biography"', () => {
        const expected = cold('a', { a: 'biography' })
        expect(store.select(selectHeroSection)).toBeObservable(expected)
    });

    it('should return undefined', () => {
        store.setState( { hero: { } } )

        const expected = cold('a', { a: undefined })
        expect(store.select(selectHeroSection)).toBeObservable(expected)
    });

    it('should work with empty state', () => {
        store.setState({})

        const expected = cold('a', { a: undefined })
        expect(store.select(selectHeroSection)).toBeObservable(expected)
    });
});
