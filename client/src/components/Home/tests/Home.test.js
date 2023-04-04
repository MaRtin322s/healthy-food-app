import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Home from '../Home';
import { AuthContext } from '../../../contexts/UserContext';
import { BrowserRouter } from 'react-router-dom';

describe("Home component tests", () => {
    test("Renders the application main title", () => {
        const mockRecipes = [
            { _id: '1', name: 'Recipe 1' },
            { _id: '2', name: 'Recipe 2' },
            { _id: '3', name: 'Recipe 3' },
        ];
        const mockContext = {
            getAllRecipes: jest.fn().mockResolvedValue(mockRecipes),
        };
        render(
            <BrowserRouter>
                <Home />
            </BrowserRouter>,
            {
                wrapper: ({ children }) =>
                    <AuthContext.Provider
                        value={mockContext}>
                        {children}
                    </AuthContext.Provider>
            }
        );
        const heading = screen.getByText(/NutriGit/i);
        expect(heading).toBeInTheDocument();
    });

    test('Renders the last 3 recipes section', async () => {
        const mockRecipes = [
            { _id: '1', name: 'Recipe 1' },
            { _id: '2', name: 'Recipe 2' },
            { _id: '3', name: 'Recipe 3' },
        ];
        const mockContext = {
            getAllRecipes: jest.fn().mockResolvedValue(mockRecipes),
        };
        render(
            <BrowserRouter>
                <Home />
            </BrowserRouter>,
            {
                wrapper: ({ children }) =>
                    <AuthContext.Provider
                        value={mockContext}>
                        {children}
                    </AuthContext.Provider>
            }
        );
        const lastRecipesHeadingElement = screen.getByText(/Last 3 recipes created/i);
        expect(lastRecipesHeadingElement).toBeInTheDocument();
    });

    test('Renders an about section', async () => {
        const mockRecipes = [
            { _id: '1', name: 'Recipe 1' },
            { _id: '2', name: 'Recipe 2' },
            { _id: '3', name: 'Recipe 3' },
        ];
        const mockContext = {
            getAllRecipes: jest.fn().mockResolvedValue(mockRecipes),
        };
        render(
            <BrowserRouter>
                <Home />
            </BrowserRouter>,
            {
                wrapper: ({ children }) =>
                    <AuthContext.Provider
                        value={mockContext}>
                        {children}
                    </AuthContext.Provider>
            }
        );
        const aboutHeading = screen.getByText(/Food is An Important Part Of A Balance Diet/i);
        expect(aboutHeading).toBeInTheDocument();
    });


    test('Should navigate to recipes catalog when button is clicked', () => {
        const mockRecipes = [
            { _id: '1', name: 'Recipe 1' },
            { _id: '2', name: 'Recipe 2' },
            { _id: '3', name: 'Recipe 3' },
        ];
        const mockContext = {
            getAllRecipes: jest.fn().mockResolvedValue(mockRecipes),
        };
        const { getByText } = render(
            <BrowserRouter>
                <Home />
            </BrowserRouter>,
            {
                wrapper: ({ children }) =>
                    <AuthContext.Provider
                        value={mockContext}>
                        {children}
                    </AuthContext.Provider>
            }
        );

        const link = getByText('Recipes Catalog');
        fireEvent.click(link);
        expect(window.location.pathname).toBe("/catalog-recipes");
    });
});