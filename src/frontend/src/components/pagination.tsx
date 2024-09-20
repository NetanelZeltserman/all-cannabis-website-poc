import { Pagination as MuiPagination } from '@mui/material';

type Props = {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

export default function Pagination({ currentPage, totalPages, onPageChange }: Props) {
  const handleChange = (_: React.ChangeEvent<unknown>, value: number) => {
    onPageChange(value);
  };

  return (
    <div className="mt-8 flex justify-center">
      <MuiPagination
        count={totalPages}
        page={currentPage}
        onChange={handleChange}
        color="primary"
        size="large"
      />
    </div>
  );
}