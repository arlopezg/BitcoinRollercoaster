export default (amount = 0) => {
  const _formatter = new Intl.NumberFormat("es-CL", {
    style: "currency",
    currency: "USD",
  });

  return _formatter.format(amount);
};
