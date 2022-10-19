import React from 'react';
import styles from './menu-item.module.scss';

export interface MenuItemProps {
    className?: string;
    menuLabel?: string;
}

export const MenuItem: React.FC<MenuItemProps> = ({ className,menuLabel }) => {
    return <div className={`${styles.root} ${className}`}>
        <img src="https://wixplosives.github.io/wcs-assets-storage/add-panel/image-placeholder.jpg" className={styles.img} />{menuLabel}</div>;
};
