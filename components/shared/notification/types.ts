export enum NotificationType {
    Success,
    Error,
    Warning
};

export default interface NotificationProps {
    status: NotificationType
    messages: string
    descriptions: string
};
