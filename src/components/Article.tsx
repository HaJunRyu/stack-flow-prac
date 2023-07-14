interface ArticleProps {
  title: string;
  content: string;
  thumbnailSrc: string;
}

const Article = ({ title, content, thumbnailSrc }: ArticleProps) => {
  return (
    <div>
      <h1>{title}</h1>
      <p>{content}</p>
      <img src={thumbnailSrc} alt="" style={{ width: '100%' }} />
    </div>
  );
};

export default Article;
