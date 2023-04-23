export interface TimelineEvent {
    status: string;
    date: Date;
    icon: string;
    image?: string;
    from?: string;
    to?: string;
    message: string;
}
