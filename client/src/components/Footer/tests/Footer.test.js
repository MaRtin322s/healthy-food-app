import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Footer from '../Footer';
import { AuthContext } from '../../../contexts/UserContext';
import { BrowserRouter } from 'react-router-dom';

const renderFooterComponent = () => {
    const mockContext = {
        user: jest.fn().mockResolvedValue(),
    };

    render(
        <BrowserRouter>
            <Footer />
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
    test("Render footer component", () => {
        renderFooterComponent();
        const heading = screen.getByText(/NutriGit/i);
        expect(heading).toBeInTheDocument();
    });

    test("Render about link component", () => {
        renderFooterComponent();
        const link = screen.getByText(/About us/i);
        expect(link).toBeInTheDocument();
    });

    test("Render faq link component", () => {
        renderFooterComponent();
        const link = screen.getByText(/FAQ/i);
        expect(link).toBeInTheDocument();
    });

    test("Render tac link component", () => {
        renderFooterComponent();
        const link = screen.getByText(/Terms and Conditions/i);
        expect(link).toBeInTheDocument();
    });

    test("Render contacts link component", () => {
        renderFooterComponent();
        const link = screen.getByText(/Contacts/i);
        expect(link).toBeInTheDocument();
    });
});