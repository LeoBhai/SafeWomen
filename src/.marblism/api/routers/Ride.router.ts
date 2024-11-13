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

        createMany: procedure.input($Schema.RideInputSchema.createMany).mutation(async ({ ctx, input }) => checkMutate(db(ctx).ride.createMany(input as any))),

        create: procedure.input($Schema.RideInputSchema.create).mutation(async ({ ctx, input }) => checkMutate(db(ctx).ride.create(input as any))),

        deleteMany: procedure.input($Schema.RideInputSchema.deleteMany).mutation(async ({ ctx, input }) => checkMutate(db(ctx).ride.deleteMany(input as any))),

        delete: procedure.input($Schema.RideInputSchema.delete).mutation(async ({ ctx, input }) => checkMutate(db(ctx).ride.delete(input as any))),

        findFirst: procedure.input($Schema.RideInputSchema.findFirst).query(({ ctx, input }) => checkRead(db(ctx).ride.findFirst(input as any))),

        findMany: procedure.input($Schema.RideInputSchema.findMany).query(({ ctx, input }) => checkRead(db(ctx).ride.findMany(input as any))),

        findUnique: procedure.input($Schema.RideInputSchema.findUnique).query(({ ctx, input }) => checkRead(db(ctx).ride.findUnique(input as any))),

        updateMany: procedure.input($Schema.RideInputSchema.updateMany).mutation(async ({ ctx, input }) => checkMutate(db(ctx).ride.updateMany(input as any))),

        update: procedure.input($Schema.RideInputSchema.update).mutation(async ({ ctx, input }) => checkMutate(db(ctx).ride.update(input as any))),

    }
    );
}

export interface ClientType<AppRouter extends AnyRouter, Context = AppRouter['_def']['_config']['$types']['ctx']> {
    createMany: {

        useMutation: <T extends Prisma.RideCreateManyArgs>(opts?: UseTRPCMutationOptions<
            Prisma.RideCreateManyArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.BatchPayload,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.BatchPayload, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.RideCreateManyArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.RideCreateManyArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>) => Promise<Prisma.BatchPayload>
            };

    };
    create: {

        useMutation: <T extends Prisma.RideCreateArgs>(opts?: UseTRPCMutationOptions<
            Prisma.RideCreateArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.RideGetPayload<T>,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.RideGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.RideCreateArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.RideCreateArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.RideGetPayload<T>, Context>) => Promise<Prisma.RideGetPayload<T>>
            };

    };
    deleteMany: {

        useMutation: <T extends Prisma.RideDeleteManyArgs>(opts?: UseTRPCMutationOptions<
            Prisma.RideDeleteManyArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.BatchPayload,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.BatchPayload, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.RideDeleteManyArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.RideDeleteManyArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>) => Promise<Prisma.BatchPayload>
            };

    };
    delete: {

        useMutation: <T extends Prisma.RideDeleteArgs>(opts?: UseTRPCMutationOptions<
            Prisma.RideDeleteArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.RideGetPayload<T>,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.RideGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.RideDeleteArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.RideDeleteArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.RideGetPayload<T>, Context>) => Promise<Prisma.RideGetPayload<T>>
            };

    };
    findFirst: {

        useQuery: <T extends Prisma.RideFindFirstArgs, TData = Prisma.RideGetPayload<T>>(
            input: Prisma.SelectSubset<T, Prisma.RideFindFirstArgs>,
            opts?: UseTRPCQueryOptions<string, T, Prisma.RideGetPayload<T>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.RideFindFirstArgs>(
            input: Omit<Prisma.SelectSubset<T, Prisma.RideFindFirstArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Prisma.RideGetPayload<T>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Prisma.RideGetPayload<T>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    findMany: {

        useQuery: <T extends Prisma.RideFindManyArgs, TData = Array<Prisma.RideGetPayload<T>>>(
            input: Prisma.SelectSubset<T, Prisma.RideFindManyArgs>,
            opts?: UseTRPCQueryOptions<string, T, Array<Prisma.RideGetPayload<T>>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.RideFindManyArgs>(
            input: Omit<Prisma.SelectSubset<T, Prisma.RideFindManyArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Array<Prisma.RideGetPayload<T>>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Array<Prisma.RideGetPayload<T>>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    findUnique: {

        useQuery: <T extends Prisma.RideFindUniqueArgs, TData = Prisma.RideGetPayload<T>>(
            input: Prisma.SelectSubset<T, Prisma.RideFindUniqueArgs>,
            opts?: UseTRPCQueryOptions<string, T, Prisma.RideGetPayload<T>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.RideFindUniqueArgs>(
            input: Omit<Prisma.SelectSubset<T, Prisma.RideFindUniqueArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Prisma.RideGetPayload<T>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Prisma.RideGetPayload<T>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    updateMany: {

        useMutation: <T extends Prisma.RideUpdateManyArgs>(opts?: UseTRPCMutationOptions<
            Prisma.RideUpdateManyArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.BatchPayload,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.BatchPayload, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.RideUpdateManyArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.RideUpdateManyArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>) => Promise<Prisma.BatchPayload>
            };

    };
    update: {

        useMutation: <T extends Prisma.RideUpdateArgs>(opts?: UseTRPCMutationOptions<
            Prisma.RideUpdateArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.RideGetPayload<T>,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.RideGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.RideUpdateArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.RideUpdateArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.RideGetPayload<T>, Context>) => Promise<Prisma.RideGetPayload<T>>
            };

    };
}
