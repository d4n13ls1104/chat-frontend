import {
    TrendingItemStyles,
    TrendingItemSubText,
    TrendingItemTextStack,
    TrendingItemTitle,
} from "../../utils/styles";
import { TrendingItemProps } from "../../utils/types";

export const TrendingItem = ({
    title,
    timesTweeted,
    isLastItem,
}: TrendingItemProps) => {
    return (
        <TrendingItemStyles
            style={
                isLastItem
                    ? {
                          borderBottomLeftRadius: "8px",
                          borderBottomRightRadius: "8px",
                      }
                    : undefined
            }
        >
            <TrendingItemTextStack>
                <TrendingItemTitle>{title}</TrendingItemTitle>
                <TrendingItemSubText>
                    {Intl.NumberFormat("en-US", {
                        notation: "compact",
                        maximumFractionDigits: 1,
                    }).format(timesTweeted)}{" "}
                    Tweets
                </TrendingItemSubText>
            </TrendingItemTextStack>
        </TrendingItemStyles>
    );
};
