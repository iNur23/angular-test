import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { StateSchema } from "app/store/store";
import { TestBed } from '@angular/core/testing';
import { cold } from 'jasmine-marbles'
import { selectSearchQuery } from './search.selector';

const testState: DeepPartial<StateSchema> = {
    search: { query: 'Test query' }
}

describe('Search query selector', () => {
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
        expect(store.select(selectSearchQuery)).toBeObservable(expected)
    });

    it('should return empty string', () => {
        store.setState({ search: {} })

        const expected = cold('a', { a: '' })
        expect(store.select(selectSearchQuery)).toBeObservable(expected)
    });

    it('should work with empty state', () => {
        store.setState({})

        const expected = cold('a', { a: '' })
        expect(store.select(selectSearchQuery)).toBeObservable(expected)
    });
});