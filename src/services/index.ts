import { createQuery } from "@tanstack/svelte-query";
import axios from "axios";
import { isLogin } from "../stores/auth";
import { get } from "svelte/store";

export const useProfile = () => {
    return createQuery({
        queryKey: ["todos"],
        queryFn: () => axios.get("/profile"),
        retry: (failureCount) => false,
        refetchOnWindowFocus: get(isLogin),
    });
};
