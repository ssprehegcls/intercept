import InterceptClient from 'intercept-client';
import { EventLoggingStrategy } from '@orbit/coordinator';
const interceptClient = new InterceptClient({
  host: ''
});

interceptClient.coordinator.addStrategy(new EventLoggingStrategy());
interceptClient.coordinator.activate();
window.interceptClient = interceptClient;

export default interceptClient;
