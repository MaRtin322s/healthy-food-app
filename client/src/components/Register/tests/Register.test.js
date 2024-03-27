import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Register from '../Register';
import { AuthContext } from '../../../contexts/UserContext';
import { BrowserRouter } from 'react-router-dom';

const mockContext = {
    userLogin: () => null,
    mockLogin: jest.fn()
};

const renderRegisterComponent = () => {
    render(
        <BrowserRouter>
            <Register />
        </BrowserRouter>,
        {
            wrapper: ({ children }) =>
                <AuthContext.Provider value={mockContext}>
                    {children}
                </AuthContext.Provider>
        }
    );
};

describe('Register component tests', () => {
    test('Render register page', () => {
        renderRegisterComponent();
        const heading = screen.getByText('Register new users');
        expect(heading).toBeInTheDocument();
    });
    test('Render register information', () => {
        renderRegisterComponent();
        const heading = screen.getByText('User Information');
        expect(heading).toBeInTheDocument();
    });
    test('Clicking link \'Log In\' navigates to the login page', () => {
        renderRegisterComponent();
        const linkElement = screen.getByText('Log in');
        fireEvent.click(linkElement);
        expect(window.location.pathname).toBe('/login');
    });
});