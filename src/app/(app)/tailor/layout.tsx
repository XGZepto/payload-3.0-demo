/** @format */
import { AuthProvider } from './_providers/Auth';

import './_css/app.scss';

export default async function RootLayout(props: { children: React.ReactNode }) {
	const { children } = props;

	return (
		<html lang='en'>
			<body>
				<AuthProvider api='rest'>
					<main>{children}</main>
				</AuthProvider>
			</body>
		</html>
	);
}
