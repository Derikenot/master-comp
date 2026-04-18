import { cn } from '@/shared/lib';

export const BannerShapeTop = ({ classname }: { classname?: string }) => {
  return (
    <>
      <svg
        viewBox="0 0 1360 396"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={cn('hidden lg:block', classname)}
      >
        <path
          d="M-88.0025 386.999C193.671 148.229 993.156 -80.1879 1324 -127.999L1585.5 -34.5009C1352.67 139.666 779.998 480.999 351.997 452.999C-76.0025 424.999 -119.669 397.333 -88.0025 386.999Z"
          fill="#F1F5F2"
        />
      </svg>

      <svg
        viewBox="140 0 780 439"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={cn('block lg:hidden -translate-y-50', classname)}
      >
        <path
          d="M11.2669 429.399C-20.6317 425.21 -12.0174 210.145 413.77 91.7285C622.242 41.2976 851.595 0.202045 1038.73 0.00218588C1233.69 -0.206014 1360.14 14.2533 1221.24 172.898C1119.57 252.027 949.012 322.726 760.366 370.87C490.62 420.23 217.933 456.54 11.2669 429.399Z"
          fill="#F1F5F2"
        />
      </svg>
    </>
  );
};
