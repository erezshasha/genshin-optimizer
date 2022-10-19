import React from 'react';
import styles from './menu.module.scss';
import { MenuItem } from '../menu-item/menu-item';

export interface MenuProps {
    className?: string;
}

export const Menu: React.FC<MenuProps> = ({ className }) => {
    return <div className={`${styles.root} ${className}`}>
        <MenuItem menuLabel="Overview" />
        <MenuItem menuLabel={'Talents'} />
        <MenuItem menuLabel={'Equipment'} />
        <MenuItem menuLabel="Team Buffs" />
        <MenuItem menuLabel="Optimize" />
    </div>;
};
