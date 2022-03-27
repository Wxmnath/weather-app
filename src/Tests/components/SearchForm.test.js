import { render } from "@testing-library/react";
import React from "react";
import Searchform from "../../Components/SerchForm";

describe("SearchForm", () => {
  const validProps = {
    searchText: "test search",
    setSearchText: () => {},
    onSubmit: () => {},
  };

  it("renders correctly", () => {
    const { asFragment } = render(
      <Searchform
        searchText={validProps.searchText}
        setSearchText={validProps.setSearchText}
        onSubmit={validProps.onSubmit}
      />
    );
    expect(asFragment()).toMatchSnapshot();
  });

  it("search button renders", () => {
    const { getByText } = render(
      <Searchform
        searchText={validProps.searchText}
        setSearchText={validProps.setSearchText}
        onSubmit={validProps.onSubmit}
      />
    );
    expect(getByText("Search")).toBeInTheDocument();
  });
});
