import axios, { AxiosRequestConfig } from "axios";
import { CreateUserParams, LoginUserParams } from "./types";

const API_URL = process.env.REACT_APP_API_URL;
const config: AxiosRequestConfig = { withCredentials: true };

export const registerUser = (data: CreateUserParams) =>
    axios.post(`${API_URL}/auth/register`, data, config);

export const loginUser = (data: LoginUserParams) =>
    axios.post(`${API_URL}/auth/login`, data, config);
