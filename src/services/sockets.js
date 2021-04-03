export default class {
  constructor() {
    this.socketURL = "wss://ws-feed.pro.coinbase.com";
    this.client = new WebSocket(this.socketURL);
    this.queue = [];

    this.onReadySendQueue();
  }

  onReadySendQueue() {
    this.client.onopen = () => {
      this.queue.forEach((event) => this.sendEvent(event));
      this.queue = [];
    };
  }

  sendEvent({ event = "unsubscribe", channel = "BTC-USD" }) {
    if (this.client.readyState !== 1) {
      this.queue.push({ event, channel });
      return;
    }

    const options = {
      allowedEvents: ["subscribe", "unsubscribe"],
      allowedChannels: ["BTC-USD"],
    };

    const checks = [
      [options.allowedEvents, event],
      [options.allowedChannels, channel],
    ];

    checks.forEach((check) => {
      const [requirement, value] = check;

      if (!requirement.includes(value)) {
        throw new Error("Invalid value:", value);
      }
    });

    const payload = {
      type: event,
      product_ids: [channel],
      channels: [{ name: "ticker", product_ids: [channel] }],
    };
    this.client.send(JSON.stringify(payload));
  }

  listen(callback = null) {
    if (typeof callback !== "function") {
      throw new Error("Callback must be a Fn");
    }

    this.client.onmessage = ({ data }) => {
      data = JSON.parse(data);
      data && callback(data);
      return;
    };
  }
}
