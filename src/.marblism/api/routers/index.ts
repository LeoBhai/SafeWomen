/* eslint-disable */
import type { unsetMarker, AnyRouter, AnyRootConfig, CreateRouterInner, Procedure, ProcedureBuilder, ProcedureParams, ProcedureRouterRecord, ProcedureType } from "@trpc/server";
import type { PrismaClient } from "@prisma/client";
import createTrustedContactRouter from "./TrustedContact.router";
import createRideRouter from "./Ride.router";
import createLocationTrackRouter from "./LocationTrack.router";
import createSafetyReportRouter from "./SafetyReport.router";
import createEmergencyAlertRouter from "./EmergencyAlert.router";
import createOrganizationRouter from "./Organization.router";
import createOrganizationRoleRouter from "./OrganizationRole.router";
import createUserRouter from "./User.router";
import createPushNotificationRouter from "./PushNotification.router";
import createAccountRouter from "./Account.router";
import createSessionRouter from "./Session.router";
import { ClientType as TrustedContactClientType } from "./TrustedContact.router";
import { ClientType as RideClientType } from "./Ride.router";
import { ClientType as LocationTrackClientType } from "./LocationTrack.router";
import { ClientType as SafetyReportClientType } from "./SafetyReport.router";
import { ClientType as EmergencyAlertClientType } from "./EmergencyAlert.router";
import { ClientType as OrganizationClientType } from "./Organization.router";
import { ClientType as OrganizationRoleClientType } from "./OrganizationRole.router";
import { ClientType as UserClientType } from "./User.router";
import { ClientType as PushNotificationClientType } from "./PushNotification.router";
import { ClientType as AccountClientType } from "./Account.router";
import { ClientType as SessionClientType } from "./Session.router";

export type BaseConfig = AnyRootConfig;

export type RouterFactory<Config extends BaseConfig> = <
    ProcRouterRecord extends ProcedureRouterRecord
>(
    procedures: ProcRouterRecord
) => CreateRouterInner<Config, ProcRouterRecord>;

export type UnsetMarker = typeof unsetMarker;

export type ProcBuilder<Config extends BaseConfig> = ProcedureBuilder<
    ProcedureParams<Config, any, any, any, UnsetMarker, UnsetMarker, any>
>;

export function db(ctx: any) {
    if (!ctx.prisma) {
        throw new Error('Missing "prisma" field in trpc context');
    }
    return ctx.prisma as PrismaClient;
}

export function createRouter<Config extends BaseConfig>(router: RouterFactory<Config>, procedure: ProcBuilder<Config>) {
    return router({
        trustedContact: createTrustedContactRouter(router, procedure),
        ride: createRideRouter(router, procedure),
        locationTrack: createLocationTrackRouter(router, procedure),
        safetyReport: createSafetyReportRouter(router, procedure),
        emergencyAlert: createEmergencyAlertRouter(router, procedure),
        organization: createOrganizationRouter(router, procedure),
        organizationRole: createOrganizationRoleRouter(router, procedure),
        user: createUserRouter(router, procedure),
        pushNotification: createPushNotificationRouter(router, procedure),
        account: createAccountRouter(router, procedure),
        session: createSessionRouter(router, procedure),
    }
    );
}

export interface ClientType<AppRouter extends AnyRouter> {
    trustedContact: TrustedContactClientType<AppRouter>;
    ride: RideClientType<AppRouter>;
    locationTrack: LocationTrackClientType<AppRouter>;
    safetyReport: SafetyReportClientType<AppRouter>;
    emergencyAlert: EmergencyAlertClientType<AppRouter>;
    organization: OrganizationClientType<AppRouter>;
    organizationRole: OrganizationRoleClientType<AppRouter>;
    user: UserClientType<AppRouter>;
    pushNotification: PushNotificationClientType<AppRouter>;
    account: AccountClientType<AppRouter>;
    session: SessionClientType<AppRouter>;
}
