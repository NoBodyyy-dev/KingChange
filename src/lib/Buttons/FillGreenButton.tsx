import {ButtonHTMLAttributes} from 'react';

const FillGreenButton = (props: ButtonHTMLAttributes<HTMLButtonElement>) => {
    return <button {...props} className={`button-fill-green ${props?.className && props.className}`}>{props.children}</button>;
};

export default FillGreenButton;