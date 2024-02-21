import { AuthGuardService } from "./auth-guard.service";
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { StateSchema } from "app/store/store";
import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { LoginPageComponent } from "pages/login-page";

describe('AuthGuardService', () => {
    let guard: AuthGuardService;
    let store: MockStore<Partial<StateSchema>>;
    const initialState: Partial<StateSchema> = { auth: { isLoading: false, userData: { username: 'user' } } };

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [
                RouterTestingModule.withRoutes([{path: 'login', component: LoginPageComponent}])
            ],
            providers: [
              AuthGuardService,
              provideMockStore({ initialState })
            ],
          });

        store = TestBed.inject(MockStore);
        guard = TestBed.inject(AuthGuardService);
    });

    it('should return true if the user state is logged in', () => {
        expect(guard.canActivate()).toBe(true);
    });

    it('should return false if the user state is not logged in', () => {
        store.setState({
            auth: { isLoading: false }
        })
  
        expect(guard.canActivate()).toBe(false);
    });

    it('should work with empty state', () => {
        store.setState({})

        expect(guard.canActivate()).toBe(false);
    });
});