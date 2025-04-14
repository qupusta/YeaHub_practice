import { useMediaQuery } from 'react-responsive';

export const useScreenSize = () => {
    const isDesktop = useMediaQuery({ query: '(min-width: 1440px)' });
    const isTablet = useMediaQuery({ query: '(min-width: 768px) and (max-width: 1023px)' });
    const isMobile = useMediaQuery({ query: '(max-width: 767px)' });
    const isMobileS = useMediaQuery({ query: '(max-width: 480px)' });

    return {
        isDesktop,
        isTablet,
        isMobile,
        isMobileS,
    };
};