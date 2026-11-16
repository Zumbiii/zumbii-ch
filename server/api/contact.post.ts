type ContactBody = {
  name?: string;
  email?: string;
  requestType?: string;
  message?: string;
};

export default defineEventHandler(async (event) => {
  const body = await readBody<ContactBody>(event);

  if (!body.name?.trim() || !body.email?.trim() || !body.message?.trim()) {
    throw createError({ statusCode: 400, statusMessage: 'Missing fields' });
  }

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(body.email)) {
    throw createError({ statusCode: 400, statusMessage: 'Invalid email' });
  }

  const hasSmtp = Boolean(process.env.NUXT_MAIL_HOST && process.env.NUXT_MAIL_USER);

  if (!hasSmtp) {
    return { ok: true, mode: 'noop' };
  }

  const mail = useMail();
  const typeLabel = body.requestType || 'other';

  await mail.send({
    subject: `Zumbii Contact [${typeLabel}] — ${body.name}`,
    text: `Name: ${body.name}\nEmail: ${body.email}\nType: ${typeLabel}\n\n${body.message}`,
    replyTo: body.email,
  });

  return { ok: true, mode: 'sent' };
});