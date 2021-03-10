import PropTypes from 'prop-types';
import { CardWraper, CardInfo, Title, Desc, LinkBox, Link } from './styled';

const Card = ({ title, description, image, live, code }) => {
  return (
    <CardWraper image={image}>
      <CardInfo>
        <Title>{title}</Title>
        <Desc>{description}</Desc>
        <LinkBox>
          <Link href={live} target="_blank" rel="noreferrer">
            Live <i className="fa fa-globe-americas"></i>
          </Link>
          <Link href={code} target="_blank" rel="noreferrer">
            Code <i className="fa fa-code"></i>
          </Link>
        </LinkBox>
      </CardInfo>
    </CardWraper>
  );
};

Card.propTypes = {
  live: PropTypes.string,
  code: PropTypes.string,
  title: PropTypes.string,
  image: PropTypes.string,
  description: PropTypes.string
};

Card.defaultProps = {
  live: "",
  code: "",
  title: "",
  image: "",
  description: ""
};

export default Card;
