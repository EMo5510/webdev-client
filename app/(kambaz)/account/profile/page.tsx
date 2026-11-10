"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useAccountContext, type User } from "../AccountContext";

// users.json has no dob yet, so it's optional here
type Profile = User;

export default function Profile() {
  const { currentUser, setCurrentUser } = useAccountContext();
  const [profile, setProfile] = useState<Profile | null>(currentUser);
  const router = useRouter();

  useEffect(() => {
    if (!currentUser) router.push("/account/signin");
  }, [currentUser, router]);

  const signout = () => {
    setCurrentUser(null);
    router.push("/account/signin");
  };

  if (!profile) return null;
  return (
    <div id="wd-profile-screen">
      <h3>Profile</h3>
      <input
        id="wd-username"
        value={profile.username}
        onChange={(e) => setProfile({ ...profile, username: e.target.value })}
        className="mb-2 w-full rounded border border-neutral-300 px-3 py-2"
      />
      <input
        value={profile.password}
        onChange={(e) => setProfile({ ...profile, password: e.target.value })}
        placeholder="password"
        type="password"
        className="wd-password mb-2 w-full rounded border border-neutral-300 px-3 py-2"
      />
      <input
        value={profile.firstName}
        onChange={(e) => setProfile({ ...profile, firstName: e.target.value })}
        placeholder="First Name"
        id="wd-firstname"
        className="mb-2 w-full rounded border border-neutral-300 px-3 py-2"
      />
      <input
        value={profile.lastName}
        onChange={(e) => setProfile({ ...profile, lastName: e.target.value })}
        placeholder="Last Name"
        id="wd-lastname"
        className="mb-2 w-full rounded border border-neutral-300 px-3 py-2"
      />
      <input
        value={profile.email}
        onChange={(e) => setProfile({ ...profile, email: e.target.value })}
        type="email"
        id="wd-email"
        className="mb-2 w-full rounded border border-neutral-300 px-3 py-2"
      />
      <select
        value={profile.role}
        onChange={(e) => setProfile({ ...profile, role: e.target.value })}
        id="wd-role"
        className="mb-2 w-full rounded border border-neutral-300 px-3 py-2"
      >
        <option value="USER">User</option>
        <option value="ADMIN">Admin</option>
        <option value="FACULTY">Faculty</option>
        <option value="STUDENT">Student</option>
      </select>
      <button type="button" onClick={signout} id="wd-signout-btn">
        Sign out
      </button>
    </div>
  );
}
