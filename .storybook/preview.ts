import type { Preview } from "@storybook/react";
import "../src/app/globals.css";
const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    playground: {
      storyId: "playground",
      // components: { ...MyComponentsLibrary, ...MyIconsLibrary },
      // autocompletions: generateAutocompletions(reactDocgenOutput),
      // editorTheme: "dark",
      // introCode: { jsx: `<div>Welcome to my Playground!</div>`, css: "" },
    },
  },
};

export default preview;
