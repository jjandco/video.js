import videojs from './video';
import 'http-streaming-uc';
import DomData from './utils/dom-data.js';

videojs.DomData = DomData;

videojs.log.level('debug');
export default videojs;
