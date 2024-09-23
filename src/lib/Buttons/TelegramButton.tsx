import {ButtonHTMLAttributes} from 'react';

const TelegramButton = (props: ButtonHTMLAttributes<HTMLButtonElement>) => {
    return <button {...props} className="button-telegram">Telegram-бот</button>;
};

export default TelegramButton;