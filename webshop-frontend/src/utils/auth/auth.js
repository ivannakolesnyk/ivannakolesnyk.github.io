/**
 * Return true if the user is logged in and isn't admin and false otherwise.
 *
 * @param loggedIn The state of the user, whether he is logged in or not.
 * @param getJwtPayload A function which returns the payload of a JWT.
 * @returns {boolean} true if the user is logged in and isn't admin and false otherwise.
 */
export const isLoggedInAndNotAdmin = (loggedIn, getJwtPayload) =>
  loggedIn &&
  !getJwtPayload().roles.some((role) => role.authority === "ROLE_ADMIN");

/**
 * Return true if the user is logged in and is admin and false otherwise.
 *
 * @param loggedIn The state of the user, whether he is logged in or not.
 * @param getJwtPayload A function which returns the payload of a JWT.
 * @returns {boolean} true if the user is logged in and is admin and false otherwise.
 */
export const isLoggedInAndAdmin = (loggedIn, getJwtPayload) =>
  loggedIn &&
  getJwtPayload().roles.some((role) => role.authority === "ROLE_ADMIN");
