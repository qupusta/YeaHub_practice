export interface ButtonProps {
  onClick: React.MouseEventHandler<HTMLButtonElement>;
  children?: React.ReactNode;
  className?: string;
  variant?: 'purple' | 'transparent' | 'transparent-border' | 'regular';
  wide?: boolean;
}