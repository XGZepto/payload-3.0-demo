/** @format */

import classes from './index.module.scss';

export const Logo: React.FC<{}> = () => {
	return (
		<div className={classes.logoWrapper}>
			<img src='/cimu_full_logo.png' />
		</div>
	);
};
