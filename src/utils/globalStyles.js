import { createGlobalStyle } from "styled-components";
import { COLORS } from "utils/colors";

export const GlobalStyles = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;

    ::-webkit-scrollbar {
      width: 8px;
    }

    ::-webkit-scrollbar-track {
      background: ${COLORS.white};
    }

    ::-webkit-scrollbar-thumb {
      background: ${COLORS.green};
      border-radius: 4px;
    }
  }
`;
