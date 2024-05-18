import { useState } from 'react';
import { getFirestore, collection, addDoc } from 'firebase/firestore';
import { getStorage, ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import styled from 'styled-components';

// Initialize Firestore and Storage
const db = getFirestore();
const storage = getStorage();

// TemplateUpload component for uploading new templates
const TemplateUpload: React.FC = () => {
  const [name, setName] = useState('');
  const [category, setCategory] = useState('');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState<File | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Handle form submission and template upload
  const handleUpload = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !category || !description || !image) {
      setError('All fields are required');
      return;
    }
    setLoading(true);
    try {
      // Upload image to Firebase Storage
      const imageRef = ref(storage, `templates/${image.name}`);
      await uploadBytes(imageRef, image);
      const imageUrl = await getDownloadURL(imageRef);

      // Add template data to Firestore
      await addDoc(collection(db, 'templates'), {
        name,
        category,
        description,
        imageUrl,
      });

      // Reset form fields
      setName('');
      setCategory('');
      setDescription('');
      setImage(null);
      setError(null);
    } catch (err) {
      setError('Failed to upload template');
    }
    setLoading(false);
  };

  return (
    <Form onSubmit={handleUpload}>
      <FormGroup>
        <Label>Name:</Label>
        <Input type="text" value={name} onChange={(e) => setName(e.target.value)} />
      </FormGroup>
      <FormGroup>
        <Label>Category:</Label>
        <Input type="text" value={category} onChange={(e) => setCategory(e.target.value)} />
      </FormGroup>
      <FormGroup>
        <Label>Description:</Label>
        <Textarea value={description} onChange={(e) => setDescription(e.target.value)} />
      </FormGroup>
      <FormGroup>
        <Label>Image:</Label>
        <Input type="file" accept="image/*" onChange={(e) => setImage(e.target.files?.[0] || null)} />
      </FormGroup>
      <Button type="submit" disabled={loading}>Upload Template</Button>
      {error && <ErrorMessage>{error}</ErrorMessage>}
    </Form>
  );
};

export default TemplateUpload;

// Styled components

// Form container
const Form = styled.form`
  max-width: 600px;
  margin: 0 auto;
  padding: 2rem;
  background-color: ${({ theme }) => theme.colors.background};
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

// Form group for input fields
const FormGroup = styled.div`
  margin-bottom: 1.5rem;
`;

// Label for input fields
const Label = styled.label`
  display: block;
  margin-bottom: 0.5rem;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.text};
`;

// Input field styling
const Input = styled.input`
  width: 100%;
  padding: 0.75rem;
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 4px;
  font-size: 1rem;
  color: ${({ theme }) => theme.colors.text};
  background-color: ${({ theme }) => theme.colors.background};
  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.primary};
  }
`;

// Textarea styling
const Textarea = styled.textarea`
  width: 100%;
  padding: 0.75rem;
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 4px;
  font-size: 1rem;
  color: ${({ theme }) => theme.colors.text};
  background-color: ${({ theme }) => theme.colors.background};
  resize: vertical;
  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.primary};
  }
`;

// Button styling
const Button = styled.button`
  width: 100%;
  padding: 0.75rem;
  font-size: 1rem;
  color: #fff;
  background-color: ${({ theme }) => theme.colors.primary};
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s;
  &:hover {
    background-color: ${({ theme }) => theme.colors.primaryDark};
  }
  &:disabled {
    background-color: ${({ theme }) => theme.colors.border};
    cursor: not-allowed;
  }
`;

// Error message styling
const ErrorMessage = styled.p`
  color: red;
  margin-top: 1rem;
`;

