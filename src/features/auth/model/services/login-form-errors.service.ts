import { Injectable } from '@angular/core';
import { FormGroup, ValidationErrors } from '@angular/forms';
import { LoginFormErrors } from '../types/login-form';

@Injectable({
  providedIn: 'root'
})
export class LoginFormErrorsService {
    static getErrors(form: FormGroup): LoginFormErrors | null {
        const usernameErrors = form.get('username')?.errors
        const passwordErrors = form.get('password')?.errors

        if (!usernameErrors && !passwordErrors) return null
        
        return {
            username: usernameErrors ? this.errorsToString(usernameErrors)?.[0] : undefined,
            password: passwordErrors ? this.errorsToString(passwordErrors)?.[0] : undefined,
        }
    }

    private static errorsToString(errors: ValidationErrors): string[] {
        const { required,minlength } = errors

        const errorStrings: string[] = []
        if (required) {errorStrings.push('required')}
        if (minlength) {errorStrings.push(`min length is ${minlength.requiredLength}`)}

        return errorStrings
    }
}
