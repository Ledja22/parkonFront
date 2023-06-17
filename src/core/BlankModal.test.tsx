import { fireEvent, render, screen } from '@testing-library/react';
import BlankModal from './BlankModal';
import { vi } from 'vitest';

describe('BlankModal', () => {
  const mockSetOpenModal = vi.fn();
  const mockOnClose = vi.fn();

  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('renders modal with title and children', () => {
    render(
      <BlankModal
        setOpenModal={mockSetOpenModal}
        title="Test Modal"
        icon="Modal Icon"
      >
        <p>Modal Content</p>
      </BlankModal>
    );

    const modal = screen.getByTestId('blank-modal');
    const modalTitle = screen.getByText('Test Modal');
    const modalContent = screen.getByText('Modal Content');
    const closeButton = screen.getByText('Close');

    expect(modal).toBeInTheDocument();
    expect(modalTitle).toBeInTheDocument();
    expect(modalContent).toBeInTheDocument();
    expect(closeButton).toBeInTheDocument();
  });

  it('calls setOpenModal and onClose when Close button is clicked', () => {
    render(
      <BlankModal
        setOpenModal={mockSetOpenModal}
        onClose={mockOnClose}
        title="Test Modal"
      >
        <p>Modal Content</p>
      </BlankModal>
    );

    const closeButton = screen.getByText('Close');
    fireEvent.click(closeButton);

    expect(mockSetOpenModal).toHaveBeenCalledWith(false);
    expect(mockOnClose).toHaveBeenCalled();
  });

  it('renders additional buttons', () => {
    const mockButton1 = <button key="button1">Button 1</button>;
    const mockButton2 = <button key="button2">Button 2</button>;

    render(
      <BlankModal
        setOpenModal={mockSetOpenModal}
        title="Test Modal"
        otherButtons={[mockButton1, mockButton2]}
      >
        <p>Modal Content</p>
      </BlankModal>
    );

    const button1 = screen.getByText('Button 1');
    const button2 = screen.getByText('Button 2');

    expect(button1).toBeInTheDocument();
    expect(button2).toBeInTheDocument();
  });
});
