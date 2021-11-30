const getFee = require('../../calculations/getFee');

const transaction1 = {
  date: '2016-01-05', client_id: 1, ref_no: 1716, user_type: 'natural', type: 'cash_in', operation: { amount: 200.00, currency: 'EUR' },
};

const transaction2 = {
  date: '2018-12-01', client_id: 15, ref_no: 1918, user_type: 'natural', type: 'cash_in', operation: { amount: 1.00, currency: 'EUR' },
};

const transaction3 = {
  date: '2019-03-25', client_id: 100, ref_no: 1819, user_type: 'natural', type: 'cash_in', operation: { amount: 2004500000.00, currency: 'EUR' },
};

const transaction4 = {
  date: '2015-11-23', client_id: 20, ref_no: 1617, user_type: 'juridical', type: 'cash_out', operation: { amount: 300.00, currency: 'EUR' },
};

const transaction5 = {
  date: '2016-01-06', client_id: 23, ref_no: 1415, user_type: 'juridical', type: 'cash_out', operation: { amount: 1.00, currency: 'EUR' },
};

const transaction6 = {
  date: '2017-08-09', client_id: 2, ref_no: 1213, user_type: 'juridical', type: 'cash_out', operation: { amount: 3099999990.00, currency: 'EUR' },
};

const transaction7 = {
  date: '2016-02-15', client_id: 901, ref_no: 9101, user_type: 'natural', type: 'cash_out', operation: { amount: 300.00, currency: 'EUR' },
};

const transaction8 = {
  date: '2014-10-18', client_id: 1, ref_no: 5678, user_type: 'natural', type: 'cash_out', operation: { amount: 1.00, currency: 'EUR' },
};

const transaction9 = {
  date: '2020-06-25', client_id: 1, ref_no: 1234, user_type: 'natural', type: 'cash_out', operation: { amount: 9757508694.00, currency: 'EUR' },
};

const cashInFeeConf = {
  percents: 2.4,
  max: {
    amount: 5,
    currency: 'EUR',
  },
};

const cashOutJuridicalFeeConf = {
  percents: 2.4,
  min: {
    amount: 0.5,
    currency: 'EUR',
  },
};

const cashOutNaturalFeeConf = {
  percents: 2.4,
  week_limit: {
    amount: 1000,
    currency: 'EUR',
  },
};

describe('Test example data', () => {
  test('Cash In operations', () => {
    expect(getFee(transaction1, cashInFeeConf)).toBe('0.06');
    expect(getFee(transaction2, cashInFeeConf)).toBe('0.01');
    expect(getFee(transaction3, cashInFeeConf)).toBe('5.00');
  });

  test('Cash Out for Juridical person operations', () => {
    expect(getFee(transaction4, cashOutJuridicalFeeConf)).toBe('0.90');
    expect(getFee(transaction5, cashOutJuridicalFeeConf)).toBe('0.50');
    expect(getFee(transaction6, cashOutJuridicalFeeConf)).toBe('9299999.98');
  });

  test('Cash Out for Natural Persons operations', () => {
    expect(getFee(transaction7, cashOutNaturalFeeConf)).toBe('0.00');
    expect(getFee(transaction8, cashOutNaturalFeeConf)).toBe('0.00');
    expect(getFee(transaction9, cashOutNaturalFeeConf)).toBe('29272523.09');
  });
});
