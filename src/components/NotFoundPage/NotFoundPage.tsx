import { LottieAnimation } from './../LottieAnimation';
import animationData from '../../animations/404.json';
import './NotFoundPage.scss';

export const NotFoundPage = () => {
  return (
    <div className="not-found-page">
      <div className="animation">
        <LottieAnimation animationData={animationData} />
      </div>
    </div>
  );
}
