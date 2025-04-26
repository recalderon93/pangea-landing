import ProjectItem from "./ProjectItem";
import { render, screen } from "@testing-library/react";

describe("Components/ProjectItem", () => {
  it("renders the project item with default props", () => {
    render(<ProjectItem projectId="1" />);

    const projectItem = screen.getByRole("button");
    expect(projectItem).toBeInTheDocument();
  });

  it.skip("renders the project item with custom image", () => {
    render(
      <ProjectItem
        projectId="1"
        image="https://example.com/custom-image.png"
      />,
    );

    const projectImage = screen.getByRole("img");
    expect(projectImage).toHaveAttribute(
      "src",
      "https://example.com/custom-image.png",
    );
  });
});
