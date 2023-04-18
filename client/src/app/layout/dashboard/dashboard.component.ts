import { Component } from '@angular/core';
import { InfoCard } from '../../models/info-card.model';

@Component({
    selector: 'dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
    public now: Date;
    public infoCardList: Array<InfoCard>;

    constructor() {
        this.now = new Date();
        this.infoCardList = [
            {
                cardName: 'Total Revenue',
                icon: 'pi pi-wallet',
                value: 612839,
                growth: 16,
                isCurrency: true,
                bgColor: '#9e90ff'
            },
            {
                cardName: 'Total Customer',
                icon: 'pi pi-users',
                value: 513456,
                growth: -4,
                isCurrency: false,
                bgColor: '#ff8389'
            },
            {
                cardName: 'Total Transaction',
                icon: 'pi pi-arrow-right-arrow-left',
                value: 637902,
                growth: 8,
                isCurrency: false,
                bgColor: '#6b8dc8'
            },
            {
                cardName: 'Total Product',
                icon: 'pi pi-tablet',
                value: 256721,
                growth: 2,
                isCurrency: false,
                bgColor: '#65baba'
            }
        ];
    }
}
