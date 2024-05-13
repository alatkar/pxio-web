/**
 * array of routes are accessible to public. 
 * These routes don't require login
 * @type {string[]}
 */
export const publicRoutes = [
  "/"
]

/**
 * array of routes are used for authintication. 
 * These routes will redirect logged in user to /rfps
 * @type {string[]}
 */
export const authRoutes = [
  "/login",
  "/register"
]
/**
 * The prefix for API authentication routes
 * Routes that start with this prefix are used for API authentication purposes
 * Always allowed routes
 * @type {string}
 */
export const apiAuthPrefix = "/api/auth"

/**
 * Login users will be redirected to this route
 * @type {string}
 */
export const DEFAULT_LOGIN_REDIRECT = "/rfps"