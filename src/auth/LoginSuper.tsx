import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Email from "@/components/input-fields/email";
import Password from "@/components/input-fields/password";

const LoginSuper = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-black-100">
      <Card className=" bg-black-200">
        <CardContent>
          <div className="flex">
            <div className="flex items-center justify-center w-full">
              <div className="w-full">
                <p className="text-h3 mb-6">Login</p>
                <Email />
                <Password />
                <div className="text-center">
                  <Button className="w-full mt-6 py-6 text-sm font-semibold">
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

export default LoginSuper;
