import { Component } from '@angular/core';
import { TimelineEvent } from '../timeline-event';
import { addDays } from 'date-fns';

@Component({
    selector: 'timeline-event',
    templateUrl: './timeline-event.component.html',
    styleUrls: ['./timeline-event.component.scss']
})
export class TimelineEventComponent {
    public events: Array<TimelineEvent>;

    constructor() {
        this.events = [
            {
                status: 'Order Confirmed',
                date: addDays(new Date(), -4),
                icon: 'pi pi-shopping-cart',
                image: '/assets/images/order.jpeg',
                from: 'New Order',
                message:
                    'We are delighted to inform you that your order for a MacBook has been successfully placed and is currently being processed. \n' +
                    'Thank you for choosing our company for your technology needs.'
            },
            {
                status: 'Processing',
                date: addDays(new Date(), -3),
                icon: 'pi pi-spinner',
                message:
                    'We are writing to inform you that your MacBook order has been received and is currently being processed. \n' +
                    'Our team is working diligently to ensure that your order is fulfilled as quickly as possible.',
                from: 'Order',
                to: 'Processing'
            },
            {
                status: 'Shipped',
                date: addDays(new Date(), -1),
                icon: 'pi pi-truck',
                message:
                    'Thank you for ordering a MacBook from our online store. We are excited to let you know that your order has been processed and is ready to be shipped to your designated address.\n' +
                    '\n' +
                    'We understand that receiving your new MacBook is important to you, and we want to assure you that we are doing everything we can to ensure a safe and timely delivery. We have partnered with some of the best shipping companies to deliver your MacBook to you as quickly as possible.',
                from: 'Processing',
                to: 'Shipped'
            },
            {
                status: 'Out For Delivery',
                date: addDays(new Date(), -1),
                icon: 'pi pi-truck',
                from: 'Shipped',
                to: 'Out For Delivery',
                message:
                    'Good news! Your MacBook is on its way and is currently out for delivery! Our team is working hard to ensure that it arrives at your doorstep as soon as possible. You can track the delivery status using the tracking number provided in your order confirmation email. We hope you enjoy your new MacBook and thank you for choosing our company for your technology needs.'
            },
            {
                status: 'Delivered',
                date: addDays(new Date(), -1),
                icon: 'pi pi-check-circle',
                from: 'Out For Delivery',
                to: 'Delivered',
                message:
                    'Congratulations! Your brand new MacBook has been delivered to your doorstep!\n' +
                    '\n' +
                    "Unboxing your new MacBook is an exciting experience, and you're about to embark on an amazing journey with your sleek and powerful machine.\n"
            }
        ];
    }
}
