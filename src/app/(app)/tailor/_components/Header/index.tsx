/** @format */

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

import { Gutter } from '../Gutter';
import { HeaderNav } from './Nav';

import classes from './index.module.scss';

export function Header() {
	return <header className={classes.header}></header>;
}

export default Header;
