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
	// responseMeta({ clientErrors, ctx }) {
	//   if (clientErrors.length) {
	//     // propagate first http error from API calls
	//     return {
	//       status: clientErrors[0].data?.httpStatus ?? 500,
	//     };
	//   }
	//   // cache full page for 1 day + revalidate once every second
	//   const ONE_DAY_IN_SECONDS = 60 * 60 * 24;
	//   return {
	//     'Cache-Control': `s-maxage=1, stale-while-revalidate=${ONE_DAY_IN_SECONDS}`,
	//   };
	// },
})(MyApp);
