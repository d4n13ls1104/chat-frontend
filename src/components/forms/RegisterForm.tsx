import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { CreateUserParams } from "../../utils/types";
import { registerUser } from "../../utils/api";
import {
    FieldError,
    FormStyles,
    SubmitButton,
    TextInput,
} from "../../utils/styles";

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
        <FormStyles onSubmit={handleSubmit(onSubmit)} autoComplete="off">
            {errors.email && <FieldError>{errors.email?.message}</FieldError>}

            {errors.username && !errors.email && (
                <FieldError>{errors.username?.message}</FieldError>
            )}

            {errors.password && !errors.email && !errors.username && (
                <FieldError>{errors.password?.message}</FieldError>
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
        </FormStyles>
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
