import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
    selector: 'form-component',
    templateUrl: './form-component.component.html',
    styleUrls: ['./form-component.component.scss']
})
export class FormComponentComponent {
    public form: FormGroup;
    public advanceForm: FormGroup;
    public submitted: boolean;
    public advanceSubmitted: boolean;

    constructor(private formBuilder: FormBuilder) {
        this.submitted = false;
        this.advanceSubmitted = false;

        this.form = this.formBuilder.group({
            firstname: [null, Validators.required],
            lastname: [null, Validators.required],
            address: [null, Validators.required],
            city: [null, Validators.required],
            state: [null, Validators.required],
            zip: [null, Validators.required]
        });
        this.advanceForm = this.formBuilder.group({
            control1: [null, Validators.compose([Validators.required, Validators.minLength(8)])],
            control2: [
                null,
                Validators.compose([Validators.required, Validators.minLength(5), Validators.maxLength(10)])
            ],
            control3: [null, Validators.compose([Validators.required, Validators.min(5)])],
            control4: [null, Validators.compose([Validators.required, Validators.min(10), Validators.max(20)])],
            control5: [null, Validators.required],
            control6: [null, Validators.required]
        });
    }

    public onSubmit(): void {
        this.submitted = true;
    }

    public onAdvanceFormSubmit(): void {
        this.advanceSubmitted = true;
    }
}
