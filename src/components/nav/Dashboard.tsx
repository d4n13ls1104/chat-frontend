import { BiDotsHorizontalRounded } from "react-icons/bi";
import {
    DashboardWrapper,
    DashboardAvatar,
    DashboardTextWrapper,
    DashboardUsernameLabel,
    DashboardHandleLabel,
} from "../../utils/styles";

export const Dashboard = () => {
    return (
        <DashboardWrapper>
            <DashboardAvatar src="/avatar_default.jpg" />
            <DashboardTextWrapper>
                <DashboardUsernameLabel>Username</DashboardUsernameLabel>

                <DashboardHandleLabel>@handle</DashboardHandleLabel>
                <BiDotsHorizontalRounded
                    fill="#fff"
                    size="20px"
                    style={{
                        position: "absolute",
                        right: "16px",
                        top: "25.5px",
                    }}
                />
            </DashboardTextWrapper>
        </DashboardWrapper>
    );
};
