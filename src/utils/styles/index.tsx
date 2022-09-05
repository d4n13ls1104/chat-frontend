import styled from "styled-components";

export const FormStyles = styled.form`
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

export const SubmitButton = styled.button`
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

export const TextInput = styled.input`
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

export const FieldError = styled.span`
    position: absolute;
    margin-top: -15px;
    color: #fa3640;
`;
