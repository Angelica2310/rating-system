export const metadata = {
  title: "User details",
  description: "Details about user",
};

import BackButton from "@/components/BackButton";
import { UserProfile } from "@clerk/nextjs";

export default function UserProfilePage() {
  return (
    <div className="flex flex-col items-center">
      <BackButton />
      <UserProfile href="/user" />
    </div>
  );
}
