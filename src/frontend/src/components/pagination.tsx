import { Pagination as MuiPagination } from '@mui/material';
import { styled, alpha } from '@mui/material/styles';

type Props = {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

const StyledPagination = styled(MuiPagination)(({ theme }) => ({
  '& .MuiPaginationItem-root': {
    backgroundColor: alpha(theme.palette.primary.main, 0.1),
    '&:hover': {
      backgroundColor: alpha(theme.palette.primary.dark, 0.2),
    },
  },
  '& .Mui-selected': {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.primary.contrastText,
    '&:hover': {
      backgroundColor: theme.palette.primary.dark,
    },
  },
}));

export default function Pagination({
  currentPage, 
  totalPages, 
  onPageChange 
}: Props) {
  const handlePageChange = (_: React.ChangeEvent<unknown>, newPage: number) => {
    onPageChange(newPage);
  };

  return (
    <div className="mt-8 flex justify-center">
      <StyledPagination
        count={totalPages}
        page={currentPage}
        onChange={handlePageChange}
        color="primary"
        size="large"
      />
    </div>
  );
}