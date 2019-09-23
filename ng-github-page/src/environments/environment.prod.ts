export const environment = {
  production: true,
  api: {
    baseUrl: 'https://api.github.com',
    user: 'users/zhangen69',
    token: '72ebcd5d0e5524bf43a5a6ae8fe218c73c145b0e',
  },
  getReposUrl: () => {
    return `${environment.api.baseUrl}/${environment.api.user}/repos`;
  }
};
