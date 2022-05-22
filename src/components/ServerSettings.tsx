import React, { FC, useEffect, useState } from "react";
import { Card, CardActions, CardContent, Typography, Button, InputLabel, FormControl, Alert, MenuItem } from "@mui/material";
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { ActionButton } from "./ActionButton";

export const ServerSettings: FC = () => {
  const [success, setSuccess] = useState(false);
  const [trigger, setTrigger] = useState('INT');

  const handleTriggerChange = (event: SelectChangeEvent) => {
    setTrigger(event.target.value);
  };

  const handleButtonClick = async () => {
    setSuccess(false);
    await new Promise(resolve => setTimeout(resolve, 1000));
    setSuccess(true);
  };

  return (
    <Card>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          Ustawienia serwera
        </Typography>
        <FormControl fullWidth sx={{ m: 1, minWidth: 120 }} size="small">
         <InputLabel id="demo-select-small">Triggering</InputLabel>
            <Select
            labelId="demo-select-small"
            id="demo-select-small"
            value={trigger}
            label="Triggering"
            onChange={handleTriggerChange}
        >
            <MenuItem value="INT">INT</MenuItem>
            <MenuItem value="DES">DES</MenuItem>
        </Select>
        </FormControl>
      </CardContent>
      <CardActions>
        <ActionButton handler={handleButtonClick} />
      </CardActions>
    </Card>
  );
};
