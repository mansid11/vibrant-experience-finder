
import React from 'react';
import Navbar from '@/components/layout/Navbar';
import BottomNav from '@/components/layout/BottomNav';
import UserProfile from '@/components/profile/UserProfile';

const ProfilePage = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <UserProfile />
      <BottomNav />
    </div>
  );
};

export default ProfilePage;
