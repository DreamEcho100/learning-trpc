import * as trpc from '@trpc/server';
import { TMyContextType } from './context';

export const createRouter = () => trpc.router<TMyContextType>();
