import { fireEvent, render, screen } from '@testing-library/react';
import { vi } from 'vitest';
import Input from './Input';

describe('Input', () => {
  it('renders input with label and placeholder', () => {
    render(<Input label="Name" placeholder="Enter your name" />);
    const label = screen.getByText('Name');
    const input = screen.getByPlaceholderText('Enter your name');
    expect(label).toBeInTheDocument();
    expect(input).toBeInTheDocument();
  });

  it('calls handleInputChange when input value changes', () => {
    const handleChange = vi.fn();
    render(<Input label="Name" handleInputChange={handleChange} />);
    const input = screen.getByTestId('input');
    fireEvent.change(input, { target: { value: 'John Doe' } });
    expect(handleChange).toHaveBeenCalledWith('John Doe');
  });

  it('calls onFocus when input is clicked', () => {
    const handleFocus = vi.fn();
    render(<Input label="Name" onFocus={handleFocus} />);
    const input = screen.getByTestId('input');
    fireEvent.click(input);
    expect(handleFocus).toHaveBeenCalled();
  });

  it('calls onBlur when input loses focus', () => {
    const handleBlur = vi.fn();
    render(<Input label="Name" onBlur={handleBlur} />);
    const input = screen.getByTestId('input');
    fireEvent.blur(input);
    expect(handleBlur).toHaveBeenCalled();
  });

  it('renders error message when error prop is provided', () => {
    render(<Input label="Name" error="Field is required" />);
    const errorMessage = screen.getByText('Field is required');
    expect(errorMessage).toBeInTheDocument();
  });

  it('renders disabled input when disabled prop is true', () => {
    render(<Input label="Name" disabled />);
    const input = screen.getByTestId('input');
    expect(input).toBeDisabled();
  });
});
