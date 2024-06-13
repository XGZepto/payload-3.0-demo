/** @format */

'use client';

import React from 'react';
import { useAuth } from '../../_providers/Auth';

import { Gutter } from '../Gutter';

import classes from './index.module.scss';

export function StatusBar() {
	const { user } = useAuth();
	console.log(user);

	return (
		<header className={classes.statusBar}>
			<div className={classes.greeting}>
				<p>
					Welcome back,
					<br /> {user?.displayName} 🧵
				</p>
			</div>
			<img className={classes.avatar} src='/defaultProfile.png' alt='' />
		</header>
	);
}

export default StatusBar;
