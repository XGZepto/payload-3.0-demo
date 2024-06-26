/** @format */

import React from 'react';

import { Gutter } from '../../_components/Gutter';
import { RenderParams } from '../../_components/RenderParams';
import { getMeUser } from '../../_utilities/getMeUser';
import { LoginForm } from './LoginForm';

import classes from './index.module.scss';

export default async function Login() {
	await getMeUser({
		validUserRedirect: `/account?message=${encodeURIComponent(
			'You are already logged in.'
		)}`,
	});

	return (
		<Gutter className={classes.login}>
			<RenderParams className={classes.params} />
			<h3>Welcome back!</h3>
			<LoginForm />
		</Gutter>
	);
}
