import React, { FC, useState } from "react";
import {
  Card,
  CardContent,
  Typography,
  TextField,
  InputLabel,
  FormControl,
  Stack,
  MenuItem,
} from "@mui/material";
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { ActionButton } from "./ActionButton";
import { FeedbackSnackbar } from "./FeedbackSnackbar";
import useFeedback from "../hooks/useFeedback";

export const ServerSettings: FC = () => {
  const [trigger, setTrigger] = useState("INT");
  const [handler, params, openSnackbar] = useFeedback();
  const [clock, setClock] = React.useState('internal');

  const handleTriggerChange = (event: SelectChangeEvent) => {
    setTrigger(event.target.value);
  };

  const handleClock = (
    _event: React.MouseEvent<HTMLElement>,
    newClock: string | null,
  ) => {
    setClock(newClock);
  };

  const handleButtonClick = async () => {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    openSnackbar("success", "Event timer settings saved successfully!");
  };

  return (
    <Card>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          Event Timer settings
        </Typography>
        <FormControl fullWidth sx={{ m: 1, ml: 0, minWidth: 120 }} size="small">
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

        <FormControl fullWidth sx={{ m: 1, ml: 0, minWidth: 120 }} size="small">
          <TextField
            id="outlined-number"
            label="Total events (K)"
            type="number"
            defaultValue={1}
            size="small"
            InputLabelProps={{
              shrink: true,
            }}
          />
        </FormControl>

        <FormControl fullWidth sx={{ m: 1, ml: 0, minWidth: 120 }} size="small">
          <TextField
            id="outlined-number"
            label="Events in pack"
            type="number"
            defaultValue={64}
            size="small"
            InputLabelProps={{
              shrink: true,
            }}
          />
        </FormControl>

        <FormControl fullWidth sx={{ m: 1, ml: 0, minWidth: 120 }} size="small">
          <TextField
            id="outlined-number"
            label="Period (x10ms)"
            type="number"
            defaultValue={128}
            size="small"
            InputLabelProps={{
              shrink: true,
            }}
          />
        </FormControl>

            <Stack>
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            Clock source
          </Typography>
          <ToggleButtonGroup
            color="primary"
            size="small"
            value={clock}
            exclusive
            onChange={handleClock}
          >
            <ToggleButton value="internal">Internal</ToggleButton>
            <ToggleButton value="external">External</ToggleButton>
          </ToggleButtonGroup>
        </Stack>
      </CardContent>
      <Stack direction="row-reverse" mr={1} mt={-7}>
        <ActionButton handler={handleButtonClick} label="Save" />
      </Stack>
      <FeedbackSnackbar handler={handler} params={params} />
    </Card>
  );
};
