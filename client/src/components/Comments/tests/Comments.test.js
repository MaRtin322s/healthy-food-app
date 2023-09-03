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
    test('Render comments form', () => {
        renderCommentsComponent();
        const heading = screen.getByText('Comments');
        expect(heading).toBeInTheDocument();
    });
});