import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import BubblePage from "./BubblePage";
import {fetchColors as mockFetchColors} from '../api/fetchColors';
jest.mock("../api/fetchColors");

test("Fetches data and renders the bubbles", async() => {
  // Finish this test
  // mockFetchColors.mockResolvedValueOnce(colors);
  
  const {getByText} = render(<BubblePage/>);

  await waitFor(() => {
    getByText(/aliceblue/i);
  });
});


const colors = [
  {
    color: "aliceblue",
    code: {
      hex: "#f0f8ff"
    },
    id: 1
  },
  {
    color: "limegreen",
    code: {
      hex: "#99ddbc"
    },
    id: 2
  },
  {
    color: "aqua",
    code: {
      hex: "#00ffff"
    },
    id: 3
  },
  {
    color: "aquamarine",
    code: {
      hex: "#7fffd4"
    },
    id: 4
  },
  {
    color: "lilac",
    code: {
      hex: "#9a99dd"
    },
    id: 5
  },
  {
    color: "softpink",
    code: {
      hex: "#dd99ba"
    },
    id: 6
  }]