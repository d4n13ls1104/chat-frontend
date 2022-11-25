import styled from "styled-components";

export const TrendingItemTitle = styled.span`
    font-weight: bold;
`;

export const TrendingItemSubText = styled.span`
    color: #c0c0c0;
    font-size: 12px;
`;

export const TrendingItemTextStack = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
`;

export const TrendingItemStyles = styled.div`
    width: 100%;
    height: 100%;
    background-color: #1a1a1a;
    color: #e6e8e6;
    box-sizing: border-box;
    padding: 10px 16px 10px 16px;
    cursor: pointer;
    transition: background-color 0.3s;
    display: flex;
    align-items: center;
    font-size: 15px;

    :hover {
        background-color: #313131;
    }
`;

export const TrendingItemWrapper = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
`;

export const TrendingHeader = styled.span`
    font-weight: bold;
    color: #e6e8e6;
    font-size: 19px;
    margin: 8px 0px 8px 16px;
`;

export const TrendingWrapper = styled.div`
    background-color: #1a1a1a;
    width: 100%;
    border-radius: 8px;
    margin-top: 16px;
    padding-top: 8px;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    border: 1px solid #313131;
`;

export const SearchInput = styled.input`
    background-color: #1a1a1a;
    width: 100%;
    height: 38px;
    box-sizing: border-box;
    padding-left: 12px;
    border: none;
    color: #e6e8e6;
    border-radius: 18px;
    font-size: 13px;
    border: 1px solid #313131;
`;

export const RightPanelWrapper = styled.div`
    width: 19rem;
    position: fixed;
    right: 24px;
    top: 16px;
`;

export const PostButton = styled.button`
    font-weight: bold;
    background-color: #fa3640;
    width: 100%;
    height: 39px;
    color: #e6e8e6;
    border-radius: 30px;
    border: none;
    font-size: 13px;
    cursor: pointer;
    transition: background-color 0.3s;
    margin-top: 18px;
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
    width: 15rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    position: fixed;
    left: 16px;
    top: 32px;
`;

export const NavChild = styled.a`
    color: #e6e8e6;
    font-size: 19px;
    width: 100%;
    padding-top: 8px;
    padding-bottom: 8px;
    display: flex;
    border-radius: 25px;
    text-decoration: none;
    position: relative;
    margin-top: 8px;
    transition: background-color 0.3s;

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
    margin-left: 2px;
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
