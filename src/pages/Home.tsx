
import { PageWrapper } from '../components/PageWrapper'
import { Socials }  from '../components/Socials'
//
// Home page of portfolio site
//
const Home = () => {

  return (
    <PageWrapper>
      <div class="front-page">
        <div class="card-wrap">
          <div class="image-wrap">
            <div class="mask">
              <div class="profile-image">
              </div>
            </div>
          </div>
          <div class="content">
            <div class="inner">
                <h2>David James</h2>
                <h3>Software Developer</h3>
                <p>Software builder and passionate about all things web. Also a CSS fanatic, photographer and skateboarder.</p>
            </div>
            <Socials />
          </div>
        </div>
      </div>
    </PageWrapper>
  )
}

export default Home;
