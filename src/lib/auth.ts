import {betterAuth} from 'better-auth'

export const auth = betterAuth({
    appName: 'Next.js 15 blog',
    secret: process.env.BETTER_ATH_SECRET || 'BETTER_AUTH_SECRET',
    baseURL: process.env.BASE_URL,
    emailAndPassword: {
        enabled: true,
        requireEmailVerification: false,
        minPasswordLength: 6,
        maxPasswordLength: 128,
        autoSignIn: false
    },
    session: {
        expiresIn: 60 * 60 * 24 * 7,
        updateAge: 60 * 60 * 24,
        cookieCache: {
            enabled: true,
            maxAge: 60 * 5
        },
        disableSessionRefresh: true,
        
    }
})