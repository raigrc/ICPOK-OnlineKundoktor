import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Email from "@/components/input-fields/email";
import Password from "@/components/input-fields/password";

const LoginAdmin = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-black-100">
      <Card className="w-2/3 bg-black-200">
        <CardContent>
          <div className="grid grid-cols-2 justify-end">
            <div className="text-end text-balance border-r border-white pr-9 flex flex-col justify-between h-full">
              <div>
                <p className="text-h3 mb-2">Welcome back, Administrator!</p>
                <p className="text-sm">
                  Log in to manage bookings, update schedules, and keep our
                  system running smoothly. Your expertise keeps everything on
                  track. Log in in to continue your essential work!
                </p>
              </div>
              <div className="text-sm flex justify-end gap-x-6">
                <a href="">Terms</a>
                <a href="">Privacy</a>
                <a href="">Contact</a>
              </div>
            </div>

            <div className="flex items-center justify-center w-full">
              <div className="w-full px-9">
                <form action="">
                  <Email />
                  <Password />
                  <div className="text-end my-6 text-sm">
                    <a href="" className="">
                      Forgot Password?
                    </a>
                  </div>
                  <div className="text-center">
                    <Button className="w-full py-6 text-sm font-semibold">
                      Log in
                    </Button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default LoginAdmin;
