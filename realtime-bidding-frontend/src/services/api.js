/* eslint-disable @typescript-eslint/no-explicit-any */
import client from "@/config/axios";

export const networkRequest = async (params) => {
    const { method, url, options = {} } = params || {};

    try {
        const response = await client.request<TResponse>({
            method,
            url,
            ...options,
        });

        return response;
    } catch (error) {
        console.error(`Network request failed: ${method} ${url}`, error);
        throw error;
    }
};
