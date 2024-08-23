const Blog = ({ params }: { params: { slug: string } }) => {
  let { slug } = params;
  return <div>{slug}</div>;
};

export default Blog;
