import React from "react";
import styles from './services.module.css';
import withTitleContainer from "../../hoc/withTitleComponent";
import rooftingImg from '../../static/svg/service1.jpg';
import greenBuildingImg from '../../static/svg/service2.jpg';
import constructionConsultantImg from '../../static/svg/service3.jpg';
import generalContractionImg from '../../static/svg/service4.jpg';
import constructionManagement from '../../static/svg/service5.jpg';
import houseRenovationImg from '../../static/svg/service6.jpg';

const Services = () => {
  const services = [
    {
      id: 'roofting',
      name: 'Metal Roofting',
      img: rooftingImg,
      description: 'Construction offer you the best in metal roofing services, supplies and materials to help protect one of your biggest investments you will ever make, your home.'
    },
    {
      id: 'grenn_building',
      name: 'Green Building',
      img: greenBuildingImg,
      description: 'By choosing to build green, you are making an effort to reduce the burden on the environment and also add value to your home.'
    },
    {
      id: 'construction_Consultant',
      name: 'Construction Consultant',
      img: constructionConsultantImg,
      description: 'this is a short description'
    },
    {
      id: 'general_contracting',
      name: 'General Contracting',
      img: generalContractionImg,
      description: 'this is a short description'
    },
    {
      id: 'construction_management',
      name: 'Construction Management',
      img: constructionManagement,
      description: 'this is a short description'
    },
    {
      id: 'house_renovation',
      name: 'House Renovation',
      img: houseRenovationImg,
      description: 'this is a short description'
    }
  ]
  return (
    <div className="container p-0">
      <div className={styles.cardsHolder}>
        {services.map(({ id, name, img, description }, i) => (
          <div key={id} className={styles.card}
            data-aos="fade"
            data-aos-easing="linear"
            data-aos-delay={i * 150}
            data-aos-once={true}
          >
            <img src={img} alt='card_img' className={styles.cardImg} />
            <h4 className={styles.cardTitle}>{name}</h4>
            <p className={styles.cardDescription}>{description}</p>
          </div>
        ))}
      </div>
    </div>
  )
};

export default withTitleContainer(Services);