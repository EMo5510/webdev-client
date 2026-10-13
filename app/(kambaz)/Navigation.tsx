"use client";

import { AiOutlineDashboard } from "react-icons/ai";
import { FaCircleQuestion, FaInbox, FaRegCircleUser } from "react-icons/fa6";
import Link from "next/link";
import { LiaBookSolid, LiaCogSolid } from "react-icons/lia";
import { IoCalendarOutline } from "react-icons/io5";

export default function KambazNavigation() {
  return (
    <nav
      id="wd-kambaz-navigation"
      className="fixed bottom-0 top-0 z-20 hidden w-[120px] bg-black md:block"
    >
      <Link
        href="/account"
        id="wd-account-link"
        className="block bg-black py-3 text-center text-sm text-white no-underline"
      >
        <FaRegCircleUser className="inline-block text-3xl text-red-500" />
        <br />
        Account
      </Link>
      <Link
        href="/dashboard"
        id="wd-dashboard-link"
        className="block bg-white py-3 text-center text-sm text-red-600 no-underline"
      >
        <AiOutlineDashboard className="inline-block text-3xl text-red-600" />
        <br />
        Dashboard
      </Link>
      {/* ...Courses, Calendar, Inbox, Labs... */}
      <Link
        href="/courses/1234/home"
        id="wd-course-link"
        className="block bg-black py-3 text-center text-sm text-white no-underline"
      >
        <LiaBookSolid className="inline-block text-3xl text-red-500" />
        <br />
        Courses
      </Link>
      <Link
        href="/calendar"
        id="wd-calendar-link"
        className="block bg-black py-3 text-center text-sm text-white no-underline"
      >
        <IoCalendarOutline className="inline-block text-3xl text-red-500" />
        <br />
        Calendar
      </Link>
      <Link
        href="/inbox"
        id="wd-inbox-link"
        className="block bg-black py-3 text-center text-sm text-white no-underline"
      >
        <FaInbox className="inline-block text-3xl text-red-500" />
        <br />
        Inbox
      </Link>
      <Link
        href="/labs"
        id="wd-labs-link"
        className="block bg-black py-3 text-center text-sm text-white no-underline"
      >
        <LiaCogSolid className="inline-block text-3xl text-red-500" />
        <br />
        Labs
      </Link>
      <Link
        href="/labs"
        id="wd-ai-nav-help"
        className="block bg-black py-3 text-center text-sm text-white no-underline"
      >
        <FaCircleQuestion className="inline-block text-3xl text-red-500" />
        <br />
        Help
      </Link>
    </nav>
  );
}
