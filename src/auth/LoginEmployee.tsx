import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Email from "@/components/input-fields/email";
import Password from "@/components/input-fields/password";

const LoginEmployee = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-black-100">
      <Card className="w-2/3 bg-black-200">
        <CardContent>
          <div className="grid grid-cols-2 justify-end">
            <div className="text-end text-balance border-r border-white pr-9 flex flex-col justify-between h-full">
              <div>
                <p className="text-h3 mb-2">Employee Hub</p>
                <p className="text-sm">
                  Together, let's continue to elevate the travel experience. Get
                  ready to embark on another day of greatness. Sign in now and
                  let's hit the road!
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
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default LoginEmployee;
