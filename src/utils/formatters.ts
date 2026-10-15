import { Currency } from '../types';
import { CURRENCY_RATES } from '../data/products';

export function formatPrice(priceUSD: number, currency: Currency): string {
  const config = CURRENCY_RATES[currency] || CURRENCY_RATES.USD;
  const converted = Math.round(priceUSD * config.rate);
  
  if (config.prefix) {
    return `${config.symbol}${converted}`;
  }
  return `${converted} ${config.symbol}`;
}

export function triggerDownload(filename: string, content: string) {
  const blob = new Blob([content], { type: 'text/plain;charset=utf-8' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.download = filename;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
}
