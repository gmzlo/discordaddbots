module.exports = async (client) => {
client.getRandomColor = () => {
		let letters = '0123456789';
		let color = '';
		for (let i = 0; i < 7; i++) {
			color += letters[Math.floor(Math.random() * 10)];
		}
	
		return color;
};
};