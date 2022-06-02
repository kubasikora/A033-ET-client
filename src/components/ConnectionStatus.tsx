import React, { FC } from 'react';
import { Chip } from '@mui/material';

interface ConnectionStatusProps {
  isConnected: boolean
}

export const ConnectionStatus: FC<ConnectionStatusProps> = ({ isConnected }) => {
  if(isConnected)
    return <Chip color="success" variant="outlined" label="Connected" />
  else
    return <Chip color="warning" variant="outlined" label="No connection" />
}