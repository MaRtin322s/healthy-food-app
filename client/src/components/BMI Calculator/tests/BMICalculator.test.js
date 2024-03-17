import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { BMICalculator } from '../BMICalculator';
import { AuthContext } from '../../../contexts/UserContext';
import { BrowserRouter } from 'react-router-dom';
import { act } from 'react-dom/test-utils';

const renderBMICalculatorComponent = () => {
    const mockContext = {
        user: JSON.parse(localStorage.getItem('session'))
    };
    render(
        <BrowserRouter>
            <BMICalculator />
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

describe("BMI Calculator page component functionality tests", () => {
    act(() => {
        test("Render BMI Calculator component", () => {
            renderBMICalculatorComponent();
            const heading = screen.getByText(/Generate Plan/i);
            expect(heading).toBeInTheDocument();
        });
    })
});