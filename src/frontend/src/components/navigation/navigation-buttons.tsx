import { IconButton } from '@mui/material';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import { styled, alpha } from '@mui/material/styles';

type NavigationButtonsProps = {
    onPrev: () => void;
    onNext: () => void;
}

const BackgroundIconButton = styled(IconButton)(({ theme }) => ({
    backgroundColor: alpha(theme.palette.primary.main, 0.1),
    '&:hover': {
        backgroundColor: alpha(theme.palette.primary.dark, 0.2),
    },
}));

export function NavigationButtons({ onPrev, onNext }: NavigationButtonsProps) {
    return (
        <div dir="ltr" className="flex justify-center mt-6 space-x-4">
            <BackgroundIconButton onClick={onPrev} aria-label="previous">
                <NavigateBeforeIcon />
            </BackgroundIconButton>
            <BackgroundIconButton onClick={onNext} aria-label="next">
                <NavigateNextIcon />
            </BackgroundIconButton>
        </div>
    );
}