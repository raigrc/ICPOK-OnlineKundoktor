import { Button } from "../ui/button";

const ContactDetails = () => {
    return (<div className="grid grid-cols-2 bg-gray-800 p-8 rounded-md max-w-screen-xl mx-auto">
        <div className="grid grid-rows-2 text-right px-8">
            <span className="text-5xl font-bold mb-2">
                Sign Up Now - Your Journey Starts Here!
            </span>
            <span className="text-md">
                Welcome aboard! Log in to seamlessly book your bus tickets, 
                manage your trips, and explore new destinations. 
                Your next adventure is just a click away. 
                Sign in now to get started!
            </span>
            <div className="flex justify-end gap-2">
             <span>Terms</span>
             <span>Privacy</span>
             <span>Contact</span>
            </div>
        </div>
        <div className="border-l-2 pl-8 border-white">
            <div className='flex items-center border-2 rounded-sm border-white mb-3'>
                <p className='pl-6 font-bold w-3/12'>Mobile No:</p>
                <input 
                    className='w-11/12 h-11 bg-transparent' 
                    type='text' 
                    maxLength={13}
                    placeholder="+63"
                /> 
            </div>
            <div className='flex items-center border-2 rounded-sm border-white mb-3'>
                <p className='pl-6 font-bold w-3/12'>Email:</p>
                <input 
                    className='w-11/12 h-11 bg-transparent' 
                    type='email' 
                    placeholder="sample@mail.com"
                /> 
            </div>
            <div className='grid grid-cols-2 gap-2 py-3'>
             <Button className='h-12 font-bold'>Back</Button>
             <Button className='h-12 font-bold'>Next</Button>
            </div>
            <div className="flex justify-center gap-1 mt-5">
             <div>
              Already have an account?
             </div> 
             <div>
              <a href="/login" className="underline underline-offset-1">Login now</a>
             </div>
            </div>
        </div>        
    </div>
    );
};

export default ContactDetails;
