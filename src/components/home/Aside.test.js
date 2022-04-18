import "@testing-library/jest-dom/extend-expect";
import { render } from "@testing-library/react";
import Aside from "./Aside";

test('renders content',() => {
    const aside = {
        content: "this is a test aside",
        important : true
    }

    const component =  render(<Aside />)

    component.findByText("Kitchen")
    console.log(component)
})


