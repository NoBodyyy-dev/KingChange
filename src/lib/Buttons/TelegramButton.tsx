import {ButtonHTMLAttributes} from 'react';

const TelegramButton = (props: ButtonHTMLAttributes<HTMLButtonElement>) => {
    return <button {...props} className={`button-telegram ${props?.className && props.className}`}>Telegram-бот</button>;
};

export default TelegramButton;