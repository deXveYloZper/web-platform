import { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const NavBar: React.FC = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  // Toggle dropdown menu visibility
  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <NavContainer>
      <Logo>MyWebPlatform</Logo>
      <NavLinks>
        <NavItem>
          <NavLink to="/">Home</NavLink>
        </NavItem>
        <NavItem onMouseEnter={toggleDropdown} onMouseLeave={toggleDropdown}>
          <NavLink to="#">Categories</NavLink>
          {dropdownOpen && (
            <Dropdown>
              <DropdownItem to="/category/e-commerce">E-commerce</DropdownItem>
              <DropdownItem to="/category/business">Business</DropdownItem>
              <DropdownItem to="/category/blogs">Blogs</DropdownItem>
              {/* Add more categories as needed */}
            </Dropdown>
          )}
        </NavItem>
        <NavItem>
          <NavLink to="/about">About</NavLink>
        </NavItem>
        <NavItem>
          <NavLink to="/pricing">Pricing</NavLink>
        </NavItem>
        <NavItem>
          <NavLink to="/support">Support</NavLink>
        </NavItem>
        <NavItem>
          <NavLink to="/contact">Contact</NavLink>
        </NavItem>
      </NavLinks>
      <SearchBar>
        <SearchInput type="text" placeholder="Search..." />
        <SearchButton>Search</SearchButton>
      </SearchBar>
    </NavContainer>
  );
};

export default NavBar;

// Styled components

// Container for the navigation bar
const NavContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background-color: ${({ theme }) => theme.colors.background};
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
`;

// Logo styling
const Logo = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.primary};
`;

// Container for the navigation links
const NavLinks = styled.ul`
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
`;

// Individual navigation item
const NavItem = styled.li`
  position: relative;
  margin: 0 1rem;
`;

// Navigation link styling
const NavLink = styled(Link)`
  text-decoration: none;
  color: ${({ theme }) => theme.colors.text};
  &:hover {
    color: ${({ theme }) => theme.colors.primary};
  }
`;

// Dropdown menu styling
const Dropdown = styled.div`
  position: absolute;
  top: 100%;
  left: 0;
  background-color: ${({ theme }) => theme.colors.background};
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
  z-index: 1;
`;

// Dropdown item styling
const DropdownItem = styled(Link)`
  display: block;
  padding: 0.5rem 1rem;
  text-decoration: none;
  color: ${({ theme }) => theme.colors.text};
  &:hover {
    background-color: ${({ theme }) => theme.colors.primary};
    color: #fff;
  }
`;

// Container for the search bar
const SearchBar = styled.div`
  display: flex;
  align-items: center;
`;

// Search input field styling
const SearchInput = styled.input`
  padding: 0.5rem;
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 4px;
`;

// Search button styling
const SearchButton = styled.button`
  padding: 0.5rem 1rem;
  margin-left: 0.5rem;
  border: none;
  border-radius: 4px;
  background-color: ${({ theme }) => theme.colors.primary};
  color: #fff;
  cursor: pointer;
  &:hover {
    background-color: ${({ theme }) => theme.colors.primaryDark};
  }
`;

