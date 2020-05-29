export const currencyFormatter = (nominal: number) => {
	return new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR' }).format(nominal)
}