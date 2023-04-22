import { Component } from '@angular/core';

@Component({
    selector: 'typography',
    templateUrl: './typography.component.html',
    styleUrls: ['./typography.component.scss']
})
export class TypographyComponent {
    public shortText: string;
    public dummyText: string;
    public texts: Array<string>;

    constructor() {
        this.shortText = `Welcome to our website! We are a leading provider of innovative solutions and cutting-edge technology designed to help you achieve your goals.`;
        this.dummyText = `Welcome to our website! We are a leading provider of innovative solutions and cutting-edge technology designed to help you achieve your goals. Our team of experts is dedicated to providing you with top-notch service and support, ensuring that you get the most out of our products and services. Whether you're looking for the latest software solutions, cutting-edge hardware, or comprehensive IT support, we've got you covered. Our extensive range of products and services is designed to meet the needs of businesses of all sizes, from small startups to large corporations.`;

        this.texts = [
            'text-blue-500',
            'text-green-500',
            'text-yellow-500',
            'text-cyan-500',
            'text-pink-500',
            'text-indigo-500',
            'text-teal-500',
            'text-orange-500',
            'text-bluegray-500',
            'text-purple-600',
            'text-gray-500',
            'text-red-800',
            'text-white-alpha-50',
            'text-black-alpha-50'
        ];
    }
}
