import { createReactQueryHooks } from '@trpc/react';
import { AppRouter } from '../server/routers/_app';
import { inferProcedureOutput } from '@trpc/server';

export const trpc = createReactQueryHooks<AppRouter>();

export type inferQueryOutput<
	TRouteKey extends keyof AppRouter['_def']['queries']
> = inferProcedureOutput<AppRouter['_def']['queries'][TRouteKey]>;
