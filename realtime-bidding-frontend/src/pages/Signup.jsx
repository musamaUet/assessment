"use client";

import { useEffect, useState } from "react";
import { Methods } from "@/constants/enum";
import { useSignupService } from "@/services";
import { Title, Text, Image, Button } from "@/components/atoms";
import { Illustration, Input } from "@/components/molecules";
import AUTO_APPLY_LOGO from "@/assets/images/auto-apply-logo.webp";
import { useNavigate } from 'react-router-dom';
import { ROUTES } from "@/constants/routes";
import { isAuthenticated } from "@/utils/utils";

export default function Signup() {
    const navigate = useNavigate();

    /* STATES */
    const [{ firstName, lastName, email, password }, setSignupDetails] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
    });

    /* SERVICES */
    const { signup } = useSignupService();

    /* HANDLERS */
    const onSignupDetailsChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setSignupDetails((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    useEffect(() => {
        if(isAuthenticated()) {
            navigate(ROUTES.HOME);
        }
    }, [])

    const handleSignup = () => {
        signup({
            method: Methods.POST,
            url: "/auth/register",
            options: {
                data: {
                    firstName,
                    lastName,
                    email,
                    password,
                },
            },
        });
    };

    const handleSignupClick = () => {
        navigate(ROUTES.LOGIN);
    }

    return (
        <div className="signup-layout w-full h-full relative flex flex-col items-center gap-4 pt-[230px] pb-[50px] overflow-y-scroll no-scrollbar overflow-x-hidden">
            <Illustration />
            <Image
                src={AUTO_APPLY_LOGO}
                alt=""
                width={300}
                height={300}
                className="absolute top-0 left-0 "
            />
            <Title size="h4">Auto Apply AI</Title>
            <Text size="xxs" className="max-w-[70%] text-center text-gray-900">
                Streamline your job search smart applications, faster results.
            </Text>
            <Input
                value={firstName}
                name="firstName"
                placeholder="First Name"
                onChange={onSignupDetailsChange}
                className="mt-[20px]"
            />
            <Input
                value={lastName}
                name="lastName"
                placeholder="Last Name"
                onChange={onSignupDetailsChange}
                className="mt-[20px]"
            />
            <Input
                value={email}
                name="email"
                placeholder="Email"
                onChange={onSignupDetailsChange}
                className="mt-[20px]"
            />
            <Input
                type="password"
                value={password}
                name="password"
                placeholder="Password"
                onChange={onSignupDetailsChange}
                handleSubmit={handleSignup}
                className="mt-[20px]"
            />
            <Button title="Signup" onClick={handleSignup} />
            <Button title="Click here to Login" onClick={handleSignupClick} />
        </div>
    );
}
