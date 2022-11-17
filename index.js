export default {
	fetch() {
		return new Response('Hello Dariya!', {
			headers: {
				'content-type': 'text/plain',
			},
		});
	},
};

