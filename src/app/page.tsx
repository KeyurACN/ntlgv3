// src/app/page.tsx
import React from 'react';
// const getUserInfo = require('userinfo_kk'); // Import your npm package
import getUserInfo from 'userinfo_kk';

// Define TypeScript types for the user info
interface UserInfo {
  username: string;
  uid: string;
  platform: string;
  homedir: string;
}

// Server Component (in `/app` directory)
const Home = async () => {
  const userInfo: UserInfo = getUserInfo(); // Fetch server-side info using your npm package

  return (
    <div>
      <h1>User Info</h1>
      <p>Username: {userInfo.username}</p>
      <p>UID: {userInfo.uid}</p>
      <p>Platform: {userInfo.platform}</p>
      <p>Home Directory: {userInfo.homedir}</p>
    </div>
  );
};

export default Home;
