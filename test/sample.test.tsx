import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { Page } from "../src/pages/Page";

describe("Page", () => {
	it("should render 'React Starter'", () => {
		render(<Page />);

		const textElement = screen.getByText("React Starter");

		expect(textElement).toBeInTheDocument();
	});
});
