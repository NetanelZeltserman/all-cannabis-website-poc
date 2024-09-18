import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { IconButton } from '@mui/material';


type NavigationButtonsProps = {
    onPrev: () => void;
    onNext: () => void;
}

export function NavigationButtons({ onPrev, onNext }: NavigationButtonsProps) {
    return (
        <div dir="ltr" className="flex justify-center mt-6 space-x-4">
        <NavigationButton onClick={onPrev} direction="prev" />
        <NavigationButton onClick={onNext} direction="next" />
        </div>
    );
}
  
type NavigationButtonProps = {
    onClick: () => void;
    direction: 'prev' | 'next';
}

function NavigationButton({ onClick, direction }: NavigationButtonProps) {
    const Icon = direction === 'prev' ? ArrowBackIosNewIcon : ArrowForwardIosIcon;

    return (
        <IconButton 
        onClick={onClick} 
        className="bg-white shadow-md hover:bg-gray-100"
        >
        <Icon />
        </IconButton>
    );
}