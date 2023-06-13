import { Component, Input } from '@angular/core';
import { InfoCard } from '../../../models/info-card.model';

@Component({
    selector: 'info-card',
    templateUrl: './info-card.component.html',
    styleUrls: ['./info-card.component.scss']
})
export class InfoCardComponent {
    @Input()
    public data!: InfoCard;
    protected readonly Math = Math;
}
