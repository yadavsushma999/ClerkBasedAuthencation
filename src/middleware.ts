import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";

const isPublicRoute = createRouteMatcher([
    "/",
    "/auth(.*)",
    "/portal(.*)",
    "/images(.*)"
]);

const isIgnoredRoute = createRouteMatcher([
    "/chatbot"
]);

export default clerkMiddleware(async (auth, req) => {
    if (isPublicRoute(req)) return; // Allow public access
    if (isIgnoredRoute(req)) return; // Skip Clerk

    //const { userId } = await auth();

    // If user not authenticated, Clerk will auto-redirect
    //if (!userId) {
       // return new Response("Unauthorized", { status: 401 });
   // }

    // Authenticated: allow request to continue
});

export const config = {
    matcher: [
        // Skip Next.js internals and static assets
        '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
        // Always run for API/trpc routes
        '/(api|trpc)(.*)',
    ],
};
