// Heading.tsx
import React from 'react';
import styles from './Heading.module.css';
import clsx from 'clsx';

type HeadingProps = {
    tag?: 'h1' | 'h2' | 'h3' | 'p'; // 見出しの階層
    variant?: 'XXL' |'XL' | 'L' | 'M';
    color?: 'default' | 'text-gray-900' | 'text-gray-700' | 'text-gray-500' | 'text-white' | 'primary' | 'danger';
    align?: 'left' | 'center' | 'right';
    weight?: 'bold' | 'reg';
    underline?: boolean;
    label: React.ReactNode;
};

export const Heading: React.FC<HeadingProps> = ({
    tag = 'h1',
    variant = 'pageTitle',
    color = 'default',
    align = 'center',
    weight = 'bold',
    underline = false,
    label,
}) => {
    const Tag = tag;

    return (
        <Tag className={clsx(styles.heading, styles[variant], styles[align], underline && styles.underline, styles[weight], styles[color])}>
            {label}
        </Tag>
    );
};

export default Heading;
