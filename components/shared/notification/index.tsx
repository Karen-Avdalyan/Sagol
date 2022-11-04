import { notification } from 'antd';
import Icon from "components/shared/icon";
import NotificationProps, { NotificationType } from './types';

import styles from './notification.module.scss';

function getNecessaryStyle(status: NotificationType) {
    switch (status) {
        case NotificationType.Error:
            return styles.error;
        case NotificationType.Warning:
            return styles.warnnig;
        default: return styles.success;
    };
}

export default function openNotification({ status, messages, descriptions }: NotificationProps) {
    notification.open({
        message: messages,
        description: descriptions,
        icon: <Icon name='sagol.svg' width={30} height={38} />,
        className: `${getNecessaryStyle(status)}`,
    });
};
