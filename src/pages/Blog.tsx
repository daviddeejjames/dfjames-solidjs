import { PageWrapper } from '../components/PageWrapper';
import Therapy from '../posts/Therapy';
import Footer from '../components/Footer';

//
// Blog page of portfolio site
//
const Blog = () => (
  <PageWrapper>
    <div class="blog page-wrap">
      <h1 class="page-title">Blog</h1>
      <div class="blog-post-list">
          <div class="post">
            <Therapy />
          </div>
      </div>
      <Footer />
    </div>
  </PageWrapper>
);

export default Blog;
