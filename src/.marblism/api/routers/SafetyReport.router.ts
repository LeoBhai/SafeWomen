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

        createMany: procedure.input($Schema.SafetyReportInputSchema.createMany).mutation(async ({ ctx, input }) => checkMutate(db(ctx).safetyReport.createMany(input as any))),

        create: procedure.input($Schema.SafetyReportInputSchema.create).mutation(async ({ ctx, input }) => checkMutate(db(ctx).safetyReport.create(input as any))),

        deleteMany: procedure.input($Schema.SafetyReportInputSchema.deleteMany).mutation(async ({ ctx, input }) => checkMutate(db(ctx).safetyReport.deleteMany(input as any))),

        delete: procedure.input($Schema.SafetyReportInputSchema.delete).mutation(async ({ ctx, input }) => checkMutate(db(ctx).safetyReport.delete(input as any))),

        findFirst: procedure.input($Schema.SafetyReportInputSchema.findFirst).query(({ ctx, input }) => checkRead(db(ctx).safetyReport.findFirst(input as any))),

        findMany: procedure.input($Schema.SafetyReportInputSchema.findMany).query(({ ctx, input }) => checkRead(db(ctx).safetyReport.findMany(input as any))),

        findUnique: procedure.input($Schema.SafetyReportInputSchema.findUnique).query(({ ctx, input }) => checkRead(db(ctx).safetyReport.findUnique(input as any))),

        updateMany: procedure.input($Schema.SafetyReportInputSchema.updateMany).mutation(async ({ ctx, input }) => checkMutate(db(ctx).safetyReport.updateMany(input as any))),

        update: procedure.input($Schema.SafetyReportInputSchema.update).mutation(async ({ ctx, input }) => checkMutate(db(ctx).safetyReport.update(input as any))),

    }
    );
}

export interface ClientType<AppRouter extends AnyRouter, Context = AppRouter['_def']['_config']['$types']['ctx']> {
    createMany: {

        useMutation: <T extends Prisma.SafetyReportCreateManyArgs>(opts?: UseTRPCMutationOptions<
            Prisma.SafetyReportCreateManyArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.BatchPayload,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.BatchPayload, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.SafetyReportCreateManyArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.SafetyReportCreateManyArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>) => Promise<Prisma.BatchPayload>
            };

    };
    create: {

        useMutation: <T extends Prisma.SafetyReportCreateArgs>(opts?: UseTRPCMutationOptions<
            Prisma.SafetyReportCreateArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.SafetyReportGetPayload<T>,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.SafetyReportGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.SafetyReportCreateArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.SafetyReportCreateArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.SafetyReportGetPayload<T>, Context>) => Promise<Prisma.SafetyReportGetPayload<T>>
            };

    };
    deleteMany: {

        useMutation: <T extends Prisma.SafetyReportDeleteManyArgs>(opts?: UseTRPCMutationOptions<
            Prisma.SafetyReportDeleteManyArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.BatchPayload,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.BatchPayload, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.SafetyReportDeleteManyArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.SafetyReportDeleteManyArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>) => Promise<Prisma.BatchPayload>
            };

    };
    delete: {

        useMutation: <T extends Prisma.SafetyReportDeleteArgs>(opts?: UseTRPCMutationOptions<
            Prisma.SafetyReportDeleteArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.SafetyReportGetPayload<T>,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.SafetyReportGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.SafetyReportDeleteArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.SafetyReportDeleteArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.SafetyReportGetPayload<T>, Context>) => Promise<Prisma.SafetyReportGetPayload<T>>
            };

    };
    findFirst: {

        useQuery: <T extends Prisma.SafetyReportFindFirstArgs, TData = Prisma.SafetyReportGetPayload<T>>(
            input: Prisma.SelectSubset<T, Prisma.SafetyReportFindFirstArgs>,
            opts?: UseTRPCQueryOptions<string, T, Prisma.SafetyReportGetPayload<T>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.SafetyReportFindFirstArgs>(
            input: Omit<Prisma.SelectSubset<T, Prisma.SafetyReportFindFirstArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Prisma.SafetyReportGetPayload<T>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Prisma.SafetyReportGetPayload<T>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    findMany: {

        useQuery: <T extends Prisma.SafetyReportFindManyArgs, TData = Array<Prisma.SafetyReportGetPayload<T>>>(
            input: Prisma.SelectSubset<T, Prisma.SafetyReportFindManyArgs>,
            opts?: UseTRPCQueryOptions<string, T, Array<Prisma.SafetyReportGetPayload<T>>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.SafetyReportFindManyArgs>(
            input: Omit<Prisma.SelectSubset<T, Prisma.SafetyReportFindManyArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Array<Prisma.SafetyReportGetPayload<T>>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Array<Prisma.SafetyReportGetPayload<T>>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    findUnique: {

        useQuery: <T extends Prisma.SafetyReportFindUniqueArgs, TData = Prisma.SafetyReportGetPayload<T>>(
            input: Prisma.SelectSubset<T, Prisma.SafetyReportFindUniqueArgs>,
            opts?: UseTRPCQueryOptions<string, T, Prisma.SafetyReportGetPayload<T>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.SafetyReportFindUniqueArgs>(
            input: Omit<Prisma.SelectSubset<T, Prisma.SafetyReportFindUniqueArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Prisma.SafetyReportGetPayload<T>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Prisma.SafetyReportGetPayload<T>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    updateMany: {

        useMutation: <T extends Prisma.SafetyReportUpdateManyArgs>(opts?: UseTRPCMutationOptions<
            Prisma.SafetyReportUpdateManyArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.BatchPayload,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.BatchPayload, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.SafetyReportUpdateManyArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.SafetyReportUpdateManyArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>) => Promise<Prisma.BatchPayload>
            };

    };
    update: {

        useMutation: <T extends Prisma.SafetyReportUpdateArgs>(opts?: UseTRPCMutationOptions<
            Prisma.SafetyReportUpdateArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.SafetyReportGetPayload<T>,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.SafetyReportGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.SafetyReportUpdateArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.SafetyReportUpdateArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.SafetyReportGetPayload<T>, Context>) => Promise<Prisma.SafetyReportGetPayload<T>>
            };

    };
}
