import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Comments } from '../Comments';
import { AuthContext } from '../../../contexts/UserContext';
import { BrowserRouter } from 'react-router-dom';

const mockContext = {
    user: {
        _id: '1'
    },
    mockCreateComment: jest.fn()
}

const renderCommentsComponent = () => {
    render(
        <BrowserRouter>
            <Comments />
        </BrowserRouter>,
        {
            wrapper: ({ children }) =>
                <AuthContext.Provider value={mockContext}>
                    {children}
                </AuthContext.Provider>
        }
    );
};

describe('Comments Component tests', () => {
    test('Render comments form', () => {
        renderCommentsComponent();
        const heading = screen.getByText('Add comment:');
        expect(heading).toBeInTheDocument();
    });
    test('Render all comments', () => {
        renderCommentsComponent();
        const heading = screen.getByText('Comments');
        expect(heading).toBeInTheDocument();
    });
    test('Login form submits with input values', () => {
        renderCommentsComponent();

        const userInput = screen.getByPlaceholderText('We value your feedback. Let us know your thoughts!');
        const submitButton = screen.getByText('POST');

        fireEvent.change(userInput, { target: { value: 'testuserinput' } });
        fireEvent.click(submitButton);
        mockContext.mockCreateComment('testuserinput');

        expect(mockContext.mockCreateComment).toHaveBeenCalledWith('testuserinput');
    });
});