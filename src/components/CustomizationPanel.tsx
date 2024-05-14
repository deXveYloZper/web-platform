import React from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../redux/rootReducer';
import { setPrimaryColor, setFontFamily } from '../redux/themeSlice';

const CustomizationPanel: React.FC = () => {
  const dispatch = useDispatch();
  const { primaryColor, fontFamily } = useSelector((state: RootState) => state.theme);

  const handleColorChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setPrimaryColor(event.target.value));
  };

  const handleFontChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    dispatch(setFontFamily(event.target.value));
  };

  return (
    <Panel>
      <Label>
        Primary Color:
        <Input type="color" value={primaryColor} onChange={handleColorChange} />
      </Label>
      <Label>
        Font Family:
        <Select value={fontFamily} onChange={handleFontChange}>
          <option value="Arial">Arial</option>
          <option value="Georgia">Georgia</option>
          <option value="Helvetica">Helvetica</option>
          <option value="Times New Roman">Times New Roman</option>
        </Select>
      </Label>
    </Panel>
  );
};

const Panel = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem;
  border: 1px solid #ccc;
  border-radius: 8px;
  width: 250px;
`;

const Label = styled.label`
  margin-bottom: 1rem;
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  margin-top: 0.5rem;
`;

const Select = styled.select`
  margin-top: 0.5rem;
`;

export default CustomizationPanel;
