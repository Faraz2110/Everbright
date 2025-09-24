"use client";
import { useEffect, useState } from "react";
import {
  LogOut,
  Wrench,
  Snowflake,
  Tag,
  Users,
  Images,
} from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";

const Dashboard = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const loggedIn = localStorage.getItem("isLoggedIn");
    if (!loggedIn) {
      router.push("/login"); // redirect if not logged in
    } else {
      setIsLoggedIn(true);
    }
  }, [router]);

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    router.push("/login");
  };

  if (!isLoggedIn) return null; // prevent flashing

  const sections = [
    { name: "Electrical", icon: <Wrench size={24} />, link: "/dashboard/electrical" },
    { name: "Aircon", icon: <Snowflake size={24} />, link: "/dashboard/aircon" },
    { name: "New Offers", icon: <Tag size={24} />, link: "/dashboard/promo" },
    // { name: "Carousel", icon: <Images size={24} />, link: "/dashboard/carousel" },
    { name: "Team", icon: <Users size={24} />, link: "/dashboard/team" },
  ];

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      {/* Header */}
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">Services</h1>
        <button
          onClick={handleLogout}
          className="flex items-center gap-2 px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700"
        >
          <LogOut size={18} /> Logout
        </button>
      </div>

      {/* Sections Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {sections.map((section) => (
          <Link
            key={section.name}
            href={section.link}
            className="group p-6 bg-white rounded-xl shadow hover:shadow-lg border flex flex-col items-center justify-center text-center transition-transform hover:-translate-y-1"
          >
            <div className="text-blue-600 mb-3">{section.icon}</div>
            <h2 className="text-lg font-semibold group-hover:text-blue-600">
              {section.name}
            </h2>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
