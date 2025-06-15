import {betterAuth} from 'better-auth'

export const auth = betterAuth({
    appName: 'Next.js 15 blog',
    secret: process.env.BETTER_ATH_SECRET || 'BETTER_AUTH_SECRET'
})