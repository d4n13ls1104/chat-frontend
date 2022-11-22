import {
    NavSidebarStyles,
    NavChild,
    NavChildText,
    iconStyles,
    PostButton,
} from "../../utils/styles";
import { FiSettings, FiBell } from "react-icons/fi";
import { BiHomeCircle, BiEnvelope, BiHash } from "react-icons/bi";
import { BsPerson } from "react-icons/bs";

export const NavSidebar = () => {
    return (
        <NavSidebarStyles>
            <NavChild href="/">
                <BiHomeCircle style={iconStyles} />
                <NavChildText>Home</NavChildText>
            </NavChild>

            <NavChild href="/explore">
                <BiHash style={iconStyles} />
                <NavChildText>Explore</NavChildText>
            </NavChild>

            <NavChild href="/notifications">
                <FiBell style={iconStyles} />
                <NavChildText>Notifications</NavChildText>
            </NavChild>

            <NavChild href="/messages">
                <BiEnvelope style={iconStyles} />
                <NavChildText>Messages</NavChildText>
            </NavChild>

            <NavChild href="/profile">
                <BsPerson style={iconStyles} />
                <NavChildText>Profile</NavChildText>
            </NavChild>

            <NavChild href="/settings">
                <FiSettings style={iconStyles} />
                <NavChildText>Settings</NavChildText>
            </NavChild>
            <PostButton>Tweet</PostButton>
        </NavSidebarStyles>
    );
};
