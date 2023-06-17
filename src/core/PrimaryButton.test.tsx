/** @format */

import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import PrimaryButton from './PrimaryButton';
import { MemoryRouter } from 'react-router-dom';
import { vi } from 'vitest';


it('renders butotn', () => {
	render(<PrimaryButton />);
});

describe('PrimaryButton', () => {
  it('renders button with label', () => {
    render(<PrimaryButton label="Submit" />);
    const button = screen.getByText('Submit');
    expect(button).toBeInTheDocument();
  });

  it('executes onClick handler when clicked', () => {
    const handleClick = vi.fn();
    render(<PrimaryButton label="Click me" onClick={handleClick} />);
    const button = screen.getByText('Click me');
    fireEvent.click(button);
    expect(handleClick).toHaveBeenCalled();
  });

  it('renders Link when "link" prop is true', () => {
    render(
      <MemoryRouter>
        <PrimaryButton label="Go to Home" link to="/" />
      </MemoryRouter>
    );
    const link = screen.getByText('Go to Home');
    expect(link.tagName).toBe('A');
    expect(link).toHaveAttribute('href', '/');
  });

  it('renders disabled button when "disabled" prop is true', () => {
    render(<PrimaryButton label="Submit" disabled />);
    const button = screen.getByText('Submit');
    expect(button).toBeDisabled();
  });
});
