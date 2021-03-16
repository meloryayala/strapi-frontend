import {Heading} from "./index";

export default {
    title: 'Heading',
    component: Heading,
    args: {
        children: 'This is a Heading h1',
    },
    argTypes: {
        children: {type: 'string'},
    },
};

export const Light = (args) => <Heading {...args} />;
export const Dark = (args) => <Heading {...args} />;


Light.parameters = {
    backgrounds: {
        default: 'light',
    },
};

Dark.parameters = {
    backgrounds: {
        default: 'dark',
    }
}

Dark.args = {
    colorDark: false,
}