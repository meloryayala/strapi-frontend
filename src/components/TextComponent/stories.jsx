import {TextComponent} from "./index";

export default {
    title: 'TextComponent',
    component: TextComponent,
    args: {
        children:
            `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ac molestie dui, vitae aliquam sapien. Integer nec mi eros. Mauris leo magna, lobortis consectetur malesuada sed, lobortis id ligula. Ut in erat eu arcu feugiat tristique. Suspendisse fermentum dolor vitae enim aliquet, eget suscipit lorem consectetur. Aliquam erat volutpat. Pellentesque dui dolor, euismod at vestibulum eget, rhoncus semper massa. Praesent malesuada eros sit amet metus vulputate, varius tincidunt sapien vulputate.`,
    },
    argTypes: {
        children: { type: 'string' },
    },
};

export const Template = (args) => {
    return (
        <div>
            <TextComponent {...args} />
        </div>
    );
};