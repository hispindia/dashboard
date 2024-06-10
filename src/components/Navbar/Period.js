import React, { useState, useEffect } from "react";
import { setPeriod } from "../../store/navbar/navbar.action";
import { useDispatch, useSelector } from "react-redux";
import { FormControl, InputLabel, MenuItem, Select } from "@material-ui/core";

export const Period = () => {
  const futureYear = new Date().getFullYear()+3;
  const dispatch = useDispatch();
  const period = useSelector((state) => state.navbar.period);
  const [years, setYears] = useState([]);

  useEffect(() => {
    const base = 2017;
    const years = [];
    for (let i = base; i <= futureYear; i++) years.push(i);
    setYears(years);
  }, [futureYear]);

  const handleChange = (ev) => {
    const { value } = ev.target;
    if (value) {
      dispatch(setPeriod(value));
    }
  };

  return (
    <FormControl fullWidth>
      <InputLabel id="label-period">Period</InputLabel>
      <Select
        labelId="label-period"
        value={period}
        label="Period"
        onChange={handleChange}
      >
        {years.map((year) => (
          <MenuItem value={year}>{year}</MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};
