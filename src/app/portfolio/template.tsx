import type { FC, ReactNode } from 'react';

type TemplateProps = {
  children: ReactNode;
};

const Template: FC<TemplateProps> = ({ children }) => {
  return (
    <div className="bg-green-300" style={{ padding: 10 }}>
      {children}
    </div>
  );
};

export default Template;
