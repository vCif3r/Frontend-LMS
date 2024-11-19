import { SidebarProvider } from "@/components/ui/sidebar";
import Navbar from "../components/Navbar";
import AppSidebar from "@/components/app-sidebar";

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <SidebarProvider>
      <AppSidebar/>
      <main className="w-full">
        <Navbar/>
        <div className="px-4 pb-4">{children}</div>
      </main>
    </SidebarProvider>
  );
}
