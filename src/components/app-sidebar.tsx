import {
  Calendar,
  GraduationCap,
  Home,
  Inbox,
  LogOutIcon,
  Settings,
  Users2Icon,
} from "lucide-react";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import Link from "next/link";

const menuItems = [
  {
    title: "Menu",
    items: [
      {
        title: "Home",
        url: "#",
        icon: Home,
        visible: ["admin", "teacher", "student", "parent"],
      },
      {
        title: "Clase",
        url: "",
        icon: Inbox,
        visible: ["student"],
      },
      {
        title: "Courses",
        url: "/courses",
        icon: Inbox,
        visible: ["admin", "teacher", "student"],
      },
      {
        title: "Calendar",
        url: "#",
        icon: Calendar,
        visible: ["admin", "teacher", "student", "parent"],
      },
      {
        title: "Students",
        url: "/students",
        icon: Users2Icon,
        visible: ["admin", "teacher"],
      },
      {
        title: "Teachers",
        url: "/teachers",
        icon: Users2Icon,
        visible: ["admin"],
      },
      {
        title: "Parents",
        url: "/parents",
        icon: Users2Icon,
        visible: ["admin", "teacher"],
      },
      {
        title: "Settings",
        url: "#",
        icon: Settings,
        visible: ["admin", "teacher", "student", "parent"],
      },
    ],
  },
];

const role = "admin";

const AppSidebar = () => {
  return (
    <Sidebar collapsible="icon" variant="floating">
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton>
              <GraduationCap />
              <h1>InnovaLearn</h1>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        {menuItems.map((i) => (
          <SidebarGroup key={i.title}>
            <SidebarGroupLabel>{i.title}</SidebarGroupLabel>
            <SidebarGroupContent>
              {i.items.map((item) => {
                if (item.visible.includes(role)) {
                  return (
                    <SidebarMenu className="text-gray-600 dark:text-gray-400">
                      <SidebarMenuItem key={item.title}>
                        <SidebarMenuButton asChild>
                          <Link href={item.url}>
                            <item.icon />
                            <span>{item.title}</span>
                          </Link>
                        </SidebarMenuButton>
                      </SidebarMenuItem>
                    </SidebarMenu>
                  );
                }
              })}
            </SidebarGroupContent>
          </SidebarGroup>
        ))}
      </SidebarContent>
      <SidebarFooter>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton>
              <LogOutIcon /> Log Out
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  );
};
export default AppSidebar;
