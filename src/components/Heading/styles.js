import styled, {css} from "styled-components";
import {theme} from "../../styles/theme";

const titleSizes = {
    small: (theme) => css`
    font-size: ${theme.fonts.sizes.medium};
    `,
    medium: (theme) => css`
    font-size: ${theme.fonts.sizes.large};
    `,
    big: () => css`
    font-size: ${theme.fonts.sizes.xlarge};
    `,
    huge: (theme) => css`
    font-size: ${theme.fonts.sizes.xhuge};
      ${mediaFont(theme)};
    `,
};

const mediaFont = (theme) => css`
@media ${theme.media.lteMedium} {
  font-size: ${theme.fonts.sizes.xlarge};
}
`

const titleCase = (uppercase) => css`
  text-transform: ${uppercase ? 'uppercase' : 'none'};
`;

export const Title = styled.h1`
  ${({theme, colorDark, size, uppercase}) => css`
    color: ${colorDark ? theme.colors.black : theme.colors.lightBg};
    
    ${titleSizes[size](theme)};
    ${titleCase(uppercase)};
  `}
`;