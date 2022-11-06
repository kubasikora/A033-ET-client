import React, { FC } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

interface StatCardProps {
  label: string;
  value: number;
  unit?: string;
  float?: boolean;
}

export const StatCard: FC<StatCardProps> = ({ label, value, unit, float = false }) => {
  const formatValue = (val: number) => {
    return (Math.round(val * 100000) / 100000).toFixed(5);
  }
  
  return (
    <Card variant="outlined">
      <CardContent>
        <Typography sx={{ fontSize: 16 }} color="text.secondary" gutterBottom>
          {label}
        </Typography>
        <Typography variant="h4" component="div">
          {float ? formatValue(value) : value}
        </Typography>
        <Typography sx={{ mb: 1.5, color: unit ? "black" : "white" }} color="text.secondary">
          {unit ? unit : "none"}
        </Typography>
      </CardContent>
    </Card> 
  );
}
