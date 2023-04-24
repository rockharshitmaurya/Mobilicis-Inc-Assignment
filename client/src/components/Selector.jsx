import React, { useState } from "react";
import { FormControl, InputLabel, Select, MenuItem } from "@mui/material";

const Selector = ({ onSelectChange }) => {
  const [selectedOption, setSelectedOption] = useState(0);
  return (
    <FormControl variant="outlined">
      <InputLabel id="selector-label">Select an option</InputLabel>
      <Select
        labelId="selector-label"
        id="selector"
        value={selectedOption}
        onChange={(e) => {
          onSelectChange(e.target.value);
          setSelectedOption(e.target.value);
        }}
        label="Select an option"
        defaultValue={selectedOption}
      >
        <MenuItem value={0} disabled>
          Select a query to fetch
        </MenuItem>
        <MenuItem value={1}>
          Users which have income lower than $5 USD and have a car of brand
          “BMW” or “Mercedes”.
        </MenuItem>
        <MenuItem value={2}>
          Users which have a car of brand “BMW”, “Mercedes” or “Audi” and whose
          email does not include any digit.
        </MenuItem>
        <MenuItem value={3}>
          Users whose last name starts with “M” and has a quote character length
          greater than 15 and email includes his/her last name.
        </MenuItem>
        <MenuItem value={4}>
          Male Users which have phone price greater than 10,000.
        </MenuItem>
        <MenuItem value={5}>
          Show the data of top 10 cities which have the highest number of users
          and their average income.
        </MenuItem>
      </Select>
    </FormControl>
  );
};

export default Selector;
