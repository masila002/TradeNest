/** Public marketing landing (no login required). */
export const PATH_LANDING = '/';

/** Bot builder & dashboard (OAuth runs from layout when appropriate). */
export const PATH_DASHBOARD = '/dashboard';

export const PATH_OAUTH_CALLBACK = '/callback';

export const PATH_ENDPOINT = '/endpoint';

export function getOAuthCallbackUri(): string {
    return `${window.location.origin}${PATH_OAUTH_CALLBACK}`;
}

export function getDashboardUrlWithAccount(account: string): string {
    const q = new URLSearchParams({ account });
    return `${window.location.origin}${PATH_DASHBOARD}?${q.toString()}`;
}
