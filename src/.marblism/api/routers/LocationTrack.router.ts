/* eslint-disable */
import { type RouterFactory, type ProcBuilder, type BaseConfig, db } from ".";
import * as _Schema from '@zenstackhq/runtime/zod/input';
const $Schema: typeof _Schema = (_Schema as any).default ?? _Schema;
import { checkRead, checkMutate } from '../helper';
import type { Prisma } from '@prisma/client';
import type { UseTRPCMutationOptions, UseTRPCMutationResult, UseTRPCQueryOptions, UseTRPCQueryResult, UseTRPCInfiniteQueryOptions, UseTRPCInfiniteQueryResult } from '@trpc/react-query/shared';
import type { TRPCClientErrorLike } from '@trpc/client';
import type { AnyRouter } from '@trpc/server';

export default function createRouter<Config extends BaseConfig>(router: RouterFactory<Config>, procedure: ProcBuilder<Config>) {
    return router({

        createMany: procedure.input($Schema.LocationTrackInputSchema.createMany).mutation(async ({ ctx, input }) => checkMutate(db(ctx).locationTrack.createMany(input as any))),

        create: procedure.input($Schema.LocationTrackInputSchema.create).mutation(async ({ ctx, input }) => checkMutate(db(ctx).locationTrack.create(input as any))),

        deleteMany: procedure.input($Schema.LocationTrackInputSchema.deleteMany).mutation(async ({ ctx, input }) => checkMutate(db(ctx).locationTrack.deleteMany(input as any))),

        delete: procedure.input($Schema.LocationTrackInputSchema.delete).mutation(async ({ ctx, input }) => checkMutate(db(ctx).locationTrack.delete(input as any))),

        findFirst: procedure.input($Schema.LocationTrackInputSchema.findFirst).query(({ ctx, input }) => checkRead(db(ctx).locationTrack.findFirst(input as any))),

        findMany: procedure.input($Schema.LocationTrackInputSchema.findMany).query(({ ctx, input }) => checkRead(db(ctx).locationTrack.findMany(input as any))),

        findUnique: procedure.input($Schema.LocationTrackInputSchema.findUnique).query(({ ctx, input }) => checkRead(db(ctx).locationTrack.findUnique(input as any))),

        updateMany: procedure.input($Schema.LocationTrackInputSchema.updateMany).mutation(async ({ ctx, input }) => checkMutate(db(ctx).locationTrack.updateMany(input as any))),

        update: procedure.input($Schema.LocationTrackInputSchema.update).mutation(async ({ ctx, input }) => checkMutate(db(ctx).locationTrack.update(input as any))),

    }
    );
}

export interface ClientType<AppRouter extends AnyRouter, Context = AppRouter['_def']['_config']['$types']['ctx']> {
    createMany: {

        useMutation: <T extends Prisma.LocationTrackCreateManyArgs>(opts?: UseTRPCMutationOptions<
            Prisma.LocationTrackCreateManyArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.BatchPayload,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.BatchPayload, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.LocationTrackCreateManyArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.LocationTrackCreateManyArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>) => Promise<Prisma.BatchPayload>
            };

    };
    create: {

        useMutation: <T extends Prisma.LocationTrackCreateArgs>(opts?: UseTRPCMutationOptions<
            Prisma.LocationTrackCreateArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.LocationTrackGetPayload<T>,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.LocationTrackGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.LocationTrackCreateArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.LocationTrackCreateArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.LocationTrackGetPayload<T>, Context>) => Promise<Prisma.LocationTrackGetPayload<T>>
            };

    };
    deleteMany: {

        useMutation: <T extends Prisma.LocationTrackDeleteManyArgs>(opts?: UseTRPCMutationOptions<
            Prisma.LocationTrackDeleteManyArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.BatchPayload,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.BatchPayload, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.LocationTrackDeleteManyArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.LocationTrackDeleteManyArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>) => Promise<Prisma.BatchPayload>
            };

    };
    delete: {

        useMutation: <T extends Prisma.LocationTrackDeleteArgs>(opts?: UseTRPCMutationOptions<
            Prisma.LocationTrackDeleteArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.LocationTrackGetPayload<T>,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.LocationTrackGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.LocationTrackDeleteArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.LocationTrackDeleteArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.LocationTrackGetPayload<T>, Context>) => Promise<Prisma.LocationTrackGetPayload<T>>
            };

    };
    findFirst: {

        useQuery: <T extends Prisma.LocationTrackFindFirstArgs, TData = Prisma.LocationTrackGetPayload<T>>(
            input: Prisma.SelectSubset<T, Prisma.LocationTrackFindFirstArgs>,
            opts?: UseTRPCQueryOptions<string, T, Prisma.LocationTrackGetPayload<T>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.LocationTrackFindFirstArgs>(
            input: Omit<Prisma.SelectSubset<T, Prisma.LocationTrackFindFirstArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Prisma.LocationTrackGetPayload<T>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Prisma.LocationTrackGetPayload<T>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    findMany: {

        useQuery: <T extends Prisma.LocationTrackFindManyArgs, TData = Array<Prisma.LocationTrackGetPayload<T>>>(
            input: Prisma.SelectSubset<T, Prisma.LocationTrackFindManyArgs>,
            opts?: UseTRPCQueryOptions<string, T, Array<Prisma.LocationTrackGetPayload<T>>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.LocationTrackFindManyArgs>(
            input: Omit<Prisma.SelectSubset<T, Prisma.LocationTrackFindManyArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Array<Prisma.LocationTrackGetPayload<T>>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Array<Prisma.LocationTrackGetPayload<T>>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    findUnique: {

        useQuery: <T extends Prisma.LocationTrackFindUniqueArgs, TData = Prisma.LocationTrackGetPayload<T>>(
            input: Prisma.SelectSubset<T, Prisma.LocationTrackFindUniqueArgs>,
            opts?: UseTRPCQueryOptions<string, T, Prisma.LocationTrackGetPayload<T>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.LocationTrackFindUniqueArgs>(
            input: Omit<Prisma.SelectSubset<T, Prisma.LocationTrackFindUniqueArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Prisma.LocationTrackGetPayload<T>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Prisma.LocationTrackGetPayload<T>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    updateMany: {

        useMutation: <T extends Prisma.LocationTrackUpdateManyArgs>(opts?: UseTRPCMutationOptions<
            Prisma.LocationTrackUpdateManyArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.BatchPayload,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.BatchPayload, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.LocationTrackUpdateManyArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.LocationTrackUpdateManyArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>) => Promise<Prisma.BatchPayload>
            };

    };
    update: {

        useMutation: <T extends Prisma.LocationTrackUpdateArgs>(opts?: UseTRPCMutationOptions<
            Prisma.LocationTrackUpdateArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.LocationTrackGetPayload<T>,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.LocationTrackGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.LocationTrackUpdateArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.LocationTrackUpdateArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.LocationTrackGetPayload<T>, Context>) => Promise<Prisma.LocationTrackGetPayload<T>>
            };

    };
}
