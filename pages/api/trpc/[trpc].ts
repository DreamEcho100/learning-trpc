// import { createNextApiHandler } from '@trpc/server/adapters/next';
import * as trpcNext from '@trpc/server/adapters/next';
import { createContext } from '../../../server/context';
export type { AppRouter } from '../../../server/routers/_app';
import { appRouter } from '../../../server/routers/_app';

export default trpcNext.createNextApiHandler({
	router: appRouter,
	createContext,
	batching: {
		enabled: true,
	},
});
