import Fjord from '../../api_proxy/client_library/fjord.js';

const URL = 'http://localhost:3000';
const TOPIC = 'weather';
const TYPE = 'sse';

const fjordOpts = {
  url: URL,
  topic: TOPIC,
  type: TYPE
};

const fjord = new Fjord({fjordOpts});

const someBusinessLogic = (e) => {
  const record = JSON.parse(e.data);
  console.log(record);
};

fjord.source.onmessage = someBusinessLogic;