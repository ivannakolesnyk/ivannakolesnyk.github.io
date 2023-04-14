export const isLoggedInAndNotAdmin = (loggedIn, getJwtPayload) =>
  loggedIn &&
  !getJwtPayload().roles.some((role) => role.authority === "ROLE_ADMIN");
export const isLoggedInAndAdmin = (loggedIn, getJwtPayload) =>
  loggedIn &&
  getJwtPayload().roles.some((role) => role.authority === "ROLE_ADMIN");
