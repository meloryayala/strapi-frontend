import styled, {css} from "styled-components";

const titleSizes = {
    small: (theme) => css`
    font-size: ${theme.fonts.sizes.small};
    `,
    medium: (theme) => css`
    font-size: ${theme.fonts.sizes.medium};
    `,
    large: (theme) => css`
    font-size: ${theme.fonts.sizes.large};
    `,
    huge: (theme) => css`
    font-size: ${theme.fonts.sizes.huge};
      ${mediaFont(theme)};
    `,
};

const mediaFont = (theme) => css`
@media ${theme.media.lteMedium} {
  font-size: ${theme.fonts.sizes.large};
}
`

const titleCase = (uppercase) => css`
  text-transform: ${uppercase ? 'uppercase' : 'none'};
`;

export const Title = styled.h1`
  ${({theme, colorDark, size,  uppercase}) => css`
    color: ${colorDark ? theme.colors.black : theme.colors.lightBg};

    ${titleSizes[size](theme)};
    ${titleCase(uppercase)};
  `}
`;