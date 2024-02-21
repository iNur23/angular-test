import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { StateSchema } from "app/store/store";
import { TestBed } from '@angular/core/testing';
import { cold } from 'jasmine-marbles'
import { selectAuthError, selectAuthIsLoading, selectIsAuthorized, selectUserData } from './auth.selectors';

const testState: DeepPartial<StateSchema> = {
    auth: {
        isLoading: false,
        userData: {
            username: 'name'
        }
    }
}

describe('Auth userData selector', () => {
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

    it('should return user data', () => {
        const expected = cold('a', { a: { username: 'name' } })
        expect(store.select(selectUserData)).toBeObservable(expected)
    });

    it('should return undefined', () => {
        store.setState({ auth: {} })

        const expected = cold('a', { a: undefined })
        expect(store.select(selectUserData)).toBeObservable(expected)
    });

    it('should work with empty state', () => {
        store.setState({})

        const expected = cold('a', { a: undefined })
        expect(store.select(selectUserData)).toBeObservable(expected)
    });
});

describe('Auth isAuthorized selector', () => {
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
        expect(store.select(selectIsAuthorized)).toBeObservable(expected)
    });

    it('should return false', () => {
        store.setState({ auth: {} })

        const expected = cold('a', { a: false })
        expect(store.select(selectIsAuthorized)).toBeObservable(expected)
    });

    it('should work with empty state', () => {
        store.setState({})

        const expected = cold('a', { a: false })
        expect(store.select(selectIsAuthorized)).toBeObservable(expected)
    });
});

describe('Auth isLoading selector', () => {
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
        store.setState({ auth: { isLoading: true } })

        const expected = cold('a', { a: true })
        expect(store.select(selectAuthIsLoading)).toBeObservable(expected)
    });

    it('should return false', () => {
        const expected = cold('a', { a: false })
        expect(store.select(selectAuthIsLoading)).toBeObservable(expected)
    });

    it('should work with empty state', () => {
        store.setState({})

        const expected = cold('a', { a: false })
        expect(store.select(selectAuthIsLoading)).toBeObservable(expected)
    });
});

describe('Auth error selector', () => {
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
        expect(store.select(selectAuthError)).toBeObservable(expected)
    });

    it('should return error "error"', () => {
        store.setState({ auth: { error: 'error' } })

        const expected = cold('a', { a: 'error' })
        expect(store.select(selectAuthError)).toBeObservable(expected)
    });

    it('should work with empty state', () => {
        store.setState({})

        const expected = cold('a', { a: undefined })
        expect(store.select(selectAuthError)).toBeObservable(expected)
    });
});
