export default {
	fetch(request) {
		return new Response('Hello Dariya!', {
			headers: {
				'content-type': 'text/plain',
			},
		});
	},
};

