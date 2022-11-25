import { TrendingProps } from "../../utils/types";

import {
    TrendingHeader,
    TrendingWrapper,
    TrendingItemWrapper,
} from "../../utils/styles";
import { TrendingItem } from "./TrendingItem";

export const Trending = ({ items }: TrendingProps) => {
    return (
        <TrendingWrapper>
            <TrendingHeader>What's happening</TrendingHeader>
            <TrendingItemWrapper>
                {items.map((trendingItem, index) => {
                    if (index === items.length - 1) {
                        return (
                            <TrendingItem
                                title={trendingItem.title}
                                timesTweeted={trendingItem.timesTweeted}
                                isLastItem
                            />
                        );
                    }

                    return (
                        <TrendingItem
                            title={trendingItem.title}
                            timesTweeted={trendingItem.timesTweeted}
                        />
                    );
                })}
            </TrendingItemWrapper>
        </TrendingWrapper>
    );
};
