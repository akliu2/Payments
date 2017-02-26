export const allPayments = ({ payments }) => (
    Object.keys(payments).map(id => payments[id])
);
