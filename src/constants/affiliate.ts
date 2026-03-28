/** Deriv affiliate tracking link — override with env `AFFILIATE_SIGNUP_URL` at build time if needed. */
const DEFAULT_AFFILIATE = 'https://track.deriv.com/_XMJPJ_eTr4jUC5-fI8wshmNd7ZgqdRLk/1/';

export const AFFILIATE_SIGNUP_URL = process.env.AFFILIATE_SIGNUP_URL?.trim() || DEFAULT_AFFILIATE;
