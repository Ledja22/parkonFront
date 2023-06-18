import React from 'react';
import Select from 'react-select';

const SelectInput = ({
  selectedOptionState,
  options = [],
  placeholder = 'Select...',
  formatOptionLabel = false,
  onChange = null,
  maxHeight = null,
  isClearable = true,
  minWidth,
  disabled = false,
  error,
  ...props
}: any) => {
  const [selectedOption, setSelectedOption] = selectedOptionState;

  const styles = {
    control: (base: any) => ({
      ...base,
      fontSize: '14px',
      lineHeight: '20px',
      borderRadius: '7px',
      borderColor: '#E5E7EB',
      padding: '2px',
      minWidth,
    }),
    menu: (provided: any, state: any) => ({
      ...provided,
      fontSize: '14px',
    }),
    menuList: (styles: any) => {
      return {
        ...styles,
        maxHeight: maxHeight ? maxHeight : null,
      };
    },
  };

  const handleChange = (selectedOption: any) => {
    setSelectedOption(selectedOption);
    if (onChange) {
      onChange();
    }
  };

  return (
    <div {...props}>
      <Select
        placeholder={placeholder}
        defaultValue={options[0]}
        closeMenuOnSelect={true}
        formatOptionLabel={formatOptionLabel}
        options={options}
        styles={styles}
        onChange={handleChange}
        value={selectedOption}
        isClearable={isClearable}
        isDisabled={disabled}
      />
      {error && <small className="text-danger">{error}</small>}
    </div>
  );
};

export default SelectInput;