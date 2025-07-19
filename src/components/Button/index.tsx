// Button.tsx
import React from 'react';
import clsx from 'clsx';
import styles from './Button.module.css';

type ButtonProps = {
    btnSize?: 'M' | 'L';
    fontSize?: 'sm' | 'md';
    label?: string;
    variant?: 'primary' | 'outline' | 'hurryUp';
    icon?: 'megaphone' | 'check' | 'close' | 'flag' | 'fire' | 'none';
    disabled?: boolean;
    onClick?: () => void;
};

export const Button: React.FC<ButtonProps> = ({
    label,
    btnSize = 'M',
    fontSize = 'sm',
    variant = 'primary',
    icon = 'none',
    onClick,
    disabled = false,
}) => {
    return (
        <button
            className={clsx(
                styles.button,
                styles[`fontsize-${fontSize}`],
                styles[variant],
                styles[`btnsize-${btnSize}`],
            )}
            onClick={onClick}
            disabled={disabled}

        >
            {icon !== 'none' && (
                <span className={clsx(styles.icon, styles[`icon-${icon}`])} />
            )}
            {label}
        </button>
    );
};

export default Button;
