import Home from "./index";
import {renderTheme} from "../../styles/render-theme";
import {screen} from "@testing-library/react";
import {theme} from "../../styles/theme";


test('Background color', () => {
  renderTheme(<Home />);
  const headingParent = screen.getByRole('heading', { name: 'Hello!' }).parentElement;

  expect(headingParent).toHaveStyleRule('background-color', theme.colors.secondaryBg);
  expect(headingParent).toMatchSnapshot();
});

