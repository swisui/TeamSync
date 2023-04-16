import { Component } from '@angular/core';
import { User } from '../../../models/user.model';

@Component({
    selector: 'team-directory',
    templateUrl: './team-directory.component.html',
    styleUrls: ['./team-directory.component.scss']
})
export class TeamDirectoryComponent {
    public teamDirectory: Array<User>;

    constructor() {
        this.teamDirectory = [
            { name: 'Dana R.', profilePicUrl: '', role: 'Project Manager' },
            { name: 'Elon S.', profilePicUrl: '', role: 'Key Account Planner' },
            { name: 'Nancy W.', profilePicUrl: '', role: 'Account Manager' },
            { name: 'James M.', profilePicUrl: '', role: 'Digital Manager' }
        ];
    }
}
