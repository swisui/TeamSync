import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { GetColorPipe } from './get-color.pipe';

@NgModule({
    declarations: [GetColorPipe],
    imports: [CommonModule],
    exports: [
        GetColorPipe,
    ],
})
export class PipeModule {}
