export const formatCurrency = (a: number) => {
  if (!a) {
    return 0
  }

  return new Intl.NumberFormat().format(a)
}
