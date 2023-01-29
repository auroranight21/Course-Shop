import React from 'react';
import styles from './Header.module.css'
import {HeaderProps} from "@/layout/Header/Header.props";

export const Header = ({...props}: HeaderProps): JSX.Element => {
    return (
        <div {...props}>
            Header
        </div>
    );
};
