import { render } from "@testing-library/react";
import DrivenByItem from "./DrivenByItem";

describe("Component/DrivenByItem", () => {
  const title = "This is a test title";
  const description = "This is a test description";

  it("Should Render title and description", () => {
    const { getByText } = render(
      <DrivenByItem title={title} description={description} />,
    );

    expect(getByText(title)).toBeInTheDocument();
    expect(getByText(description)).toBeInTheDocument();
  });
});
