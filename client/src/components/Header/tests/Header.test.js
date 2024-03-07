import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Header from '../Header';
import { AuthContext } from '../../../contexts/UserContext';
import { BrowserRouter } from 'react-router-dom';

const renderHeaderComponent = () => {
    const mockContext = {
        user: jest.fn().mockResolvedValue(mockUser),
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