import { Outlet } from 'react-router-dom';

export default function Layout() {
  return (
    <div className="min-h-screen w-full bg-[#1f0036] text-white">
      <Outlet />
    </div>
  );
}