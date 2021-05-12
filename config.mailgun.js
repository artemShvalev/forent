curl -s --user 'api:9472581e1ebc59e2ec6df45d34694bd5-2a9a428a-c5a7430c' \
	 https://api.mailgun.net/v3/sandbox442b876686304d799e866c5160ebff83.mailgun.org/messages \
	 -F from='Mailgun Sandbox <postmaster@sandbox442b876686304d799e866c5160ebff83.mailgun.org>' \
	 -F to='Artem <artcom888@mail.ru>' \
	 -F subject='Hello Artem' \
	 -F text='Congratulations Artem, you just sent an email with Mailgun!  You are truly awesome!'

# You can see a record of this email in your logs: https://app.mailgun.com/app/logs.

# You can send up to 300 emails/day from this sandbox server.
# Next, you should add your own domain so you can send 10000 emails/month for free.