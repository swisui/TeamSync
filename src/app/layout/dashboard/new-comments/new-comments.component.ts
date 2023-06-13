import { Component } from '@angular/core';
import { Comment } from '../../../models/comment.model';

@Component({
    selector: 'new-comments',
    templateUrl: './new-comments.component.html',
    styleUrls: ['./new-comments.component.scss']
})
export class NewCommentsComponent {
    public newComments: Array<Comment>;

    constructor() {
        this.newComments = [
            {
                user: 'John',
                project: 'Market Research 2024',
                message: 'Find my keynote attached in the documents',
                profileImageUrl: ''
            },
            {
                user: 'Dana R.',
                project: 'Market Research 2024',
                message: "I've added some new data. Let's connect after daily stand up.",
                profileImageUrl: ''
            }
        ];
    }
}
