"use client";

import { useEffect, useState } from "react";
import { Methods } from "@/constants/enum";
import { useLoginService } from "@/services";
import { Title, Text, Image, Button } from "@/components/atoms";
import { Illustration, Input } from "@/components/molecules";
import AUTO_APPLY_LOGO from "@/assets/images/auto-apply-logo.webp";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "@/constants/routes";
import { isAuthenticated } from "@/utils/utils";

export default function Login() {
    const navigate = useNavigate();

    /* STATES */
    const [{ email, password }, setLoginDetails] = useState({
        email: "",
        password: "",
    });

    /* SERVICES */
    const { login } = useLoginService();

    /* HANDLERS */
    const onLoginDetailsChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setLoginDetails((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    useEffect(() => {
        if(isAuthenticated()) {
            navigate(ROUTES.HOME);
        }
    }, [])

    const handleLogin = () => {
        login({
            method: Methods.POST,
            url: "/auth/login",
            options: {
                data: {
                    email,
                    password,
                },
            },
        })
    };

    const handleSignupClick = () => {
        navigate(ROUTES.SIGN_UP);
    }

    return (
        <div className="login-layout w-full h-screen relative flex flex-col items-center gap-4 pt-[230px] pb-[50px] overflow-y-scroll no-scrollbar overflow-x-hidden">
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
                value={email}
                name="email"
                placeholder="Email"
                onChange={onLoginDetailsChange}
                className="mt-[40px]"
            />
            <Input
                type="password"
                value={password}
                name="password"
                placeholder="Password"
                onChange={onLoginDetailsChange}
                handleSubmit={handleLogin}
                className="mt-[20px]"
            />
            <Button title="Login" onClick={handleLogin} />
            <Button title="Click here to Signup" onClick={handleSignupClick} />
        </div>
    );
}
