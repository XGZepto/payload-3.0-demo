/** @format */

import { Header } from '../_components/Header';

import '../_css/app.scss';

export default async function AccountLayout(props: {
	children: React.ReactNode;
}) {
	const { children } = props;

	return (
		<div>
			<Header />
			<main>{children}</main>
		</div>
	);
}
