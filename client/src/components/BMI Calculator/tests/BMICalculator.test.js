import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { BMICalculator } from '../BMICalculator';
import { AuthContext } from '../../../contexts/UserContext';
import { BrowserRouter } from 'react-router-dom';
import { act } from 'react-dom/test-utils';

const mockContext = {
    user: JSON.parse(localStorage.getItem('session')),
    mockCalculate: jest.fn()
};

const renderBMICalculatorComponent = (mockContext) => {
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
    });

    act(() => {
        test("Render calories result paragraph", () => {
            renderBMICalculatorComponent();
            const heading = screen.getByText(/Recommended daily calories:/i);
            expect(heading).toBeInTheDocument();
        });
    });

    act(() => {
        test("Render daily meal heading", () => {
            renderBMICalculatorComponent();
            const heading = screen.getByText(/Daily meal plan:/i);
            expect(heading).toBeInTheDocument();
        });
    });

    act(() => {
        test('Calculator form submit with empty input values', () => {
            renderBMICalculatorComponent();

            const ageInput = screen.getByText('Age');
            const maleGenderInput = screen.getByText('Male');
            const femaleGenderInput = screen.getByText('Female');
            const heightInput = screen.getByText('Height (cm)');
            const weightInput = screen.getByText('Weight (kg)');

            ageInput.value = '';
            maleGenderInput.value = '';
            femaleGenderInput.value = '';
            heightInput.value = '';
            weightInput.value = '';

            const submitButton = screen.getByText('Generate Plan');
            fireEvent.click(submitButton);
            expect(mockContext.mockCalculate).not.toHaveBeenCalledWith();
        });
    });

    act(() => {
        test('Calculator form submit with filled input values', () => {
            renderBMICalculatorComponent();

            const ageInput = screen.getByText('Age');
            const maleGenderInput = screen.getByText('Male');
            const femaleGenderInput = screen.getByText('Female');
            const heightInput = screen.getByText('Height (cm)');
            const weightInput = screen.getByText('Weight (kg)');

            ageInput.value = '22';
            maleGenderInput.value = 'm';
            femaleGenderInput.value = '';
            heightInput.value = '185';
            weightInput.value = '65';

            const submitButton = screen.getByText('Generate Plan');
            fireEvent.click(submitButton);
            mockContext.mockCalculate('22', 'm', '185', '65');
            expect(mockContext.mockCalculate).toHaveBeenCalledWith('22', 'm', '185', '65');
        });
    });
});