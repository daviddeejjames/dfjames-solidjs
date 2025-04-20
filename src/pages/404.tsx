import { PageWrapper } from '../components/PageWrapper';
import Therapy from '../posts/Therapy';
import Footer from '../components/Footer';

//
// Blog page of portfolio site
//
const Blog = () => (
  <PageWrapper>
    <div class="blog page-wrap">
      <h1 class="page-title">404 Not Found</h1>
      <div class="blog-post-list">
          <div class="post">
            <h3>Sorry it seems we can't find what you are looking for...</h3>
            <img src='https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExcmd4bmgyNHpibHVzOHZoN2tlenoxcnhwNTl2cmlkbGI2NTNybzRmNiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/sG9m1ps4IuM1O/giphy.gif' alt='Confused Pokemon'/>
          </div>
      </div>
      <Footer />
    </div>
  </PageWrapper>
);

export default Blog;
