export const metadata = {
  title: "Rating System | User details",
  description: "Details about user",
};

import { UserProfile } from "@clerk/nextjs";

const UserProfilePage = () => <UserProfile href="/user" />;

export default UserProfilePage;
