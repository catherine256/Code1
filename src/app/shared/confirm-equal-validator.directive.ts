
import { AbstractControl, NG_VALIDATORS, Validator } from '@angular/forms';
import { Directive } from '@angular/core';

@Directive({
    selector: '[appConfirmEqualValidator]',
    providers: [{
        provide: NG_VALIDATORS,
        useExisting: ConfirmEqualValidatorDirective,
        multi: true

    }]

})

export class ConfirmEqualValidatorDirective implements Validator {
    validate(passwordGroup: AbstractControl): { [key: string]: any } | null {
        const passwordField = passwordGroup.get('password');
        const confirnPasswordField = passwordGroup.get('confirmPassword');
        if (passwordField && confirnPasswordField && passwordField.value !== confirnPasswordField.value) {
            return { 'notEqual': true };
        }
        return null;
    }

}
