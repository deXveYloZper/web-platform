import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../redux/rootReducer';
import { signOut } from 'firebase/auth';
import { auth } from '../firebaseConfig';
import { setUser } from '../redux/authSlice'; 
import styled from 'styled-components';
import { getSavedTemplates, deleteTemplate } from '../services/api';

interface Template {
  id: string;
  image: string;
  name: string;
  description: string;
}

const Dashboard: React.FC = () => {
  const [templates, setTemplates] = useState<Template[]>([]);
  const navigate = useNavigate();
  const user = useSelector((state: RootState) => state.auth.user);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!user) {
      navigate('/login'); // Redirect to login if not logged in
    } else {
      fetchSavedTemplates();
    }
  }, [user, navigate]);

  const fetchSavedTemplates = async () => {
    try {
      if (user) {
        const data = await getSavedTemplates(user);
        setTemplates(data);
      }
    } catch (error) {
      console.error('Error fetching templates:', error);
    }
  };

  const handleDelete = async (id: string) => {
    try {
      await deleteTemplate(id);
      setTemplates(templates.filter((template) => template.id !== id));
    } catch (error) {
      console.error('Error deleting template:', error);
    }
  };

  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        dispatch(setUser(null));
        navigate('/login');
      })
      .catch((error) => {
        console.error('Failed to logout:', error);
      });
  };

  return (
    <Container>
      <Header>
        <h1>Dashboard</h1>
        <button onClick={handleLogout}>Logout</button>
      </Header>
      <Sidebar>
        <ul>
          <li><a href="#saved-templates">Saved Templates</a></li>
          <li><a href="#account-settings">Account Settings</a></li>
        </ul>
      </Sidebar>
      <Main>
        <Section id="saved-templates">
          <h2>Saved Templates</h2>
          {templates.length > 0 ? (
            <TemplateGrid>
              {templates.map((template) => (
                <TemplateCard key={template.id}>
                  <img src={template.image} alt={template.name} />
                  <h3>{template.name}</h3>
                  <p>{template.description}</p>
                  <button onClick={() => navigate(`/template/${template.id}`)}>Edit</button>
                  <button onClick={() => handleDelete(template.id)}>Delete</button>
                </TemplateCard>
              ))}
            </TemplateGrid>
          ) : (
            <p>No templates saved.</p>
          )}
        </Section>
        <Section id="account-settings">
          <h2>Account Settings</h2>
          {/* Account settings form can be added here */}
        </Section>
      </Main>
    </Container>
  );
};

// Styled components
const Container = styled.div`
  display: flex;
  height: 100vh;
`;

const Header = styled.header`
  position: fixed;
  width: 100%;
  background: #fff;
  display: flex;
  justify-content: space-between;
  padding: 1rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  z-index: 10;
`;

const Sidebar = styled.aside`
  width: 250px;
  padding: 1rem;
  background: #f7f7f7;
  border-right: 1px solid #ddd;
  position: fixed;
  top: 60px; /* height of header */
  bottom: 0;
  ul {
    list-style: none;
    padding: 0;
    margin: 0;
    li {
      margin-bottom: 1rem;
    }
    a {
      text-decoration: none;
      color: #333;
      &:hover {
        text-decoration: underline;
      }
    }
  }
`;

const Main = styled.main`
  margin-left: 250px;
  padding: 2rem;
  width: calc(100% - 250px);
  margin-top: 60px; /* height of header */
`;

const Section = styled.section`
  margin-bottom: 2rem;
`;

const TemplateGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
`;

const TemplateCard = styled.div`
  border: 1px solid #ddd;
  padding: 1rem;
  border-radius: 8px;
  background: #fff;
  text-align: center;
  img {
    max-width: 100%;
    height: auto;
    border-radius: 8px;
  }
  h3 {
    margin-top: 1rem;
    font-size: 1.25rem;
  }
  p {
    margin: 1rem 0;
    color: #666;
  }
  button {
    padding: 0.5rem 1rem;
    margin-right: 0.5rem;
    border: none;
    border-radius: 4px;
    background-color: ${({ theme }) => theme.colors.primary};
    color: #fff;
    cursor: pointer;
    &:hover {
      background-color: ${({ theme }) => theme.colors.primaryDark};
    }
    &:last-child {
      background-color: #e74c3c;
      &:hover {
        background-color: #c0392b;
      }
    }
  }
`;

export default Dashboard;
