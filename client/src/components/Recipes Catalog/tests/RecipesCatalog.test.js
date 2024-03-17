import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import RecipesCatalog from '../RecipesCatalog';
import { AuthContext } from '../../../contexts/UserContext';
import { BrowserRouter } from 'react-router-dom';

const renderRecipesCatalogComponent = () => {
    const mockContext = {
        user: {
            firstName: 'Test',
            lastName: 'LastName',
            email: 'test@email.bg',
            _id: '345534jtmg354t3tg5mo',
            token: 'sdfigifsjigjibgvibvmibdmibvm34r5t43g34g'
        }
    };
    render(
        <BrowserRouter>
            <RecipesCatalog />
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

describe("Recipes Catalog component functionality tests", () => {
    test("Render recipes catalog page", () => {
        renderRecipesCatalogComponent();
        const heading = screen.getByText(/Current Page: 1/i);
        expect(heading).toBeInTheDocument();
    });
});