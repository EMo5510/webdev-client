"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import "../kambaz.css";

export default function AccountNavigation() {
  const pathname = usePathname() ?? "";
  const signin = "/account/signin";
  const signup = "/account/signup";
  const profile = "/account/profile";
  return (
    <div
      id="wd-account-navigation"
      className="wd list-group rounded-none text-lg"
    >
      <Link
        href={signin}
        id="wd-signin-link"
        className={
          pathname === signin
            ? "list-group-item active border-0"
            : "list-group-item border-0 text-red-600"
        }
      >
        Signin
      </Link>
      <Link
        href={signup}
        id="wd-signup-link"
        className={
          pathname === signup
            ? "list-group-item active border-0"
            : "list-group-item border-0 text-red-600"
        }
      >
        Signup
      </Link>
      <Link
        href={profile}
        id="wd-profile-link"
        className={
          pathname === profile
            ? "list-group-item active border-0"
            : "list-group-item border-0 text-red-600"
        }
      >
        Profile
      </Link>
    </div>
  );
}
