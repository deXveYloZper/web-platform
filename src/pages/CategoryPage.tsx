import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import TemplateGrid from '../components/TemplateGrid';
import { getTemplatesByCategory } from '../services/api';

interface Template {
  id: string;
  image: string;
  name: string;
  description: string;
}

const CategoryPage: React.FC = () => {
  const { category } = useParams<{ category: string }>();
  const [templates, setTemplates] = useState<Template[]>([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState<string>('');
  const [sort, setSort] = useState<string>('relevance');
  const [search, setSearch] = useState<string>('');

  useEffect(() => {
    const fetchTemplates = async () => {
      try {
        const data = await getTemplatesByCategory(category, filter, sort, search);
        setTemplates(data);
      } catch (error) {
        console.error('Error fetching templates:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchTemplates();
  }, [category, filter, sort, search]);

  const handleFilterChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setFilter(event.target.value);
  };

  const handleSortChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSort(event.target.value);
  };

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value);
  };

  if (loading) {
    return <Loading>Loading...</Loading>;
  }

  return (
    <Container>
      <Header>{category} Templates</Header>
      <Content>
        <Sidebar>
          <FilterSection>
            <FilterTitle>Filter by</FilterTitle>
            <Select onChange={handleFilterChange}>
              <option value="">All</option>
              <option value="popularity">Popularity</option>
              <option value="newest">Newest</option>
              <option value="features">Features</option>
            </Select>
          </FilterSection>
          <SortSection>
            <SortTitle>Sort by</SortTitle>
            <Select onChange={handleSortChange}>
              <option value="relevance">Relevance</option>
              <option value="date">Date</option>
              <option value="rating">Rating</option>
            </Select>
          </SortSection>
          <SearchSection>
            <SearchTitle>Search</SearchTitle>
            <SearchInput type="text" value={search} onChange={handleSearchChange} placeholder="Search templates..." />
          </SearchSection>
          <CustomizationSection>
            <CustomizationTitle>Customization Options</CustomizationTitle>
            {/* Add customization options for color schemes, fonts, and layouts here */}
          </CustomizationSection>
        </Sidebar>
        <TemplateGridContainer>
          <TemplateGrid templates={templates} />
        </TemplateGridContainer>
      </Content>
    </Container>
  );
};

// Styled components
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
`;

const Header = styled.h1`
  font-size: 2rem;
  margin-bottom: 1rem;
`;

const Content = styled.div`
  display: flex;
  width: 100%;
`;

const Sidebar = styled.div`
  width: 250px;
  padding: 1rem;
  border-right: 1px solid ${({ theme }) => theme.colors.border};
`;

const FilterSection = styled.div`
  margin-bottom: 1rem;
`;

const FilterTitle = styled.h3`
  font-size: 1.25rem;
  margin-bottom: 0.5rem;
`;

const SortSection = styled.div`
  margin-bottom: 1rem;
`;

const SortTitle = styled.h3`
  font-size: 1.25rem;
  margin-bottom: 0.5rem;
`;

const SearchSection = styled.div`
  margin-bottom: 1rem;
`;

const SearchTitle = styled.h3`
  font-size: 1.25rem;
  margin-bottom: 0.5rem;
`;

const SearchInput = styled.input`
  width: 100%;
  padding: 0.5rem;
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 4px;
`;

const CustomizationSection = styled.div`
  margin-bottom: 1rem;
`;

const CustomizationTitle = styled.h3`
  font-size: 1.25rem;
  margin-bottom: 0.5rem;
`;

const Select = styled.select`
  width: 100%;
  padding: 0.5rem;
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 4px;
`;

const TemplateGridContainer = styled.div`
  flex: 1;
  padding: 1rem;
`;

const Loading = styled.div`
  font-size: 1.5rem;
  margin-top: 2rem;
`;

export default CategoryPage;
