import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Header from '../Header';
import { AuthContext } from '../../../contexts/UserContext';
import { BrowserRouter } from 'react-router-dom';

const renderHeaderComponent = () => {
    const mockContext = {
        user: jest.fn().mockResolvedValue(),
    };

    render(
        <BrowserRouter>
            <Header />
        </BrowserRouter>,
        {
            wrapper: ({ children }) =>
                <AuthContext.Provider
                    value={mockContext}>
                    {children}
                </AuthContext.Provider>
        }
    );
};

describe("Home page component functionality tests", () => {
    test("Render header component", () => {
        renderHeaderComponent();
        const link = screen.getByText(/Home/i);
        expect(link).toBeInTheDocument();
    });

    test("Render header component for guests", () => {
        renderHeaderComponent();
        const link = screen.getByText(/Log In/i);
        expect(link).toBeInTheDocument();
    });
});