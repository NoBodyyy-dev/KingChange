import {ButtonHTMLAttributes} from 'react';

const BorderButton = (props: ButtonHTMLAttributes<HTMLButtonElement>) => {
    return <button {...props} className={`button-green-border ${props?.className && props.className}`}>{props.children}</button>;
};

export default BorderButton;