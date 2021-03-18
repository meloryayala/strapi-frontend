import {renderTheme} from "../../styles/render-theme";
import {Heading} from "././index";
import {screen} from "@testing-library/react";
import {theme} from "../../styles/theme";

describe('<Heading />', () => {
    it('should render with default values', function () {
        renderTheme(<Heading>text</Heading>);
        const heading = screen.getByRole('heading', {name: 'text'});

        expect(heading).toHaveStyleRule('color', `${theme.colors.black}`);
        expect(heading).toHaveStyleRule('font-size', `${theme.fonts.sizes.large}`);
        expect(heading).toHaveStyleRule('text-transform', 'none');
    });

    it('should render with white color', function () {
        renderTheme(<Heading colorDark={false}>text</Heading>);
        const heading = screen.getByRole('heading', {name: 'text'});

        expect(heading).toHaveStyleRule('color', `${theme.colors.lightBg}`)
    });

    it('should render with correct heading size small', function () {
        renderTheme(<Heading size='small'>text</Heading>);
        const heading = screen.getByRole('heading', {name: 'text'});

        expect(heading).toHaveStyleRule('font-size', `${theme.fonts.sizes.small}`);
    });

    it('should render with correct heading size medium', function () {
        renderTheme(<Heading size='medium'>text</Heading>);
        const heading = screen.getByRole('heading', {name: 'text'});

        expect(heading).toHaveStyleRule('font-size', `${theme.fonts.sizes.medium}`);
    });

    it('should render with correct heading size large', function () {
        renderTheme(<Heading size='large'>text</Heading>);
        const heading = screen.getByRole('heading', {name: 'text'});

        expect(heading).toHaveStyleRule('font-size', `${theme.fonts.sizes.large}`);
    });

    it('should render with correct heading size huge', function () {
        renderTheme(<Heading size='huge'>text</Heading>);
        const heading = screen.getByRole('heading', {name: 'text'});

        expect(heading).toHaveStyleRule('font-size', `${theme.fonts.sizes.huge}`);
    });

    it('should render correct font-size when using mobile', function () {
        renderTheme(<Heading size='huge'>text</Heading>);
        const heading = screen.getByRole('heading', {name: 'text'});

        expect(heading).toHaveStyleRule('font-size', `${theme.fonts.sizes.huge}`);
    });

    it('should render with default values', function () {
        renderTheme(<Heading uppercase>text</Heading>);
        const heading = screen.getByRole('heading', {name: 'text'});

        expect(heading).toHaveStyleRule('text-transform', 'uppercase');

    });

    it('should render correct heading element', function () {
        const { container } = renderTheme(<Heading as='h6'>text</Heading>);
        const h6 = container.querySelector('h6');

        expect(h6.tagName.toLowerCase()).toBe('h6');
    });
});