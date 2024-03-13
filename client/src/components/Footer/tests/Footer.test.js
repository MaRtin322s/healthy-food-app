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

    test("Render about link", () => {
        renderFooterComponent();
        const link = screen.getByText(/About us/i);
        expect(link).toBeInTheDocument();
    });

    test("Render faq link", () => {
        renderFooterComponent();
        const link = screen.getByText(/FAQ/i);
        expect(link).toBeInTheDocument();
    });

    test("Render tac link", () => {
        renderFooterComponent();
        const link = screen.getByText(/Terms and Conditions/i);
        expect(link).toBeInTheDocument();
    });

    test("Render contacts link", () => {
        renderFooterComponent();
        const link = screen.getByText(/Contacts/i);
        expect(link).toBeInTheDocument();
    });

    test("Render social media section", () => {
        renderFooterComponent();
        const section = screen.getByText(/Follow us on/i);
        expect(section).toBeInTheDocument();
    });

    test("Render application owner name", () => {
        renderFooterComponent();
        const name = screen.getByText(/Martin Sofroniev/i);
        expect(name).toBeInTheDocument();
    });

    test("Render application version", () => {
        renderFooterComponent();
        const version = screen.getByText(/v2.03/i);
        expect(version).toBeInTheDocument();
    });
});