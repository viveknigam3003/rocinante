/**
 * Validates the current user from the list of stored credentials
 * @param {{account: String, username: String, password: String}} currentUser
 * @param {Object} credentials
 */
function validateAccount(currentUser, credentials) {
  for (let i = 0; i < credentials.length; i++) {
    if (currentUser.account === credentials[i].account) return true;
  }

  return false;
}

/**
 * Checks if the current user passed the authentication
 * @param {{account: String, username: String, password: String}} currentUser
 * @param {[...{}, {account: String, server: String, status: number}]} attemptStatus
 */
function currentUserAuthenticated(currentUser, attemptStatus) {
  for (let i = 0; i < attemptStatus.length; i++) {
    if (
      currentUser.account === attemptStatus[i].account &&
      attemptStatus[i].status === 200
    )
      return true;
  }

  return false;
}

exports.validateAccount = validateAccount;
exports.currentUserAuthenticated = currentUserAuthenticated;
