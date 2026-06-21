/**
 * @param {number} gainFromInvestment
 * @param {number} costOfInvestment
 * @return {number}
 */
export default function returnOnInvestment(gainFromInvestment, costOfInvestment) {
  if (costOfInvestment <= 0) {
    throw new Error('costOfInvestment must be greater than 0');
  }
  return ((gainFromInvestment - costOfInvestment) / costOfInvestment) * 100;
}
