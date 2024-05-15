import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../redux/rootReducer';
import { setPrimaryColor, setFontFamily, setLayout, setImage } from '../redux/themeSlice';

const CustomizationPanel: React.FC = () => {
  const dispatch = useDispatch();
  const { primaryColor, fontFamily, layout, image } = useSelector((state: RootState) => state.theme);

  // Handle color change
  const handleColorChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setPrimaryColor(event.target.value));
  };

  // Handle font change
  const handleFontChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    dispatch(setFontFamily(event.target.value));
  };

  // Handle layout change
  const handleLayoutChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    dispatch(setLayout(event.target.value));
  };

  // Handle image change
  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      const file = event.target.files[0];
      const reader = new FileReader();
      reader.onload = () => {
        dispatch(setImage(reader.result as string));
      };
      reader.readAsDataURL(file);
    }
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
      <Label>
        Layout:
        <Select value={layout} onChange={handleLayoutChange}>
          <option value="layout1">Layout 1</option>
          <option value="layout2">Layout 2</option>
        </Select>
      </Label>
      <Label>
        Background Image:
        <Input type="file" accept="image/*" onChange={handleImageChange} />
        {image && <img src={image} alt="Background" style={{ width: '100%', marginTop: '10px' }} />}
      </Label>
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
