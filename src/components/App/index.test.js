import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './index';

describe('App component', () => {
    it('should render the Dashboard component', () => {
        render(<App />);
        const dashboardComponent = screen.getByTestId('dashboard-component');
        expect(dashboardComponent).toBeInTheDocument();
    });

    // You can add more tests for other scenarios or specific behaviors of the App component here
});
