import styled from "styled-components";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { loginUser } from "../../utils/api";
import { LoginUserParams } from "../../utils/types";
import { yupResolver } from "@hookform/resolvers/yup";

export const LoginForm = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<LoginUserParams>({
        resolver: yupResolver(loginValidationSchema),
    });

    const onSubmit = async (data: LoginUserParams) => {
        console.log(data);

        try {
            await loginUser(data);
        } catch (err) {
            console.log(err);
        }
    };

    return (
        <LoginFormStyles onSubmit={handleSubmit(onSubmit)} autoComplete="off">
            {errors.email && (
                <span
                    style={{
                        color: "#fa3640",
                        position: "absolute",
                        marginTop: "-15px",
                    }}
                >
                    {errors.email?.message}
                </span>
            )}

            {errors.password && !errors.email && (
                <span
                    style={{
                        color: "#fa3640",
                        position: "absolute",
                        marginTop: "-15px",
                    }}
                >
                    {errors.password?.message}
                </span>
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
        </LoginFormStyles>
    );
};

const loginValidationSchema = yup.object({
    email: yup.string().required("Email is a required field"),
    password: yup.string().required("Password is a required field"),
});

const LoginFormStyles = styled.form`
    width: 30rem;
    height: 30rem;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    margin: auto;
    color: #fff;
    display: flex;
    flex-direction: column;
    align-items: center;

    @media only screen and (max-width: 430px) {
        width: 23.5rem;
    }
    @media only screen and (max-width: 400px) {
        width: 21.5rem;
    }
`;

const SubmitButton = styled.button`
    background-color: #fa3640;
    width: 100%;
    height: 60px;
    color: #fff;
    border-radius: 10px;
    border: none;
    font-size: 18px;
    cursor: pointer;
    transition: background-color 0.15s;

    :hover {
        background-color: #e0313a;
    }
`;

const TextInput = styled.input`
    background-color: #1a1a1a;
    width: 100%;
    height: 60px;
    box-sizing: border-box;
    padding-left: 12px;
    border: none;
    color: #e6e8e6;
    margin-bottom: 20px;
    border-radius: 10px;
    font-size: 16px;
`;
