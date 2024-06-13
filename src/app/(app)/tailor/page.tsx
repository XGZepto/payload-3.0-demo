/** @format */
import { Gutter } from './_components/Gutter';
import { Logo } from './_components/Logo';
import { Button } from './_components/Button';
import classes from './landing.module.scss';

export default function Home() {
	return (
		<div>
			<div className={classes.logoAnimation}>
				<img className={classes.anim1} src='/favicon.png' />
				<img className={classes.anim2} src='/cimu_full_logo_text.png' />
				<img className={classes.anim3} src='/cimu_full_logo.png' />
			</div>
			<div className={classes.container}>
				<div className={classes.logoPadding}></div>
				<div className={classes.illustration}>
					<img src='/landing_illustration.png' alt='' />
				</div>
				<div className={classes.content}>
					<p>
						<b>Where tailors can easily connect with customers.</b>
					</p>
					<Button label='Continue' appearance='primary' href='/tailor/account/login' />
				</div>
			</div>
		</div>
	);
}
