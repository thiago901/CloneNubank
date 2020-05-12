import Reactotron from 'reactotron-react-native';

if (__DEV__) {
  const tron = Reactotron.configure({ host: 'DESKTOP-43O3REA' })
    .useReactNative()
    .connect();

  tron.clear();

  console.tron = tron;
}
