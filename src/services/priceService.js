import { sockets } from "./api";

export default class {
  constructor() {
    this.socketsService = new sockets();
  }

  getLivePrice(callback = null) {
    this.socketsService.sendEvent({ event: "subscribe" });
    this.socketsService.listen(({ data }) => {
      callback && callback(data.price);
    });
  }

  stopListening() {
    this.socketsService.sendEvent({ event: "unsubscribe" });
  }

  getVariance(newValue, previousValue) {
    if (newValue > previousValue) {
      return "up";
    }
    return "down";
  }
}
