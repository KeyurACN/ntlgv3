declare module 'userinfo_kk' {
    interface UserInfo {
      username: string;
      uid: string;
      platform: string;
      homedir: string;
    }
  
    export default function getUserInfo(): UserInfo;
  }
  