interface IApi {
  baseUrl: string;
  user: string;
}

export const environment = {
  production: true,
  api: {
    baseUrl: 'https://api.github.com',
    user: 'users/zhangen69',
  },
  getReposUrl: () => {
    return `${environment.api.baseUrl}/${environment.api.user}/repos`;
  }
};
