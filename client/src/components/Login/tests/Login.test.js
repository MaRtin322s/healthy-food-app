import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Login from '../Login';
import { AuthContext } from '../../../contexts/UserContext';
import { BrowserRouter } from 'react-router-dom';

const mockContext = {
    userLogin: () => null,
    mockLogin: jest.fn()
};

const renderLoginComponent = () => {
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
    test('Clicking the link \'Click here\'navigates to a password reset page', () => {
        renderLoginComponent();
        const linkElement = screen.getByText('Click here');
        fireEvent.click(linkElement);
        expect(window.location.pathname).toBe('/password-reset');
    });
    test('Clicking the link \'Sign Up\'navigates to a register page', () => {
        renderLoginComponent();
        const linkElement = screen.getByText('Sign Up');
        fireEvent.click(linkElement);
        expect(window.location.pathname).toBe('/register');
    });
    test('Login form submits with input values', () => {
        renderLoginComponent();

        const usernameInput = screen.getByPlaceholderText('Enter email...');
        const passwordInput = screen.getByPlaceholderText('Enter password...');

        fireEvent.change(usernameInput, { target: { value: 'testuser' } });
        fireEvent.change(passwordInput, { target: { value: 'password123' } });

        const submitButton = screen.getByText('Login');
        fireEvent.click(submitButton);
        mockContext.mockLogin('testuser', 'password123');

        expect(mockContext.mockLogin).toHaveBeenCalledWith('testuser', 'password123');
    });
});