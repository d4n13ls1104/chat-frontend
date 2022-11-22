import styled from "styled-components";

export const PostButton = styled.button`
    background-color: #fa3640;
    width: 90%;
    height: 42px;
    color: #e6e8e6;
    border-radius: 30px;
    border: none;
    font-size: 18px;
    cursor: pointer;
    transition: background-color 0.3s;
    margin-top: 16px;
    align-self: center;
    :hover {
        background-color: #e0313a;
    }
`;

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
    color: #e6e8e6;
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

export const NavSidebarStyles = styled.div`
    width: 16rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    position: fixed;
    left: 16px;
    top: 32px;
`;

export const NavChild = styled.a`
    color: #e6e8e6;
    font-size: 21px;
    width: 100%;
    padding-top: 8px;
    padding-bottom: 8px;
    display: flex;
    border-radius: 25px;
    text-decoration: none;
    position: relative;
    margin-top: 8px;

    :hover {
        background-color: #1a1a1a;
    }
`;

export const NavChildText = styled.span`
    text-decoration: none;
    color: #e6e8e6;
    margin-left: 72px;
`;

export const DashboardAvatar = styled.img`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    margin-top: auto;
    margin-bottom: auto;
    margin-left: 8px;
`;

export const DashboardTextWrapper = styled.div`
    display: flex;
    flex-direction: column;
`;

export const DashboardUsernameLabel = styled.span`
    color: #e6e8e6;
    margin-top: auto;
    margin-left: 10px;
    font-size: 18px;
`;

export const DashboardHandleLabel = styled.span`
    color: #c0c0c0;
    margin-left: 10px;
    margin-bottom: auto;
    font-size: 14px;
`;

export const DashboardWrapper = styled.div`
    width: 16rem;
    height: 64px;
    position: fixed;
    display: flex;
    align-content: center;
    bottom: 16px;
    left: 16px;
    transition: background-color 0.3s;
    border-radius: 15px;
    cursor: pointer;
    padding: 2px;

    :hover {
        background-color: #1a1a1a;
    }
`;

export const iconStyles: React.CSSProperties = {
    marginTop: "2.5px",
    position: "absolute",
    left: "32px",
};
