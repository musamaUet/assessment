/* eslint-disable @typescript-eslint/no-explicit-any */
import { AxiosResponse } from "axios";
import { useMutation } from "@tanstack/react-query";
import { networkRequest, NetworkRequestParams } from "./api";
import { useNavigate } from 'react-router-dom';
import toast from "react-hot-toast";
import { ROUTES } from "@/constants/routes";
import { useDispatch } from "react-redux";
import { updateUserDetail } from "@/redux/slices/user/user.slice";

const handleError = (error: any) => {
    console.error(error?.response?.data?.message);
    toast.error(error?.response?.data?.message ?? "something went wrong");
    return false;
};

export const useLoginService = () => {
    const dispatch: any = useDispatch();

    const handleSuccess = ({ data }: AxiosResponse<any, any>) => {
        console.log('userData', data);
        localStorage.setItem("token", data?.data?.token);
        localStorage.setItem("refreshToken", data?.data?.token);
        localStorage.setItem("user", data?.data.user?._id);
        dispatch(updateUserDetail(data?.data.user));
        setTimeout(() => {
            toast.success("User loggedin successfully");
            window.location.href = ROUTES.HOME;
        }, 100);
    };

    const { mutate: login } = useMutation({
        mutationFn: async (params: NetworkRequestParams) => networkRequest(params),
        onSuccess: handleSuccess,
        onError: handleError,
        retry: false,
    });

    return { login };
};

export const useSignupService = () => {
    const navigate = useNavigate();

    const handleSuccess = ({ data }: AxiosResponse<any, any>) => {
        console.log(data);
        toast.success("User registered successfully");
        navigate(ROUTES.LOGIN);
    };

    const { mutate: signup } = useMutation({
        mutationFn: async (params: NetworkRequestParams) => networkRequest(params),
        onSuccess: handleSuccess,
        onError: handleError,
        retry: false,
    });
    return { signup };
};