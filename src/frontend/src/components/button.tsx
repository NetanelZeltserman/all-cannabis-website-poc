import { Button as MuiButton, ButtonProps as MuiButtonProps } from '@mui/material';
import { styled, lighten } from '@mui/material/styles';

type ButtonVariant = 'primary' | 'secondary';

interface ButtonProps extends Omit<MuiButtonProps, 'variant'> {
  buttonVariant: ButtonVariant;
}

const StyledButton = styled(MuiButton)<{ buttonVariant: ButtonVariant }>(
  ({ theme, buttonVariant }) => ({
    borderRadius: '9999px',
    padding: theme.spacing(1, 3),
    fontSize: '1rem',
    [theme.breakpoints.up('md')]: {
      fontSize: '1.25rem',
    },
    transition: theme.transitions.create(
      ['background-color', 'box-shadow', 'border-color', 'color'],
      { duration: theme.transitions.duration.short }
    ),
    '&:focus': {
      outline: 'none',
      boxShadow: `0 0 0 4px ${lighten(
        theme.palette[buttonVariant === 'primary' ? 'success' : 'secondary'].main,
        0.6
      )}`,
    },
    ...(buttonVariant === 'primary' && {
      backgroundColor: theme.palette.success.main,
      color: theme.palette.common.white,
      '&:hover': {
        backgroundColor: theme.palette.success.dark,
      },
    }),
    ...(buttonVariant === 'secondary' && {
      border: `1.5px solid ${theme.palette.secondary.main}`,
      color: theme.palette.secondary.main,
      '&:hover': {
        backgroundColor: theme.palette.secondary.dark,
        color: theme.palette.common.white,
      },
    }),
  })
);

export default function Button({ buttonVariant, onClick, children, ...props }: ButtonProps) {
  return (
    <StyledButton
      buttonVariant={buttonVariant}
      onClick={onClick}
      variant={buttonVariant === 'primary' ? 'contained' : 'outlined'}
      {...props}
    >
      {children}
    </StyledButton>
  );
}