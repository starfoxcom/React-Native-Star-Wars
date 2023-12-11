import loadingData from '../animations/loadingData.json';
import LottieView from 'lottie-react-native';

export default function LoadingSpinner() {
  return (
      <LottieView
        source={loadingData}
        autoPlay
        loop
        style={{ width: '100%', height: '100%', }}
      />
  );
}