import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
    background-color: #26282b;
    width: 25rem;
    height: 25rem;
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    margin: auto;
    border-radius: 2%;
    display: flex;
    justify-content: center;
    color: #fff;
`;

export const Register: React.FC = () => {
    return (
        <Wrapper>
            <h1>Register</h1>
        </Wrapper>
    );
};
