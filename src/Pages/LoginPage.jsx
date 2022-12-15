import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import MuiDialogActions from '@material-ui/core/DialogActions';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Typography from '@material-ui/core/Typography';
import '../Components/Styling/LoginPag.css'

const styles = (theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(2),
  },
  closeButton: {
    position: 'absolute',
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500],
  },
});

const DialogTitle = withStyles(styles)((props) => {
  const { children, classes, onClose, ...other } = props;
  return (
    <MuiDialogTitle disableTypography className={classes.root} {...other}>
      <Typography variant="h6">{children}</Typography>
      {onClose ? (
        <IconButton aria-label="close" className={classes.closeButton} onClick={onClose}>
          <CloseIcon />
        </IconButton>
      ) : null}
    </MuiDialogTitle>
  );
});

const DialogContent = withStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
  },
}))(MuiDialogContent);

const DialogActions = withStyles((theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(1),
  },
}))(MuiDialogActions);

export default function Login({ action, handleCloseLogin }) {
  const [number, setNumber] = React.useState('')



  return (
    <div>
      <Dialog onClose={handleCloseLogin} aria-labelledby="customized-dialog-title" open={action}>
        
        <DialogContent dividers style={{textAlign:'center'}}>
          <div style={{ fontSize: '20px', width:'300px', margin:'auto' }}>Get Started</div>
          <div className="facebook">
            <i class="fab fa-facebook"></i>
              Continue with Facebook
          </div>
          <div className="google">
          <svg width="19" height="19" xmlns="http://www.w3.org/2000/svg"><title>Google</title><g fill="none"><path d="M18.33 9.744c0-.65-.058-1.274-.167-1.874H9.536v3.544h4.93a4.214 4.214 0 0 1-1.828 2.765v2.298h2.96c1.733-1.595 2.732-3.943 2.732-6.733z" fill="#4285F4"></path><path d="M9.536 18.696c2.473 0 4.547-.82 6.062-2.219l-2.96-2.298c-.82.55-1.87.874-3.102.874-2.386 0-4.406-1.611-5.126-3.777H1.35v2.374a9.157 9.157 0 0 0 8.186 5.046z" fill="#34A853"></path><path d="M4.41 11.276a5.507 5.507 0 0 1-.287-1.74c0-.604.104-1.191.287-1.74V5.421H1.35a9.157 9.157 0 0 0-.975 4.114c0 1.478.354 2.877.974 4.114l3.06-2.374z" fill="#FBBC05"></path><path d="M9.536 4.018c1.345 0 2.552.463 3.502 1.37l2.627-2.627C14.08 1.283 12.005.375 9.535.375A9.157 9.157 0 0 0 1.35 5.422l3.06 2.373C5.13 5.63 7.15 4.018 9.537 4.018z" fill="#EA4335"></path><path d="M.375.375h18.321v18.321H.375z"></path></g></svg>
              Continue with Google
          </div>
          <div style={{ border: 'none' }} className="google"> OR</div>
          <div className="inputs">
            <div>
              <svg width="18" height="12" version="1.1" viewBox="0 0 18 12" xmlns="http://www.w3.org/2000/svg"><g><rect width="18" height="12" fill="#f93"></rect><path d="m0 4h18v4h-18z" fill="#fff"></path><path d="m0 8h18v4h-18z" fill="#128706"></path><path d="m10.602 6c0 0.88281-0.71875 1.6016-1.6016 1.6016s-1.6016-0.71875-1.6016-1.6016 0.71875-1.6016 1.6016-1.6016 1.6016 0.71875 1.6016 1.6016z" fill="#000087"></path><path d="m10.398 6c0 0.77344-0.625 1.3984-1.3984 1.3984s-1.3984-0.625-1.3984-1.3984 0.625-1.3984 1.3984-1.3984 1.3984 0.625 1.3984 1.3984z" fill="#fff"></path><path d="m9.2812 6c0 0.15625-0.125 0.28125-0.28125 0.28125s-0.28125-0.125-0.28125-0.28125 0.125-0.28125 0.28125-0.28125 0.28125 0.125 0.28125 0.28125z" fill="#000087"></path><path d="m10.457 6.1914c-0.003906 0.039063-0.039062 0.066406-0.078125 0.0625-0.039062-0.007812-0.066406-0.042968-0.058594-0.082031 0.003907-0.035156 0.039063-0.0625 0.078126-0.058594 0.035156 0.003907 0.0625 0.039063 0.058593 0.078125z" fill="#000087"></path><path d="m9 7.3984 0.046875-0.83984-0.046875-0.39844-0.046875 0.39844z" fill="#000087"></path><path d="m10.359 6.5625c-0.015625 0.035156-0.058594 0.050781-0.09375 0.039062-0.035156-0.015624-0.050781-0.058593-0.035156-0.09375 0.011719-0.035156 0.054687-0.050781 0.089843-0.035156 0.035157 0.011719 0.050782 0.054688 0.039063 0.089844z" fill="#000087"></path><path d="m8.6367 7.3516 0.26562-0.79687 0.054687-0.39844-0.14844 0.37109z" fill="#000087"></path><path d="m10.168 6.8945c-0.023438 0.03125-0.070313 0.035157-0.10156 0.011719-0.027344-0.023438-0.035156-0.066406-0.011718-0.097656 0.023437-0.03125 0.066406-0.035156 0.097656-0.011719s0.039062 0.066406 0.015625 0.097656z" fill="#000087"></path><path d="m8.3008 7.2109 0.46094-0.70313 0.16016-0.37109s-0.24219 0.32422-0.24219 0.32422z" fill="#000087"></path><path d="m9.8945 7.168c-0.03125 0.023437-0.074219 0.015625-0.097656-0.015625s-0.019531-0.074219 0.011719-0.097656c0.03125-0.023438 0.074218-0.015626 0.097656 0.011718 0.023438 0.03125 0.019531 0.078125-0.011719 0.10156z" fill="#000087"></path><path d="m8.0117 6.9883 0.625-0.55859 0.25-0.31641-0.31641 0.25z" fill="#000087"></path><path d="m9.5625 7.3594c-0.035156 0.011719-0.078125-0.003906-0.089844-0.039063-0.015625-0.035156 0-0.078124 0.035156-0.089843 0.035157-0.015625 0.078126 0 0.09375 0.035156 0.011719 0.035156-0.003906 0.078125-0.039062 0.09375z" fill="#000087"></path><path d="m7.7891 6.6992 0.75-0.37891 0.32422-0.24219-0.37109 0.16016z" fill="#000087"></path><path d="m9.1914 7.457c-0.039062 0.003907-0.074218-0.023437-0.078125-0.058593-0.003906-0.039063 0.023438-0.074219 0.058594-0.078126 0.039063-0.007812 0.074219 0.019532 0.082031 0.058594 0.003906 0.039063-0.023437 0.074219-0.0625 0.078125z" fill="#000087"></path><path d="m7.6484 6.3633 0.82422-0.17188 0.37109-0.14844s-0.39844 0.054687-0.39844 0.054687z" fill="#000087"></path><path d="m8.8086 7.457c-0.039063-0.003906-0.066406-0.039062-0.0625-0.078125 0.007812-0.039062 0.042968-0.066406 0.082031-0.058594 0.035156 0.003907 0.0625 0.039063 0.058594 0.078126-0.003907 0.035156-0.039063 0.0625-0.078125 0.058593z" fill="#000087"></path><path d="m7.6016 6 0.83984 0.046875s0.39844-0.046875 0.39844-0.046875-0.39844-0.046875-0.39844-0.046875z" fill="#000087"></path><path d="m8.4375 7.3594c-0.035156-0.015625-0.050781-0.058594-0.039062-0.09375 0.015624-0.035156 0.058593-0.050781 0.09375-0.035156 0.035156 0.011719 0.050781 0.054687 0.035156 0.089843-0.011719 0.035157-0.054688 0.050782-0.089844 0.039063z" fill="#000087"></path><path d="m7.6484 5.6367 0.79687 0.26562s0.39844 0.054687 0.39844 0.054687l-0.37109-0.14844z" fill="#000087"></path><path d="m8.1055 7.168c-0.03125-0.023438-0.035157-0.070313-0.011719-0.10156 0.023438-0.027344 0.066406-0.035156 0.097656-0.011718 0.03125 0.023437 0.035156 0.066406 0.011719 0.097656s-0.066406 0.039062-0.097656 0.015625z" fill="#000087"></path><path d="m7.7891 5.3008 0.70313 0.46094 0.37109 0.16016-0.32422-0.24219z" fill="#000087"></path><path d="m7.832 6.8945c-0.023437-0.03125-0.015625-0.074219 0.015625-0.097656s0.074219-0.019531 0.097656 0.011719c0.023438 0.03125 0.015626 0.074218-0.011718 0.097656-0.03125 0.023438-0.078125 0.019531-0.10156-0.011719z" fill="#000087"></path><path d="m8.0117 5.0117 0.55859 0.625 0.31641 0.25-0.25-0.31641z" fill="#000087"></path><path d="m7.6406 6.5625c-0.011719-0.035156 0.003906-0.078125 0.039063-0.089844 0.035156-0.015625 0.078124 0 0.089843 0.035156 0.015625 0.035157 0 0.078126-0.035156 0.09375-0.035156 0.011719-0.078125-0.003906-0.09375-0.039062z" fill="#000087"></path><path d="m8.3008 4.7891 0.37891 0.75s0.24219 0.32422 0.24219 0.32422l-0.16016-0.37109z" fill="#000087"></path><path d="m7.543 6.1914c-0.003907-0.039062 0.023437-0.074218 0.058593-0.078125 0.039063-0.003906 0.074219 0.023438 0.078126 0.058594 0.007812 0.039063-0.019532 0.074219-0.058594 0.082031-0.039063 0.003906-0.074219-0.023437-0.078125-0.0625z" fill="#000087"></path><path d="m8.6367 4.6484 0.17188 0.82422 0.14844 0.37109-0.054687-0.39844z" fill="#000087"></path><path d="m7.543 5.8086c0.003906-0.039063 0.039062-0.066406 0.078125-0.0625 0.039062 0.007812 0.066406 0.042968 0.058594 0.082031-0.003907 0.035156-0.039063 0.0625-0.078126 0.058594-0.035156-0.003907-0.0625-0.039063-0.058593-0.078125z" fill="#000087"></path><path d="m9 4.6016-0.046875 0.83984 0.046875 0.39844 0.046875-0.39844z" fill="#000087"></path><path d="m7.6406 5.4375c0.015625-0.035156 0.058594-0.050781 0.09375-0.039062 0.035156 0.015624 0.050781 0.058593 0.035156 0.09375-0.011719 0.035156-0.054687 0.050781-0.089843 0.035156-0.035157-0.011719-0.050782-0.054688-0.039063-0.089844z" fill="#000087"></path><path d="m9.3633 4.6484-0.26562 0.79687-0.054687 0.39844 0.14844-0.37109z" fill="#000087"></path><path d="m7.832 5.1055c0.023438-0.03125 0.070313-0.035157 0.10156-0.011719 0.027344 0.023438 0.035156 0.066406 0.011718 0.097656-0.023437 0.03125-0.066406 0.035156-0.097656 0.011719s-0.039062-0.066406-0.015625-0.097656z" fill="#000087"></path><path d="m9.6992 4.7891-0.46094 0.70313-0.16016 0.37109s0.24219-0.32422 0.24219-0.32422z" fill="#000087"></path><path d="m8.1055 4.832c0.03125-0.023437 0.074219-0.015625 0.097656 0.015625s0.019531 0.074219-0.011719 0.097656c-0.03125 0.023438-0.074218 0.015626-0.097656-0.011718-0.023438-0.03125-0.019531-0.078125 0.011719-0.10156z" fill="#000087"></path><path d="m9.9883 5.0117-0.625 0.55859-0.25 0.31641 0.31641-0.25z" fill="#000087"></path><path d="m8.4375 4.6406c0.035156-0.011719 0.078125 0.003906 0.089844 0.039063 0.015625 0.035156 0 0.078124-0.035156 0.089843-0.035157 0.015625-0.078126 0-0.09375-0.035156-0.011719-0.035156 0.003906-0.078125 0.039062-0.09375z" fill="#000087"></path><path d="m10.211 5.3008-0.75 0.37891-0.32422 0.24219 0.37109-0.16016z" fill="#000087"></path><path d="m8.8086 4.543c0.039062-0.003907 0.074218 0.023437 0.078125 0.058593 0.003906 0.039063-0.023438 0.074219-0.058594 0.078126-0.039063 0.007812-0.074219-0.019532-0.082031-0.058594-0.003906-0.039063 0.023437-0.074219 0.0625-0.078125z" fill="#000087"></path><path d="m10.352 5.6367-0.82422 0.17188-0.37109 0.14844s0.39844-0.054687 0.39844-0.054687z" fill="#000087"></path><path d="m9.1914 4.543c0.039063 0.003906 0.066406 0.039062 0.0625 0.078125-0.007812 0.039062-0.042968 0.066406-0.082031 0.058594-0.035156-0.003907-0.0625-0.039063-0.058594-0.078126 0.003907-0.035156 0.039063-0.0625 0.078125-0.058593z" fill="#000087"></path><path d="m10.398 6-0.83984-0.046875s-0.39844 0.046875-0.39844 0.046875 0.39844 0.046875 0.39844 0.046875z" fill="#000087"></path><path d="m9.5625 4.6406c0.035156 0.015625 0.050781 0.058594 0.039062 0.09375-0.015624 0.035156-0.058593 0.050781-0.09375 0.035156-0.035156-0.011719-0.050781-0.054687-0.035156-0.089843 0.011719-0.035157 0.054688-0.050782 0.089844-0.039063z" fill="#000087"></path><path d="m10.352 6.3633-0.79687-0.26562s-0.39844-0.054687-0.39844-0.054687l0.37109 0.14844z" fill="#000087"></path><path d="m9.8945 4.832c0.03125 0.023438 0.035157 0.070313 0.011719 0.10156-0.023438 0.027344-0.066406 0.035156-0.097656 0.011718-0.03125-0.023437-0.035156-0.066406-0.011719-0.097656s0.066406-0.039062 0.097656-0.015625z" fill="#000087"></path><path d="m10.211 6.6992-0.70313-0.46094-0.37109-0.16016 0.32422 0.24219z" fill="#000087"></path><path d="m10.168 5.1055c0.023437 0.03125 0.015625 0.074219-0.015625 0.097656s-0.074219 0.019531-0.097656-0.011719c-0.023438-0.03125-0.015626-0.074218 0.011718-0.097656 0.03125-0.023438 0.078125-0.019531 0.10156 0.011719z" fill="#000087"></path><path d="m9.9883 6.9883-0.55859-0.625-0.31641-0.25 0.25 0.31641z" fill="#000087"></path><path d="m10.359 5.4375c0.011719 0.035156-0.003906 0.078125-0.039063 0.089844-0.035156 0.015625-0.078124 0-0.089843-0.035156-0.015625-0.035157 0-0.078126 0.035156-0.09375 0.035156-0.011719 0.078125 0.003906 0.09375 0.039062z" fill="#000087"></path><path d="m9.6992 7.2109-0.37891-0.75s-0.24219-0.32422-0.24219-0.32422l0.16016 0.37109z" fill="#000087"></path><path d="m10.457 5.8086c0.003907 0.039062-0.023437 0.074218-0.058593 0.078125-0.039063 0.003906-0.074219-0.023438-0.078126-0.058594-0.007812-0.039063 0.019532-0.074219 0.058594-0.082031 0.039063-0.003906 0.074219 0.023437 0.078125 0.0625z" fill="#000087"></path><path d="m9.3633 7.3516-0.17188-0.82422-0.14844-0.37109 0.054687 0.39844z" fill="#000087"></path></g></svg>
            </div>
            <div> +91 </div>
            <div>
              <input type="text" placeholder="Continue with mobile number" onChange={(e)=>setNumber(e.target.value)}/>
            </div>
          </div>
          <div>I agree to the <a href=""color="DIMGRAY">Terms &amp; Conditions</a> &amp; <a href=""color="DIMGRAY">Privacy Policy</a></div>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={()=>handleCloseLogin(number)} color="primary">
            Sign in
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}