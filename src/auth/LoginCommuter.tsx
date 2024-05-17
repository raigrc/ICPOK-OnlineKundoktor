import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FcGoogle } from "react-icons/fc";
import Email from "@/components/input-fields/email";
import Password from "@/components/input-fields/password";

const Login = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-black-100">
      <Card className="w-2/3 bg-black-200">
        <CardContent>
          <div className="grid grid-cols-2 justify-end">
            <div className="text-end text-balance border-r border-white pr-9 flex flex-col justify-between h-full">
              <div>
                <p className="text-h3 mb-2">
                  Hop on Board and Book your Journey
                </p>
                <p className="text-sm">
                  Welcome aboard! Log in to seamlessly book your bus tickets,
                  manage your trips, and explore new destinations. Your next
                  adventure is just a click away. Sign in now to get started!
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
                    <div className="my-6 flex items-center">
                      <hr className="flex-grow border-t border-gray-300" />
                      <span className="mx-4 text-sm">or log in with</span>
                      <hr className="flex-grow border-t border-gray-300" />
                    </div>
                    <Button className="w-full py-6 text-sm" variant={"outline"}>
                      <FcGoogle className="mr-2" />
                      Google
                    </Button>
                  </div>
                </form>
                <div className="text-center mt-6">
                  <p className="text-sm">
                    Dont have an account?{" "}
                    <span>
                      <a href="" className="underline">
                        Create One
                      </a>
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Login;
