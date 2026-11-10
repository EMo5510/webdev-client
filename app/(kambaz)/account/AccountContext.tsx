"use client";

import { createContext, useContext, useState, type ReactNode } from "react";
import usersJson from "../database/users.json";

export type User = (typeof usersJson)[number];

const emptyUser: User = {
  _id: "0",
  username: "New User",
  password: "New Number",
  firstName: "Jane",
  lastName: "Doe",
  email: "student@mail.com",
  role: "STUDENT",
  loginId: "0",
  section: "S",
  lastActivity: "0000-00-00",
  totalActivity: "00:00:00",
};

export { emptyUser };

type AccountContextValue = {
  currentUser: User | null;
  setCurrentUser: (user: User | null) => void;
};

const AccountContext = createContext<AccountContextValue | null>(null);

export function AccountProvider({ children }: { children: ReactNode }) {
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  return (
    <AccountContext.Provider value={{ currentUser, setCurrentUser }}>
      {children}
    </AccountContext.Provider>
  );
}

export function useAccountContext() {
  const value = useContext(AccountContext);
  if (!value) {
    throw new Error("useAccountContext must be used inside AccountProvider");
  }
  return value;
}