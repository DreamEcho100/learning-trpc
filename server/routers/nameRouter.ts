import { z } from 'zod';
import { createRouter } from '../create-router';
// import { appRouter } from './_app';

export const nameRouter = createRouter().query('getName', {
	input: z.object({
		name: z.string().nullish(),
	}),
	resolve: ({ input }) => {
		return { greeting: `Hello ${input.name}` };
	},
});
// .query('nameById/[id]', {
// 	input: z.object({
// 		name: z.string().nullish(),
// 	}),
// 	resolve: ({ input }) => {
// 		return { greeting: `Hello ${input.name}` };
// 	},
// });
