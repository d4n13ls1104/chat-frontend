import { RightPanelWrapper, SearchInput } from "../../utils/styles";
import { mockTrendingData } from "../../__mock__/mockTrendingData";
import { Trending } from "./Trending";

export const RightPanel = () => {
    return (
        <RightPanelWrapper>
            <SearchInput placeholder="Search Twitter" />
            <Trending items={mockTrendingData} />
        </RightPanelWrapper>
    );
};
