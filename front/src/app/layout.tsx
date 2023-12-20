import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import { ReactNode } from "react";

import "@/src/styles/globals.css";

export default async function RootLayout({
	children,
	modal
}: {
	children: ReactNode;
	modal: ReactNode;
}) {
	return (
		<html lang="en">
			<body className={`${GeistSans.variable} ${GeistMono.variable} font-sans`}>
				<header>Header</header>
				{children}
				{modal}
				<footer>Footer</footer>
			</body>
		</html>
	);
}
