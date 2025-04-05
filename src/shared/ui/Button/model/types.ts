export interface ButtonProps {
  onClick: React.MouseEventHandler<HTMLButtonElement>;
  children?: React.ReactNode;
  className?: string;
  variant?: 'purple' | 'transparent';
  wide?: boolean;
}