import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { signIn } from "../utils/auth";

export default function Login() {
  return (
    <>
      <div className="flex h-screen w-full items-center justify-center px-4">
        <Card className="max-w-sm">
          <CardHeader className="flex gap-5">
            <CardTitle className="text-2xl flex justify-center">
              Login
            </CardTitle>
            <CardDescription>
              Welcome to Invoxify, Enter email below to Login
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form action={async () => {
              "use server";
              await signIn();
            }} className="flex flex-col gap-y-4">
              <div className="flex flex-col gap-y-2  ">
                <Label> Email </Label>
                <Input placeholder="crazyharsh@invoxify.com" />
              </div>
              <Button className="text-white">Submit</Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </>
  );
}
