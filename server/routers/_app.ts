import { createRouter } from '../create-router';
import { nameRouter } from './nameRouter';

export const appRouter = createRouter().merge('name.', nameRouter);

export type AppRouter = typeof appRouter;
