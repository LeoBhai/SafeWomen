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

        createMany: procedure.input($Schema.EmergencyAlertInputSchema.createMany).mutation(async ({ ctx, input }) => checkMutate(db(ctx).emergencyAlert.createMany(input as any))),

        create: procedure.input($Schema.EmergencyAlertInputSchema.create).mutation(async ({ ctx, input }) => checkMutate(db(ctx).emergencyAlert.create(input as any))),

        deleteMany: procedure.input($Schema.EmergencyAlertInputSchema.deleteMany).mutation(async ({ ctx, input }) => checkMutate(db(ctx).emergencyAlert.deleteMany(input as any))),

        delete: procedure.input($Schema.EmergencyAlertInputSchema.delete).mutation(async ({ ctx, input }) => checkMutate(db(ctx).emergencyAlert.delete(input as any))),

        findFirst: procedure.input($Schema.EmergencyAlertInputSchema.findFirst).query(({ ctx, input }) => checkRead(db(ctx).emergencyAlert.findFirst(input as any))),

        findMany: procedure.input($Schema.EmergencyAlertInputSchema.findMany).query(({ ctx, input }) => checkRead(db(ctx).emergencyAlert.findMany(input as any))),

        findUnique: procedure.input($Schema.EmergencyAlertInputSchema.findUnique).query(({ ctx, input }) => checkRead(db(ctx).emergencyAlert.findUnique(input as any))),

        updateMany: procedure.input($Schema.EmergencyAlertInputSchema.updateMany).mutation(async ({ ctx, input }) => checkMutate(db(ctx).emergencyAlert.updateMany(input as any))),

        update: procedure.input($Schema.EmergencyAlertInputSchema.update).mutation(async ({ ctx, input }) => checkMutate(db(ctx).emergencyAlert.update(input as any))),

    }
    );
}

export interface ClientType<AppRouter extends AnyRouter, Context = AppRouter['_def']['_config']['$types']['ctx']> {
    createMany: {

        useMutation: <T extends Prisma.EmergencyAlertCreateManyArgs>(opts?: UseTRPCMutationOptions<
            Prisma.EmergencyAlertCreateManyArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.BatchPayload,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.BatchPayload, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.EmergencyAlertCreateManyArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.EmergencyAlertCreateManyArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>) => Promise<Prisma.BatchPayload>
            };

    };
    create: {

        useMutation: <T extends Prisma.EmergencyAlertCreateArgs>(opts?: UseTRPCMutationOptions<
            Prisma.EmergencyAlertCreateArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.EmergencyAlertGetPayload<T>,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.EmergencyAlertGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.EmergencyAlertCreateArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.EmergencyAlertCreateArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.EmergencyAlertGetPayload<T>, Context>) => Promise<Prisma.EmergencyAlertGetPayload<T>>
            };

    };
    deleteMany: {

        useMutation: <T extends Prisma.EmergencyAlertDeleteManyArgs>(opts?: UseTRPCMutationOptions<
            Prisma.EmergencyAlertDeleteManyArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.BatchPayload,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.BatchPayload, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.EmergencyAlertDeleteManyArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.EmergencyAlertDeleteManyArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>) => Promise<Prisma.BatchPayload>
            };

    };
    delete: {

        useMutation: <T extends Prisma.EmergencyAlertDeleteArgs>(opts?: UseTRPCMutationOptions<
            Prisma.EmergencyAlertDeleteArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.EmergencyAlertGetPayload<T>,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.EmergencyAlertGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.EmergencyAlertDeleteArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.EmergencyAlertDeleteArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.EmergencyAlertGetPayload<T>, Context>) => Promise<Prisma.EmergencyAlertGetPayload<T>>
            };

    };
    findFirst: {

        useQuery: <T extends Prisma.EmergencyAlertFindFirstArgs, TData = Prisma.EmergencyAlertGetPayload<T>>(
            input: Prisma.SelectSubset<T, Prisma.EmergencyAlertFindFirstArgs>,
            opts?: UseTRPCQueryOptions<string, T, Prisma.EmergencyAlertGetPayload<T>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.EmergencyAlertFindFirstArgs>(
            input: Omit<Prisma.SelectSubset<T, Prisma.EmergencyAlertFindFirstArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Prisma.EmergencyAlertGetPayload<T>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Prisma.EmergencyAlertGetPayload<T>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    findMany: {

        useQuery: <T extends Prisma.EmergencyAlertFindManyArgs, TData = Array<Prisma.EmergencyAlertGetPayload<T>>>(
            input: Prisma.SelectSubset<T, Prisma.EmergencyAlertFindManyArgs>,
            opts?: UseTRPCQueryOptions<string, T, Array<Prisma.EmergencyAlertGetPayload<T>>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.EmergencyAlertFindManyArgs>(
            input: Omit<Prisma.SelectSubset<T, Prisma.EmergencyAlertFindManyArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Array<Prisma.EmergencyAlertGetPayload<T>>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Array<Prisma.EmergencyAlertGetPayload<T>>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    findUnique: {

        useQuery: <T extends Prisma.EmergencyAlertFindUniqueArgs, TData = Prisma.EmergencyAlertGetPayload<T>>(
            input: Prisma.SelectSubset<T, Prisma.EmergencyAlertFindUniqueArgs>,
            opts?: UseTRPCQueryOptions<string, T, Prisma.EmergencyAlertGetPayload<T>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.EmergencyAlertFindUniqueArgs>(
            input: Omit<Prisma.SelectSubset<T, Prisma.EmergencyAlertFindUniqueArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Prisma.EmergencyAlertGetPayload<T>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Prisma.EmergencyAlertGetPayload<T>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    updateMany: {

        useMutation: <T extends Prisma.EmergencyAlertUpdateManyArgs>(opts?: UseTRPCMutationOptions<
            Prisma.EmergencyAlertUpdateManyArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.BatchPayload,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.BatchPayload, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.EmergencyAlertUpdateManyArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.EmergencyAlertUpdateManyArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>) => Promise<Prisma.BatchPayload>
            };

    };
    update: {

        useMutation: <T extends Prisma.EmergencyAlertUpdateArgs>(opts?: UseTRPCMutationOptions<
            Prisma.EmergencyAlertUpdateArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.EmergencyAlertGetPayload<T>,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.EmergencyAlertGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.EmergencyAlertUpdateArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.EmergencyAlertUpdateArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.EmergencyAlertGetPayload<T>, Context>) => Promise<Prisma.EmergencyAlertGetPayload<T>>
            };

    };
}
