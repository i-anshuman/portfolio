import PropTypes from 'prop-types';
import Title from '../components/title';
import Card from '../components/card';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { EffectCoverflow as Effect, Pagination } from 'swiper';
import { projects } from '../portfolio';
import styles from '../styles/projects.module.scss';
import 'swiper/swiper.scss';
import 'swiper/components/pagination/pagination.scss';
import 'swiper/components/effect-coverflow/effect-coverflow.scss';
SwiperCore.use([Effect, Pagination]);

const Projects = ({ className, id}) => {
  return (
    <section className={`${className} ${styles.projects}`} id={id}>
      <h1 className={styles.projects__greet}>
        <Title>Projects</Title>
      </h1>
      <div className={styles.projects__content}>
        <Swiper
          spaceBetween={0}
          slidesPerView={1}
          effect="coverflow"
          loop
          centeredSlides
          coverflowEffect= {{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1
          }}
          pagination={{
            el: '.swiper-pagination',
            type: 'bullets',
            clickable: true
          }}
          breakpoints={{768: {slidesPerView: 2}}}
          onSlideChange={() => console.log('Slide Change')}
        >
          {
            projects.map((slide, idx) => (
              <SwiperSlide key={idx}>
                <Card {...slide} />
              </SwiperSlide>
            ))
          }
        </Swiper>
        <div className="swiper-pagination"></div>
      </div>
    </section>
  );
};

Projects.defaultProps = {
  className: ""
};

Projects.propTypes = {
  id: PropTypes.string,
  className: PropTypes.string
};

export default Projects;
