import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../redux/rootReducer';
import {
  setPrimaryColor,
  setSecondaryColor,
  setFontFamily,
  setFontSize,
  setLayout,
  setImage,
  saveCustomizations,
  resetCustomizations,
} from '../redux/themeSlice';
import styled from 'styled-components';
import { useState, useEffect } from 'react';
import Tooltip from '@mui/material/Tooltip';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';

const CustomizationPanel: React.FC = () => {
  // Set up Redux dispatch
  const dispatch = useDispatch();
  
  // Retrieve current theme settings from the Redux store
  const { primaryColor, secondaryColor, fontFamily, fontSize, layout, image } = useSelector((state: RootState) => state.theme);

  // Local state to handle live preview of customizations
  const [currentColor, setCurrentColor] = useState(primaryColor);
  const [currentSecondaryColor, setCurrentSecondaryColor] = useState(secondaryColor);
  const [currentFont, setCurrentFont] = useState(fontFamily);
  const [currentFontSize, setCurrentFontSize] = useState(fontSize);
  const [currentLayout, setCurrentLayout] = useState(layout);
  const [currentImage, setCurrentImage] = useState(image);

  // Sync local state with Redux state when theme settings change
  useEffect(() => {
    setCurrentColor(primaryColor);
    setCurrentSecondaryColor(secondaryColor);
    setCurrentFont(fontFamily);
    setCurrentFontSize(fontSize);
    setCurrentLayout(layout);
    setCurrentImage(image);
  }, [primaryColor, secondaryColor, fontFamily, fontSize, layout, image]);

  // Handle primary color change and dispatch action to update Redux state
  const handleColorChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCurrentColor(event.target.value);
    dispatch(setPrimaryColor(event.target.value));
  };

  // Handle secondary color change and dispatch action to update Redux state
  const handleSecondaryColorChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCurrentSecondaryColor(event.target.value);
    dispatch(setSecondaryColor(event.target.value));
  };

  // Handle font change and dispatch action to update Redux state
  const handleFontChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setCurrentFont(event.target.value);
    dispatch(setFontFamily(event.target.value));
  };

  // Handle font size change and dispatch action to update Redux state
  const handleFontSizeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCurrentFontSize(event.target.value);
    dispatch(setFontSize(event.target.value));
  };

  // Handle layout change and dispatch action to update Redux state
  const handleLayoutChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setCurrentLayout(event.target.value);
    dispatch(setLayout(event.target.value));
  };

  // Handle image change, convert to Base64, and dispatch action to update Redux state
  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      const file = event.target.files[0];
      const reader = new FileReader();
      reader.onload = () => {
        if (reader.result) {
          setCurrentImage(reader.result as string);
          dispatch(setImage(reader.result as string));
        }
      };
      reader.readAsDataURL(file);
    }
  };

  // Dispatch save action to persist current customizations
  const handleSave = () => {
    dispatch(saveCustomizations({
      primaryColor: currentColor,
      secondaryColor: currentSecondaryColor,
      fontFamily: currentFont,
      fontSize: currentFontSize,
      layout: currentLayout,
      image: currentImage,
    }));
  };

  // Dispatch reset action to revert to default settings
  const handleReset = () => {
    dispatch(resetCustomizations());
  };

  return (
    <Panel>
      <Title>Customize Your Template</Title>
      <Section>
        <Label>
          Primary Color:
          <Input type="color" value={currentColor} onChange={handleColorChange} />
        </Label>
        <Label>
          Secondary Color:
          <Input type="color" value={currentSecondaryColor} onChange={handleSecondaryColorChange} />
        </Label>
        <Label>
          Font Family:
          <Select value={currentFont} onChange={handleFontChange}>
            <option value="Arial">Arial</option>
            <option value="Georgia">Georgia</option>
            <option value="Helvetica">Helvetica</option>
            <option value="Times New Roman">Times New Roman</option>
          </Select>
        </Label>
        <Label>
          Font Size:
          <Input type="number" value={currentFontSize} onChange={handleFontSizeChange} />
        </Label>
        <Label>
          Layout:
          <Select value={currentLayout} onChange={handleLayoutChange}>
            <option value="layout1">Layout 1</option>
            <option value="layout2">Layout 2</option>
          </Select>
        </Label>
        <Label>
          Background Image:
          <Input type="file" accept="image/*" onChange={handleImageChange} />
          {currentImage && <PreviewImage src={currentImage} alt="Background" />}
        </Label>
      </Section>
      <ButtonContainer>
        <Button onClick={handleSave}>Save</Button>
        <Button onClick={handleReset}>Reset</Button>
      </ButtonContainer>
      <Tooltip title="Use these tools to customize the template to your preference.">
        <HelpIcon />
      </Tooltip>
    </Panel>
  );
};

// Styled components
const Panel = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem;
  border: 1px solid #ccc;
  border-radius: 8px;
  width: 250px;
`;

const Title = styled.h2`
  margin-bottom: 1rem;
`;

const Section = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 1rem;
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

const PreviewImage = styled.img`
  margin-top: 0.5rem;
  width: 100%;
  border-radius: 8px;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 1rem;
`;

const Button = styled.button`
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  background-color: ${({ theme }) => theme.colors.primary};
  color: #fff;
  &:hover {
    background-color: ${({ theme }) => theme.colors.primaryDark};
  }
`;

const HelpIcon = styled(HelpOutlineIcon)`
  color: ${({ theme }) => theme.colors.text};
  cursor: pointer;
`;

export default CustomizationPanel;
