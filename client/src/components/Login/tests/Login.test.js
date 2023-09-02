import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Login from '../Login';
import { AuthContext } from '../../../contexts/UserContext';
import { BrowserRouter } from 'react-router-dom';

const renderLoginComponent = () => {
    const mockContext = {
        userLogin: () => null,
    };
    render(
        <BrowserRouter>
            <Login />
        </BrowserRouter>,
        {
            wrapper: ({ children }) =>
                <AuthContext.Provider value={mockContext}>
                    {children}
                </AuthContext.Provider>
        }
    );
};

describe("Home component functionality tests", () => {
    test("Renders the login page main title", () => {
        renderLoginComponent();
        const heading = screen.getByText(/Login for users/i);
        expect(heading).toBeInTheDocument();
    });
    test("Renders the login page main title", () => {
        renderLoginComponent();
        const heading = screen.getByText(/Login Information/i);
        expect(heading).toBeInTheDocument();
    });
    test('Clicking the link navigates to a new page and changes the URL', () => {
        renderLoginComponent();
        const linkElement = screen.getByText('Click here');
        fireEvent.click(linkElement);
        expect(window.location.pathname).toBe('/password-reset');
    });
});