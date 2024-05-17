import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Password from "../input-fields/password";
import ConfirmPassword from "../input-fields/confirm-password";
interface EnterPasswordProps {
    password: string;
    setPassword: React.Dispatch<React.SetStateAction<string>>;
    confirmPassword: string;
    setConfirmPassword: React.Dispatch<React.SetStateAction<string>>;
    handleBack: () => void;
    handleSubmit: () => void;
}

const EnterPassword: React.FC<EnterPasswordProps> = ({ password, setPassword, confirmPassword, setConfirmPassword, handleBack, handleSubmit }) => {
    return (
        <div className="flex items-center justify-center h-screen bg-black-100">
            <Card className="w-2/3 bg-black-200">
            <CardContent>
                <div className="grid grid-cols-2 justify-end">
                <div className="text-end text-balance border-r border-white pr-9 flex flex-col justify-between h-full">
                    <div>
                    <p className="text-h3 mb-2">Sign Up Now - Your Journey Starts Here!</p>
                    <p className="text-sm">
                        Welcome aboard! Log in to seamlessly book your bus tickets, 
                        manage your trips, and explore new destinations. 
                        Your next adventure is just a click away. 
                        Sign in now to get started!
                    </p>
                    </div>
                    <div className="text-sm flex justify-end gap-x-6">
                    <a href="">Terms</a>
                    <a href="">Privacy</a>
                    <a href="">Contact</a>
                    </div>
                </div>

                <div className="flex items-center justify-center w-full">
                    <div className="w-full px-9 grid grid-rows-3 gap-y-5">
                        <Password 
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                        <ConfirmPassword 
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            required
                        />
                        <div className="text-center grid grid-cols-2 gap-2">
                            <Button className='w-full py-6 text-sm font-semibold' onClick={handleBack}>Back</Button>
                            <Button className='w-full py-6 text-sm font-semibold' onClick={handleSubmit}>Sign Up</Button>
                        </div>
                        <div className="text-center text-sm">
                            <span className="mr-2">
                                Already have an account?
                            </span>
                            <a href="/login" className="underline underline-offset-1">
                                Login now
                            </a>
                        </div>
                    </div>
                </div>
                </div>
            </CardContent>
        </Card>
    </div>
    );
};

export default EnterPassword;
