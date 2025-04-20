import { PageWrapper } from '../components/PageWrapper';
import { FaSolidCalendar } from 'solid-icons/fa';
import Footer from '../components/Footer';

const posts = [
  {
    id: 1,
    slug: 'first',
    title: 'test title',
    date: new Date(),
    excerpt: 'This is a cool article',
  },
];

//
// Blog page of portfolio site
//

const formatDate = (date: number | Date | undefined) => {
  const customFormatter = new Intl.DateTimeFormat('en-AU', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
  });
  return customFormatter.format(date);
};

const Blog = () => (
  <PageWrapper>
    <div class="blog page-wrap">
      <h1 class="page-title">Blog</h1>
      <div class="blog-post-list">
        {posts.map((node) => (
          <div class="post">
            <a href={`/blog/${node.slug}`}>
              <h3 class="post-title">{node.title}</h3>
            </a>
            <div class="divider" />
            <div class="date-wrap">
              <a href={`/blog/${node.slug}`}>
                <FaSolidCalendar/>
                <div class="date">{formatDate(node.date)}</div>
              </a>
            </div>
            <div class="excerpt">{node.excerpt}</div>
          </div>
        ))}
      </div>
      <Footer />
    </div>
  </PageWrapper>
);

export default Blog;
