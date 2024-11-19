"use client"

import React from "react";
import {
    BellIcon,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { ModeToggle } from "@/components/ModeToggle";

const Navbar = () => {
    return (
        <div className="flex items-center justify-between p-3">
            <SidebarTrigger />

            {/* <div className="hidden md:flex">

            </div> */}

            <div className="flex items-center gap-4 justify-end w-full">
                <ModeToggle/>
                <Button variant={"outline"} size={"icon"}>
                    <BellIcon />
                </Button>

                {/* dropdown */}
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <div className="flex gap-2 items-center cursor-pointer">
                            <div className="flex flex-col">
                                <span className="text-[13px] leading-3 font-medium">Jhon Doe</span>
                                <span className="text-[10px] text-gray-500 text-right">Admin</span>
                            </div>
                            <Avatar>
                                <AvatarFallback>CN</AvatarFallback>
                            </Avatar>
                        </div>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className="w-56" align="end">
                        <DropdownMenuLabel>My Account</DropdownMenuLabel>
                        <DropdownMenuSeparator />
                        <DropdownMenuGroup>
                            <DropdownMenuItem>
                                Profile                       
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                                Billing                      
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                                Settings
                            </DropdownMenuItem>

                        </DropdownMenuGroup>
                        <DropdownMenuSeparator />
                        <DropdownMenuGroup>
                            <DropdownMenuItem>Team</DropdownMenuItem>
                            <DropdownMenuItem>
                                New Team
                            </DropdownMenuItem>
                        </DropdownMenuGroup>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem>
                            Log out
                        </DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            </div>
        </div>
    );
};

export default Navbar;
