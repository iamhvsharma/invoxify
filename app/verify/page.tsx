import { buttonVariants } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card";
  import { AlertCircle, ArrowLeft, Mail } from "lucide-react";
import Link from "next/link";
  
  export default function Verify() {
    return (
      <div className="min-h-screen w-full flex items-center justify-center p-4">
        <Card className="w-full max-w-[420px] px-3 sm:px-5">
          <CardHeader className="text-center">
            <div className="mb-4 mx-auto flex h-16 w-16 sm:h-20 sm:w-20 items-center justify-center rounded-full bg-blue-100">
              <Mail className="h-8 w-8 sm:h-10 sm:w-10" />
            </div>
            <CardTitle className="text-xl sm:text-2xl font-bold">Check your Email</CardTitle>
            <CardDescription className="text-sm sm:text-base">
              We have sent a verification link on your email.
            </CardDescription>
          </CardHeader>
  
          <CardContent>
            <div className="bg-yellow-50 rounded-md border border-yellow-300 p-3 sm:p-4">
              <div className="flex items-center space-x-3">
                <AlertCircle className="h-8 w-8 sm:h-12 sm:w-12 text-yellow-400 flex-shrink-0" />
                <p className="text-xs sm:text-sm text-yellow-700 font-medium">
                  Check your spam folder if not received the mail.
                </p>
              </div>
            </div>
          </CardContent>
          <CardFooter>
            <Link href="/login" className={buttonVariants({
                className: "w-full",
                variant: "outline"
            })}>
            <ArrowLeft className="size-4 mr-2" /> Back to Login Page
            </Link>
          </CardFooter>
        </Card>
      </div>
    );
  }