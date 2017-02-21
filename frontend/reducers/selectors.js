export const getAllPayments = ({ payments }) => (
    Object.keys(payments).map(id => payments[id])
);
