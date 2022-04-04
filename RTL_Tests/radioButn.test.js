import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import RadioBtn from './radioButn';
import { fireEvent } from '@testing-library/react'; 
import { selectOptions } from '@testing-library/user-event/dist/select-options';

it("Test that the Radio Button gets and processes input correctly", ()=>{
    //PREPARE
    render(<RadioBtn/>)
    // screen.debug()

    //RETRIEVE OR DO SOMETHING
    const radio = screen.getByTestId("chaosbtn")
    fireEvent.click(radio);

    //TEST
    expect(radio).toBeChecked();
    expect(screen.getByTestId("result")).toContainHTML("Chaos")
})
