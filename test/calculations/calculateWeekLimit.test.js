const calculateWeekLimit = require('../../calculations/calculateWeekLimit');

const transaction1 = {
  date: '2016-01-06', client_id: 1, ref_no: 1234, user_type: 'natural', type: 'cash_out', operation: { amount: 30000, currency: 'EUR' },
};

const transaction2 = {
  date: '2020-10-10', client_id: 1124, ref_no: 5678, user_type: 'natural', type: 'cash_out', operation: { amount: 90000000000000, currency: 'EUR' },
};

const transaction3 = {
  date: '2020-10-10', client_id: 666, ref_no: 9101, user_type: 'natural', type: 'cash_out', operation: { amount: 1001, currency: 'EUR' },
};

const transaction4 = {
  date: '2020-05-10', client_id: 999, ref_no: 1213, user_type: 'natural', type: 'cash_out', operation: { amount: 1000, currency: 'EUR' },
};

const transaction5 = {
  date: '2016-02-15', client_id: 1, ref_no: 1415, user_type: 'natural', type: 'cash_out', operation: { amount: 300.00, currency: 'EUR' },
};

const feeConfiguration = {
  percents: 2.4,
  week_limit: {
    amount: 1000,
    currency: 'EUR',
  },
};

describe('calculateWeekLimit', () => {
  test('Commission must be calculated only from exceeded amount', () => {
    expect(calculateWeekLimit(transaction1, feeConfiguration)).toBe(87);
    expect(calculateWeekLimit(transaction2, feeConfiguration)).toBe(269999999997);
    expect(calculateWeekLimit(transaction3, feeConfiguration)).toBe(0.003);
  });

  test('1000.00 EUR per week is free of charge', () => {
    expect(calculateWeekLimit(transaction4, feeConfiguration)).toBe(0);
    expect(calculateWeekLimit(transaction5, feeConfiguration)).toBe(0);
  });
});
