import { PageWrapper } from '../components/PageWrapper';
// import { FaSolidCalendar } from 'solid-icons/fa';
import Footer from '../components/Footer';
import Therapy from '../posts/Therapy';


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
            {// TODO Bless this mess.... 
            /* <a href={`/blog/${posts.slug}`}>
              <h3 class="post-title">{Therapy.title}</h3>
            </a>
            <div class="divider" />
            <div class="date-wrap">
              <a href={`/blog/${Therapy.slug}`}>
                <FaSolidCalendar/>
                <div class="date">{therapy.date}</div>
              </a>
            </div>
            <div class="excerpt">{therapy.description}</div> */}
          </div>
      </div>
      <Footer />
    </div>
  </PageWrapper>
);

export default Blog;
