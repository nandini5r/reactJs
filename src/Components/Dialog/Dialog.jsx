import React from 'react';
import { Dialog, DialogTitle, DialogContent, DialogActions, Button } from '@mui/material';

const DialogBox = ({ open, handleClose, title, content, actions }) => {
  return (
    <Dialog open={open}  >
      <DialogTitle sx={{fontSize:'100',fontWeight:'900' ,color:'#112f2f'}}>{title}</DialogTitle>
      <DialogContent>{content}</DialogContent>
      <DialogActions>
        {actions.map((action, index) => (
          <Button key={index} onClick={action.handler} color={action.color}  className="btn" sx={{
            width: 100,
            color: 'white',
            backgroundColor:'#112f2f',
            ':hover': {backgroundColor: 'grey'}
          }}>
            {action.label}
          </Button>
        ))}
      </DialogActions>
    </Dialog>
  );
};

export default DialogBox;
