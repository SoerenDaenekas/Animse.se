module.exports = function registerEndpoint(router, { services, exceptions }) {
	const { ItemsService, MailService, FieldsService } = services;
	const {  } = exceptions;

	router.get('/', (req, res) => {



		res.send('Hello, World!')
	});

	router.post('/sendConfirmationEmail', async (req, res, next) => {
		let body = req.body

		if (body.email === undefined) {
			res.send('Hello, World!')
			return
		}


		var info = new ItemsService('additionaluserinfo', { schema: req.schema })
		// get user by email
		let users = new ItemsService('directus_users', { schema: req.schema })
		let user = await users.readByQuery({
			email: {
				_eq: body.email
			}
		})

		let userInfo = await info.readByQuery({
			user: {
				id: {
					_eq: user[0].id
				}
			}
		})

		if (userInfo.length === 0)
		{
			// create userinfo
		}

		// create confirmationpass

		// update userinfo with confirmation pass
		
		// send email
		await mailService.send({
			to: body.email,
			template: {
				name: 'item-created',
				data: {
					collection: collection,
				},
			},
		});

	});

};