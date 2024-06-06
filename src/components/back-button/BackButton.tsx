import { useNavigate } from 'react-router-dom';
import './BackButton.scss';

export const BackButton = () => {
  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate(-1);
  };

  return (
    <div className="back-button" onClick={handleBackClick}>
      <div className="back-button__icon"></div>
    </div>
  );
};
