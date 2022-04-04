
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import TextForm from './textArea';

it("Test that the text is updated when typing", ()=>{
    //PREPARE
    render(<TextForm/>)

    //RETRIEVE OR DO SOMETHING
    const textarea = screen.getByTestId("textarea1");
    const notesarea = screen.getByTestId("textarea2");
    userEvent.type(textarea, "Lorem Ipsum and whatnot");
  

    //TEST
    expect(textarea).toHaveValue("Lorem Ipsum and whatnot");
    expect(notesarea).not.toContain(/Lorem Ipsum/);
})