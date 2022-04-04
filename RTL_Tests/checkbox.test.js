import { getByTestId, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import CheckBox from './checkbox'
import { fireEvent } from '@testing-library/react'; 
import { selectOptions } from '@testing-library/user-event/dist/select-options';

it("Test that the Check Boxes gets and processes input correctly", ()=>{
    //PREPARE
    render(<CheckBox/>)
    // screen.debug()

    //RETRIEVE OR DO SOMETHING
    const check = screen.getByTestId("check");
    const alsoCheck = screen.getByTestId("checkPlease");
    fireEvent.click(check);
    

    //TEST
    expect(check).toBeChecked();
    expect(alsoCheck).not.toBeChecked();
})
