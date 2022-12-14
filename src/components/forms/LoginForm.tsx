import * as yup from "yup";
import { useForm } from "react-hook-form";
import { loginUser } from "../../utils/api";
import { AuthResponse, LoginUserParams } from "../../utils/types";
import { yupResolver } from "@hookform/resolvers/yup";
import {
    TextInput,
    SubmitButton,
    FormStyles,
    FieldError,
} from "../../utils/styles";
import { useState } from "react";

export const LoginForm = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<LoginUserParams>({
        resolver: yupResolver(loginValidationSchema),
    });

    const [authResponse, setAuthResponse] = useState<AuthResponse>();

    const onSubmit = async (data: LoginUserParams) => {
        try {
            const res = await loginUser(data);

            setAuthResponse(res.data);
        } catch (err) {
            console.log(err);
        }
    };

    return (
        <FormStyles onSubmit={handleSubmit(onSubmit)} autoComplete="off">
            {authResponse?.error && (
                <FieldError>{authResponse.error}</FieldError>
            )}

            {errors.email && <FieldError>{errors.email?.message}</FieldError>}

            {errors.password && !errors.email && (
                <FieldError>{errors.password?.message}</FieldError>
            )}

            <h1 style={{ marginRight: "auto" }}>Login</h1>

            <TextInput placeholder="Email" {...register("email")} />
            <TextInput
                type="password"
                placeholder="Password"
                autoComplete="new-password"
                {...register("password")}
            />

            <SubmitButton type="submit">Login</SubmitButton>

            <span style={{ fontSize: "16px", marginTop: "20px" }}>
                Don't have an account?{" "}
                <a href="/register" style={{ color: "#fa3640" }}>
                    Register
                </a>
            </span>
        </FormStyles>
    );
};

const loginValidationSchema = yup.object({
    email: yup.string().required("Email is a required field"),
    password: yup.string().required("Password is a required field"),
});
