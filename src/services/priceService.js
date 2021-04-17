import { sockets } from "./api";

export default class {
  constructor() {
    this.socketsService = new sockets();
  }

  getLivePrice(callback = null) {
    this.socketsService.sendEvent({ event: "subscribe" });
    this.socketsService.listen((data) => {
      callback && callback(data);
    });
  }

  stopListening() {
    this.socketsService.close();
  }

  getVarianceInfo(newValue = 0, previousValue = 0) {
    const _getDirection = () => {
      if (newValue === previousValue) {
        return;
      }
      return newValue > previousValue ? "up" : "down";
    };

    const _getSpeed = () => {
      const bigger = Math.max(newValue, previousValue);
      const smaller = Math.min(newValue, previousValue);
      const diff = bigger - smaller;

      if (diff < 5) {
        return "slow";
      } else if (diff > 20) {
        return "fast";
      }
      return "regular";
    };

    return {
      direction: _getDirection(),
      speed: _getSpeed(),
    };
  }
}
