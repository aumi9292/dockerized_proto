class Fjord {
  static SSE = 'stream';

  constructor(options) {
    this.host = options.url;
    this.topic = options.topic;
    this.source = new EventSource(`${this.url}/${this.SSE}/${this.topic}`);
  }

}

export default class {
  Fjord
}