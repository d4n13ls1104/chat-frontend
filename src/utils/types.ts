export type CreateUserParams = {
    email: string;
    username: string;
    password: string;
};

export type LoginUserParams = {
    email: string;
    password: string;
};

export type AuthResponse = {
    error?: string;
    success?: string;
};
