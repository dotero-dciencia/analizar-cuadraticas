/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
		colors: {
			'principal-purple': "#ac3973",
			'principal-white': "#f5f5f5",
			'principal-black': "#111111",
			'principal-blue': "#005580",
			'principal-cyan': "#52527a",
			'principal-purple-two': "#732673",
		},
    fontFamily: {
      'poppins': ['Poppins', 'system-ui', 'sans-serif']
    }
	},
  plugins: [],
}