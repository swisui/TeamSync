import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { GetColorPipe } from './get-color.pipe';
import { FormatRelativePipe } from './format-relative.pipe';

@NgModule({
    declarations: [GetColorPipe, FormatRelativePipe],
    imports: [CommonModule],
    exports: [GetColorPipe, FormatRelativePipe]
})
export class PipeModule {}
