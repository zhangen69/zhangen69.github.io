export const environment = {
  production: true,
  api: {
    baseUrl: 'https://api.github.com',
    user: 'users/zhangen69',
    token: '585295595f3c87518be8ca3812e8f0e5cd2caa17',
  },
  getReposUrl: () => {
    return `${environment.api.baseUrl}/${environment.api.user}/repos`;
  }
};
