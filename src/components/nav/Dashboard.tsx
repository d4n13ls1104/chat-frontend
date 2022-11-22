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
            <DashboardAvatar src="https://pbs.twimg.com/media/Eyjq7IBXMAAbxdX?format=jpg&name=medium" />
            <DashboardTextWrapper>
                <DashboardUsernameLabel>President Biden</DashboardUsernameLabel>

                <DashboardHandleLabel>@POTUS</DashboardHandleLabel>
                <BiDotsHorizontalRounded
                    fill="#fff"
                    size="20px"
                    style={{
                        position: "absolute",
                        right: "16px",
                        top: "25px",
                    }}
                />
            </DashboardTextWrapper>
        </DashboardWrapper>
    );
};
