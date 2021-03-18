import {screen} from "@testing-library/react";
import {renderTheme} from "../../styles/render-theme";
import {TextComponent} from "./index";

describe('<TextComponent />', () => {

    it('should render a text', function () {
        renderTheme(<TextComponent>Children</TextComponent>);
        const p = screen.getByText('Children');

        expect(p).toBeInTheDocument();
    });

    it('should render a text', function () {
        const { container } = renderTheme(<TextComponent>Children</TextComponent>);
        expect(container.firstChild).toMatchSnapshot();
    });
})