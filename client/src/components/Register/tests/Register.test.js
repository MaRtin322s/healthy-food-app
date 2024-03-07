import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Register from '../Register';
import { AuthContext } from '../../../contexts/UserContext';
import { BrowserRouter } from 'react-router-dom';

const mockContext = {
    userLogin: () => null,
    mockRegister: jest.fn()
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
    test('Render register form', () => {
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

    test('Register form submit with input values', () => {
        renderRegisterComponent();

        const firstNameInput = screen.getByPlaceholderText('Enter your first name...');
        const lastNameInput = screen.getByPlaceholderText('Enter your last name...');
        const emailInput = screen.getByPlaceholderText('Enter your email...');
        const imageInput = screen.getByLabelText('Image:');
        const backupWordInput = screen.getByPlaceholderText('Secret word...');
        const passwordInput = screen.getByPlaceholderText('Enter password...');
        const confirmPasswordInput = screen.getByPlaceholderText('Confirm your password...');

        fireEvent.change(firstNameInput, { target: { value: 'testfirstname' } });
        fireEvent.change(lastNameInput, { target: { value: 'testlastname' } });
        fireEvent.change(emailInput, { target: { value: 'testuser@mail.bg' } });
        fireEvent.change(imageInput, { target: { value: '' } });
        fireEvent.change(backupWordInput, { target: { value: 'testword' } });
        fireEvent.change(passwordInput, { target: { value: 'testpassword' } });
        fireEvent.change(confirmPasswordInput, { target: { value: 'testpassword' } });

        const submitButton = screen.getByText('Register');
        fireEvent.click(submitButton);
        mockContext.mockRegister('testfirstname', 'testlastname', 'testuser@mail.bg', '', 'testword', 'testpassword', 'testpassword');
        expect(mockContext.mockRegister).toHaveBeenCalledWith('testfirstname', 'testlastname', 'testuser@mail.bg', '', 'testword', 'testpassword', 'testpassword');
    });
});