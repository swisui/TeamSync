import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { GetColorPipe } from './get-color.pipe';
import { FormatRelativePipe } from './format-relative.pipe';
import { ShortNumberPipe } from './short-number.pipe';

@NgModule({
    declarations: [GetColorPipe, FormatRelativePipe, ShortNumberPipe],
    imports: [CommonModule],
  exports: [GetColorPipe, FormatRelativePipe, ShortNumberPipe]
})
export class PipeModule {}
