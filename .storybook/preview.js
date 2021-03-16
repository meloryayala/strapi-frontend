import {ThemeProvider} from "styled-components";
import {GlobalStyles} from "../src/styles/global-styles";
import {theme} from "../src/styles/theme";

/** @type { import('@storybook/react').Preview } */
const preview = {
    parameters: {
        actions: {argTypesRegex: "^on[A-Z].*"},
        backgrounds: {
            default: 'light',
            values: [
                {
                    name: 'light',
                    value: theme.colors.lightBg,
                },
                {
                    name: 'dark',
                    value: theme.colors.darkBg,
                }
            ],
        },
        controls: {
            matchers: {
                color: /(background|color)$/i,
                date: /Date$/,
            },
        },
    },
};

export const decorators = [
    (Story) => (
        <ThemeProvider theme={theme}>
            <Story/>
            <GlobalStyles/>
        </ThemeProvider>
    )
];

export default preview;
