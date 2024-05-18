import React, { useEffect, useState } from 'react';
import { getFirestore, collection, getDocs, deleteDoc, doc } from 'firebase/firestore';
import styled from 'styled-components';

const db = getFirestore();

// Define the Template interface
interface Template {
  id: string;
  name: string;
  category: string;
  description: string;
  imageUrl: string;
}

// TemplateManagement component for managing templates in the database
const TemplateManagement: React.FC = () => {
  const [templates, setTemplates] = useState<Template[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Fetch templates from the database on component mount
  useEffect(() => {
    const fetchTemplates = async () => {
      setLoading(true);
      try {
        const querySnapshot = await getDocs(collection(db, 'templates'));
        const templatesData = querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() } as Template));
        setTemplates(templatesData);
        setError(null);
      } catch (err) {
        setError('Failed to fetch templates');
      }
      setLoading(false);
    };

    fetchTemplates();
  }, []);

  // Handle template deletion
  const handleDelete = async (id: string) => {
    setLoading(true);
    try {
      await deleteDoc(doc(db, 'templates', id));
      setTemplates(templates.filter(template => template.id !== id));
      setError(null);
    } catch (err) {
      setError('Failed to delete template');
    }
    setLoading(false);
  };

  return (
    <ManagementContainer>
      <Title>Template Management</Title>
      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <ErrorMessage>{error}</ErrorMessage>
      ) : (
        <TemplateList>
          {templates.map(template => (
            <TemplateItem key={template.id}>
              <TemplateImage src={template.imageUrl} alt={template.name} />
              <TemplateContent>
                <TemplateName>{template.name}</TemplateName>
                <TemplateDescription>{template.description}</TemplateDescription>
                <DeleteButton onClick={() => handleDelete(template.id)}>Delete</DeleteButton>
              </TemplateContent>
            </TemplateItem>
          ))}
        </TemplateList>
      )}
    </ManagementContainer>
  );
};

export default TemplateManagement;

// Styled components

// Container for the management page
const ManagementContainer = styled.div`
  padding: 2rem;
`;

// Title for the management section
const Title = styled.h2`
  margin-bottom: 1rem;
  color: ${({ theme }) => theme.colors.text};
`;

// Error message styling
const ErrorMessage = styled.p`
  color: red;
`;

// List container for templates
const TemplateList = styled.ul`
  list-style: none;
  padding: 0;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1rem;
`;

// Individual template item styling
const TemplateItem = styled.li`
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 8px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  background-color: #fff;
`;

// Template image styling
const TemplateImage = styled.img`
  width: 100%;
  height: auto;
`;

// Content container for template details
const TemplateContent = styled.div`
  padding: 1rem;
`;

// Template name styling
const TemplateName = styled.h3`
  font-size: 1.25rem;
  color: ${({ theme }) => theme.colors.text};
  margin-bottom: 0.5rem;
`;

// Template description styling
const TemplateDescription = styled.p`
  font-size: 1rem;
  color: ${({ theme }) => theme.colors.text};
  margin-bottom: 1rem;
`;

// Delete button styling
const DeleteButton = styled.button`
  padding: 0.5rem 1rem;
  background-color: #e74c3c;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #c0392b;
  }
`;
