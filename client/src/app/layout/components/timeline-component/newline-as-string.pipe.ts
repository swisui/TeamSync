import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Pipe({
    name: 'newline'
})
export class NewlinePipe implements PipeTransform {
    constructor(private sanitizer: DomSanitizer) {}

    transform(value: string): SafeHtml {
        if (!value) {
            return value;
        }
        const replaced = value.replace(/\n/g, '<br />');
        return this.sanitizer.bypassSecurityTrustHtml(replaced);
    }
}
