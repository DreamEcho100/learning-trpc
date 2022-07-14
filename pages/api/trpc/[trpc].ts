import { createNextApiHandler } from '@trpc/server/adapters/next';
import { createContext } from '../../../server/context';
import { appRouter } from '../../../server/router/_app';

export default createNextApiHandler({
	router: appRouter,
	createContext,
	batching: {
		enabled: true,
	},
});
