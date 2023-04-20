import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
    selector: 'form-component',
    templateUrl: './form-component.component.html',
    styleUrls: ['./form-component.component.scss']
})
export class FormComponentComponent {
    public form: FormGroup;

    constructor(private formBuilder: FormBuilder) {
        this.form = this.formBuilder.group({
            firstname: [null, Validators.required],
            lastname: [null, Validators.required],
            address: [null, Validators.required],
            city: [null, Validators.required],
            state: [null, Validators.required],
            zip: [null, Validators.required]
        });
    }

    onSubmit() {
        console.log(this.form.value);
    }
}
