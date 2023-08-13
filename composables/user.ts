// export const useLogin = () => useState('useLogin', () => false);

export const useUser = defineStore('user', {
  state: () => ({
    isLogin: false,
  }),
})
