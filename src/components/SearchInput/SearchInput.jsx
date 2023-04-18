import React from 'react';
import { Navbar, Form, FormControl } from 'react-bootstrap';
import PropTypes from 'prop-types';
import logo from '../../img/Star_Wars_Logo.svg';

export const SearchInput = ({value, onChange}) => (
  <Navbar 

    bg="light" 
    expand="lg" 
    style={{
      marginBottom: "24px", 
      display: 'flexbox', 
      justifyContent: 'space-around'
    }}
  >
    <Form inline>
      <FormControl 
        type="text"
        value={value}
        placeholder="Search a movie..."
        onChange={onChange}
        placeholder="Search" 
        className="mr-sm-2" 
      />
    </Form>
    <img src={logo} width="100px"/>
  </Navbar>
);

SearchInput.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func.isRequired,
}

SearchInput.defaultProps = {
  value: '',
}