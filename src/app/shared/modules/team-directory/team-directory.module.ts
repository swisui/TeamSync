import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AvatarModule } from 'primeng/avatar';
import { CardModule } from 'primeng/card';
import { TeamDirectoryComponent } from './team-directory.component';

@NgModule({
    declarations: [TeamDirectoryComponent],
    exports: [TeamDirectoryComponent],
    imports: [CommonModule, AvatarModule, CardModule]
})
export class TeamDirectoryModule {}
