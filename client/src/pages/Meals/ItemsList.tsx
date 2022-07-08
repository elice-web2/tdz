import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faArrowRight,
  faPlus,
  faStar,
} from '@fortawesome/free-solid-svg-icons';

export const ItemsList: React.FC<{ name: string }> = (props) => {
  const List = styled.li`
    width: 360px;
    padding-top: 5px;
    border-bottom: 1px solid gray;
  `;
  const NamedInfo = styled.div`
    box-sizing: border-box;
    position: relative;
    width: 100%;
    display: flex;
    align-items: center;
    padding: 20px 10px 10px 10px;

    .arrowIcon {
      font-size: 20px;
      cursor: pointer;
    }

    .title {
      font-size: 20px;
      font-weight: bold;
      margin-right: 15px;
      cursor: pointer;
    }
    .starIcon {
      font-size: 20px;
      position: absolute;
      right: 15px;
      cursor: pointer;
    }

    .plusIcon {
      font-size: 20px;
      position: absolute;
      right: 18px;
      top: 60px;
      cursor: pointer;
    }
  `;
  const QuanInfo = styled.p`
    font-size: 14px;
    padding: 3px 10px 10px 13px;
    margin-bottom: 20px;
  `;
  return (
    <List>
      <NamedInfo>
        <div className="title">{props.name}</div>
        <span className="arrowIcon">
          <FontAwesomeIcon icon={faArrowRight} />
        </span>
        <span className="plusIcon">
          <FontAwesomeIcon icon={faPlus} />
        </span>
        <span className="starIcon">
          <FontAwesomeIcon icon={faStar} />
        </span>
      </NamedInfo>
      <QuanInfo>1인분</QuanInfo>
    </List>
  );
};
