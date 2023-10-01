export class AuthService {
  loggedIn = false;

  isAuthenticated() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(this.loggedIn);
      }, 1000);
    });
  }

  login() {
    this.loggedIn = true;
  }
  logOut() {
    this.loggedIn = false;
  }
}
