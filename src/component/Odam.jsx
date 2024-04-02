import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import styled from 'styled-components';
import Badge from '@mui/material/Badge';

const StyledBadge = styled(Badge)(() => ({
    '& .MuiBadge-badge': {
      backgroundColor: '#44b700',
      color: '#44b700',
      boxShadow: `0 0 0 2px #fff`,
      '&::after': {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        borderRadius: '50%',
        animation: 'ripple 1.2s infinite ease-in-out',
        border: '1px solid currentColor',
        content: '""',
      },
    },
    '@keyframes ripple': {
      '0%': {
        transform: 'scale(1)',
        opacity: 1,
      },
      '100%': {
        transform: 'scale(2.5)',
        opacity: 0,
      },
    },
  }));

export default function Odam(nam) {
  const mas=[nam]
  function Bosildi(d){
    mas[0].fn(d);

  }



  return (
    <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
             <StyledBadge
                overlap="circular"
                anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                variant="dot"
                >
                <Avatar alt="Remy Sharp">{mas[0].nam[0]}</Avatar>
                </StyledBadge>
        </ListItemAvatar>
        <ListItemText
        onClick={()=>Bosildi(mas[0])}
        sx={{cursor:'pointer'}}
          primary={mas[0].nam}
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
              </Typography>
              {"I'll be in your..."}
            </React.Fragment>
          }
        />
      </ListItem>
     
    </List>
  );
}