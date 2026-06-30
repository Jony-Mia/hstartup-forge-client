import { createAuthClient } from "better-auth/react"
export const authClient = createAuthClient({
    /** The base URL of the server (optional if you're using the same domain) */
    baseURL: "https://startup-forge-vert.vercel.app" || "http://localhost:3000"
})

export const { signIn, signUp, useSession } = createAuthClient()