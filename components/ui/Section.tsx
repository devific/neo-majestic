import { ReactNode } from 'react';
import { cn } from '../../utils/cn';

interface SectionProps {
  children?: ReactNode;
  className?: string;
  id?: string;
  background?: string;
}

export const Section = ({ children, className, id, background }: SectionProps) => {
  return (
    <section id={id} className={cn("py-24 relative w-full overflow-hidden", background, className)}>
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {children}
      </div>
    </section>
  );
};