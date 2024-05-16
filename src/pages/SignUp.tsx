import { useState } from "react";
import PersonalInfo from "../components/sign-up-components/PersonalInfo";
import ContactDetails from "../components/sign-up-components/ContactDetails";
import EnterPassword from "../components/sign-up-components/EnterPassword";

const SignUp = () => {
    const [step, setStep] = useState(1);
    const [firstName, setFirstName] = useState("");
    const [middleName, setMiddleName] = useState("");
    const [lastName, setLastName] = useState("");
    const [suffix, setSuffix] = useState("");
    const [gender, setGender] = useState("");
    const [mobileNo, setMobileNo] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const handleNext = () => {
        setStep((prevStep) => prevStep + 1);
    };

    const handleBack = () => {
        setStep((prevStep) => prevStep - 1);
    };

    const handleSubmit = () => {
        console.log("Form Data:", {
            firstName,
            middleName,
            lastName,
            suffix,
            gender,
            mobileNo,
            email,
            password,
            confirmPassword,
        });
    };

    return (
        <form>
            {step === 1 && (
                <PersonalInfo
                    firstName={firstName}
                    setFirstName={setFirstName}
                    middleName={middleName}
                    setMiddleName={setMiddleName}
                    lastName={lastName}
                    setLastName={setLastName}
                    suffix={suffix}
                    setSuffix={setSuffix}
                    gender={gender}
                    setGender={setGender}
                    handleNext={handleNext}
                />
            )}
            {step === 2 && (
                <ContactDetails
                    mobileNo={mobileNo}
                    setMobileNo={setMobileNo}
                    email={email}
                    setEmail={setEmail}
                    handleBack={handleBack}
                    handleNext={handleNext}
                />
            )}
            {step === 3 && (
                <EnterPassword
                    password={password}
                    setPassword={setPassword}
                    confirmPassword={confirmPassword}
                    setConfirmPassword={setConfirmPassword}
                    handleBack={handleBack}
                    handleSubmit={handleSubmit}
                />
            )}
        </form>
    );    
};


export default SignUp;
