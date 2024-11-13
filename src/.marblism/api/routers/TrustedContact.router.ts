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

        createMany: procedure.input($Schema.TrustedContactInputSchema.createMany).mutation(async ({ ctx, input }) => checkMutate(db(ctx).trustedContact.createMany(input as any))),

        create: procedure.input($Schema.TrustedContactInputSchema.create).mutation(async ({ ctx, input }) => checkMutate(db(ctx).trustedContact.create(input as any))),

        deleteMany: procedure.input($Schema.TrustedContactInputSchema.deleteMany).mutation(async ({ ctx, input }) => checkMutate(db(ctx).trustedContact.deleteMany(input as any))),

        delete: procedure.input($Schema.TrustedContactInputSchema.delete).mutation(async ({ ctx, input }) => checkMutate(db(ctx).trustedContact.delete(input as any))),

        findFirst: procedure.input($Schema.TrustedContactInputSchema.findFirst).query(({ ctx, input }) => checkRead(db(ctx).trustedContact.findFirst(input as any))),

        findMany: procedure.input($Schema.TrustedContactInputSchema.findMany).query(({ ctx, input }) => checkRead(db(ctx).trustedContact.findMany(input as any))),

        findUnique: procedure.input($Schema.TrustedContactInputSchema.findUnique).query(({ ctx, input }) => checkRead(db(ctx).trustedContact.findUnique(input as any))),

        updateMany: procedure.input($Schema.TrustedContactInputSchema.updateMany).mutation(async ({ ctx, input }) => checkMutate(db(ctx).trustedContact.updateMany(input as any))),

        update: procedure.input($Schema.TrustedContactInputSchema.update).mutation(async ({ ctx, input }) => checkMutate(db(ctx).trustedContact.update(input as any))),

    }
    );
}

export interface ClientType<AppRouter extends AnyRouter, Context = AppRouter['_def']['_config']['$types']['ctx']> {
    createMany: {

        useMutation: <T extends Prisma.TrustedContactCreateManyArgs>(opts?: UseTRPCMutationOptions<
            Prisma.TrustedContactCreateManyArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.BatchPayload,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.BatchPayload, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.TrustedContactCreateManyArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.TrustedContactCreateManyArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>) => Promise<Prisma.BatchPayload>
            };

    };
    create: {

        useMutation: <T extends Prisma.TrustedContactCreateArgs>(opts?: UseTRPCMutationOptions<
            Prisma.TrustedContactCreateArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.TrustedContactGetPayload<T>,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.TrustedContactGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.TrustedContactCreateArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.TrustedContactCreateArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.TrustedContactGetPayload<T>, Context>) => Promise<Prisma.TrustedContactGetPayload<T>>
            };

    };
    deleteMany: {

        useMutation: <T extends Prisma.TrustedContactDeleteManyArgs>(opts?: UseTRPCMutationOptions<
            Prisma.TrustedContactDeleteManyArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.BatchPayload,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.BatchPayload, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.TrustedContactDeleteManyArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.TrustedContactDeleteManyArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>) => Promise<Prisma.BatchPayload>
            };

    };
    delete: {

        useMutation: <T extends Prisma.TrustedContactDeleteArgs>(opts?: UseTRPCMutationOptions<
            Prisma.TrustedContactDeleteArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.TrustedContactGetPayload<T>,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.TrustedContactGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.TrustedContactDeleteArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.TrustedContactDeleteArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.TrustedContactGetPayload<T>, Context>) => Promise<Prisma.TrustedContactGetPayload<T>>
            };

    };
    findFirst: {

        useQuery: <T extends Prisma.TrustedContactFindFirstArgs, TData = Prisma.TrustedContactGetPayload<T>>(
            input: Prisma.SelectSubset<T, Prisma.TrustedContactFindFirstArgs>,
            opts?: UseTRPCQueryOptions<string, T, Prisma.TrustedContactGetPayload<T>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.TrustedContactFindFirstArgs>(
            input: Omit<Prisma.SelectSubset<T, Prisma.TrustedContactFindFirstArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Prisma.TrustedContactGetPayload<T>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Prisma.TrustedContactGetPayload<T>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    findMany: {

        useQuery: <T extends Prisma.TrustedContactFindManyArgs, TData = Array<Prisma.TrustedContactGetPayload<T>>>(
            input: Prisma.SelectSubset<T, Prisma.TrustedContactFindManyArgs>,
            opts?: UseTRPCQueryOptions<string, T, Array<Prisma.TrustedContactGetPayload<T>>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.TrustedContactFindManyArgs>(
            input: Omit<Prisma.SelectSubset<T, Prisma.TrustedContactFindManyArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Array<Prisma.TrustedContactGetPayload<T>>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Array<Prisma.TrustedContactGetPayload<T>>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    findUnique: {

        useQuery: <T extends Prisma.TrustedContactFindUniqueArgs, TData = Prisma.TrustedContactGetPayload<T>>(
            input: Prisma.SelectSubset<T, Prisma.TrustedContactFindUniqueArgs>,
            opts?: UseTRPCQueryOptions<string, T, Prisma.TrustedContactGetPayload<T>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.TrustedContactFindUniqueArgs>(
            input: Omit<Prisma.SelectSubset<T, Prisma.TrustedContactFindUniqueArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Prisma.TrustedContactGetPayload<T>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Prisma.TrustedContactGetPayload<T>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    updateMany: {

        useMutation: <T extends Prisma.TrustedContactUpdateManyArgs>(opts?: UseTRPCMutationOptions<
            Prisma.TrustedContactUpdateManyArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.BatchPayload,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.BatchPayload, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.TrustedContactUpdateManyArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.TrustedContactUpdateManyArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>) => Promise<Prisma.BatchPayload>
            };

    };
    update: {

        useMutation: <T extends Prisma.TrustedContactUpdateArgs>(opts?: UseTRPCMutationOptions<
            Prisma.TrustedContactUpdateArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.TrustedContactGetPayload<T>,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.TrustedContactGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.TrustedContactUpdateArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.TrustedContactUpdateArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.TrustedContactGetPayload<T>, Context>) => Promise<Prisma.TrustedContactGetPayload<T>>
            };

    };
}
