import { extendTheme } from "@chakra-ui/react";

export const defaultTheme = extendTheme({
  colors: {
    accent: "#A086D4",
  },
  styles: {
    global: {
      body: {
        backgroundColor: ["#E5E5E5", "#fff"],
      },
    },
  },

  fonts: {
    heading:
      "Epilogue, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif",
    body: "Epilogue, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif",
  },
});
