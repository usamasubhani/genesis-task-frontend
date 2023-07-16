interface PageHeaderProps {
  title: string;
}

const PageHeader = ({ title }: PageHeaderProps) => {
  return (
    <div className="row">
      <h1 className="text-center">{title}</h1>
    </div>
  );
};

export default PageHeader;
