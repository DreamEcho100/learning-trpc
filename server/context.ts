import { inferAsyncReturnType } from '@trpc/server';
import { CreateNextContextOptions } from '@trpc/server/adapters/next';

export const createContext = async (
	createOptions?: CreateNextContextOptions
) => {
	const req = createOptions?.req;
	const res = createOptions?.res;

	return {
		req,
		res,
	};
};

export type TMyContextType = inferAsyncReturnType<typeof createContext>;
