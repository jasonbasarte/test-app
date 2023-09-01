import type { FC, ReactNode } from 'react';

type TemplateProps = {
  children: ReactNode;
};

const Template: FC<TemplateProps> = ({ children }) => {
  return (
    <div className="bg-green-600" style={{ padding: 20 }}>
      {children}
    </div>
  );
};

export default Template;
