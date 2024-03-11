import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import NotFound from '../NotFound';
import { AuthContext } from '../../../contexts/UserContext';
import { BrowserRouter } from 'react-router-dom';

const renderNotFoundComponent = () => {
    const mockContext = {};
    render(
        <BrowserRouter>
            <NotFound />
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

describe("Not Found page component functionality tests", () => {
    test("Render not found page", () => {
        renderNotFoundComponent();
        const heading = screen.getByText(/404 - PAGE NOT FOUND/i);
        expect(heading).toBeInTheDocument();
    });

    test("Render go to home page link", () => {
        renderNotFoundComponent();
        const heading = screen.getByText(/GO TO HOMEPAGE/i);
        expect(heading).toBeInTheDocument();
    });

    test("Render sad emoji", () => {
        renderNotFoundComponent();
        const image = screen.getByAltText(/oops/i);
        expect(image).toBeInTheDocument()
    });
});