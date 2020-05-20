export interface TradeItemDataType {
  id: number,
  cusip: string,
  par: number,
  price: number,
  side: 'buy' | 'sell'
}

