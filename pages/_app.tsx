import { withTRPC } from '@trpc/next';
import type { AppRouter } from './api/trpc/[trpc]';
import type { AppProps } from 'next/app';

import '../styles/globals.css';

function getBaseUrl() {
	if (process.browser || typeof window !== 'undefined') return '';
	if (process.env.VERCEL_URL) return `https://${process.env.VERCEL_URL}`;

	return `http://localhost:${process.env.PORT ?? 3000}`;
}

function MyApp({ Component, pageProps }: AppProps) {
	return <Component {...pageProps} />;
}

export default withTRPC<AppRouter>({
	config: ({ ctx }) => {
		const url = `${getBaseUrl()}/api/trpc`;

		return {
			url,
		};
	},
	ssr: true,
})(MyApp);
