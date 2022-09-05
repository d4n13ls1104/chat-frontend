import * as yup from "yup";
import styled from "styled-components";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { CreateUserParams } from "../../utils/types";
import { registerUser } from "../../utils/api";

export const RegisterForm = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<CreateUserParams>({
        resolver: yupResolver(registerValidationSchema),
    });

    const onSubmit = async (data: CreateUserParams) => {
        console.log(data);

        try {
            await registerUser(data);
        } catch (err) {
            console.log(err);
        }
    };

    return (
        <RegisterFormStyles
            onSubmit={handleSubmit(onSubmit)}
            autoComplete="off"
        >
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

            {errors.username && !errors.email && (
                <span
                    style={{
                        color: "#fa3640",
                        position: "absolute",
                        marginTop: "-15px",
                    }}
                >
                    {errors.username?.message}
                </span>
            )}

            {errors.password && !errors.email && !errors.username && (
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

            <h1 style={{ marginRight: "auto" }}>Register</h1>

            <TextInput placeholder="Email" {...register("email")} />
            <TextInput placeholder="Username" {...register("username")} />
            <TextInput
                autoComplete="new-password"
                type="password"
                placeholder="Password"
                {...register("password")}
            />
            <SubmitButton type="submit">Register</SubmitButton>
            <span style={{ fontSize: "16px", marginTop: "20px" }}>
                Already have an account?{" "}
                <a href="/login" style={{ color: "#fa3640" }}>
                    Login
                </a>
            </span>
        </RegisterFormStyles>
    );
};

const registerValidationSchema = yup
    .object({
        email: yup
            .string()
            .min(3, "Email must be at least 3 characters")
            .max(254, "Email must not exceed 254 characters")
            .email("Email must be a valid email")
            .required("Email is a required field"),
        username: yup
            .string()
            .min(3, "Username must be at least 3 characters")
            .max(16, "Username must not exceed 16 characters")
            .matches(/^[a-zA-Z0-9_.]*$/, {
                message:
                    "Username may only contain letters, numbers, underscores and periods.",
            })
            .required("Username is a required field"),
        password: yup
            .string()
            .min(8, "Password must be at least 8 characters")
            .required("Password is a required field"),
    })
    .required();

const RegisterFormStyles = styled.form`
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
