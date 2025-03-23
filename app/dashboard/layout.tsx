import { ReactNode } from "react";
import { requireUser } from "../utils/hooks";
import Link from "next/link";
import logo from "@/public/logo.svg";
import Image from "next/image";
import { DashboardLinks } from "@/components/Custom/DashboardLinks";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Menu, User2 } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { signOut } from "../utils/auth";
import { prisma } from "../utils/db";
import { redirect } from "next/navigation";

// Function to check wheather the user is onboarded or not
async function getUser(userId: string) {
  const data = await prisma.user.findUnique({
    where: {
      id: userId,
    },
    select: {
      firstName: true,
      lastName: true,
      address: true,
    },
  });

  if(!data?.firstName || !data.lastName || !data.address){
    redirect("/onboarding")
  }
}

export default async function DashboardLayout({
  children,
}: {
  children: ReactNode;
}) {
  // Protecting route
  const session = await requireUser();

  // Calling function to check wheather the user is onboarded or not
  // const data = 
  await getUser(session.user?.id as string)

  return (
    <>
      <div className="grid min-h-screen w-full md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr]">
        <div className="hidden border-r bg-muted/40 md:block">
          <div className="flex flex-col max-h-screen h-full gap-2">
            <div className="py-10 flex items-center border-b px-4 lg:h-[60px] lg:px-6">
              <Link href="/" className="flex items-center mx-auto">
                <Image src={logo} alt="logo" className="size-9" />
                <span className="text-3xl ml-2 font-bold text-blue-800">
                  Invoxify
                </span>
              </Link>
            </div>
            <div className="flex-1">
              <nav className="grid items-start px-2 text-sm mt-3 font-medium lg:px-4">
                <DashboardLinks />
              </nav>
            </div>
          </div>
        </div>
        <div className="flex flex-col">
          <header className="flex py-10 items-center gap-4 border-b bg-muted/40 px-4 lg:h-[60px] lg:px-6">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="outline" size="icon" className="md:hidden">
                  <Menu className="size-4" />
                </Button>
              </SheetTrigger>
              <SheetContent side="left">
                <nav className="mt-15 grid gap-2 px-4 ">
                  <DashboardLinks />
                </nav>
              </SheetContent>
            </Sheet>

            <div className="flex items-center ml-auto px-10">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button
                    className="rounded-full p-5"
                    variant="outline"
                    size="icon"
                  >
                    <User2 className="size-6" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuLabel>My Account</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem asChild>
                    <Link href="/dashboard">Dashboard</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link href="/dashboard/invoices">Invoices</Link>
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem asChild>
                    <form
                      className="w-full"
                      action={async () => {
                        "use server";
                        await signOut();
                      }}
                    >
                      <button className="w-full text-left">Log out</button>
                    </form>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </header>
          <main className="px-10 py-10">{children}</main>
        </div>
      </div>
    </>
  );
}
