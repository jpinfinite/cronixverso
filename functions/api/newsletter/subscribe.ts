/**
 * Cloudflare Pages Function for Cronixverso Newsletter Subscription
 */

interface Env {
  BREVO_API_KEY?: string;
  BREVO_LIST_ID?: string;
}

export const onRequestPost: PagesFunction<Env> = async (context) => {
  const { request, env } = context;

  const responseHeaders = {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type',
  };

  if (request.method === 'OPTIONS') {
    return new Response(null, { headers: responseHeaders });
  }

  try {
    const { email } = (await request.json()) as { email: string };

    if (!email || !email.includes('@')) {
      return new Response(
        JSON.stringify({ success: false, error: 'Email inválido' }),
        { status: 400, headers: responseHeaders }
      );
    }

    const cleanEmail = email.trim().toLowerCase();
    const timestamp = new Date().toISOString();
    const apiKey = env.BREVO_API_KEY;
    const listId = env.BREVO_LIST_ID ? parseInt(env.BREVO_LIST_ID, 10) : 2;

    if (!apiKey) {
      return new Response(
        JSON.stringify({ success: true, message: 'Inscrição registrada (modo local)' }),
        { status: 200, headers: responseHeaders }
      );
    }

    const payload = {
      email: cleanEmail,
      updateEnabled: true,
      listIds: [listId],
      attributes: {
        ORIGEM: 'Cronixverso',
        DATA_INSCRICAO: timestamp.split('T')[0]
      }
    };

    const brevoResponse = await fetch('https://api.brevo.com/v3/contacts', {
      method: 'POST',
      headers: {
        'api-key': apiKey,
        'content-type': 'application/json',
        'accept': 'application/json'
      },
      body: JSON.stringify(payload)
    });

    if (brevoResponse.ok || brevoResponse.status === 400) {
      return new Response(
        JSON.stringify({ success: true, message: 'Inscrição confirmada no Cronixverso!' }),
        { status: 200, headers: responseHeaders }
      );
    }

    const errData = await brevoResponse.json().catch(() => ({}));
    return new Response(
      JSON.stringify({ success: false, error: 'Erro ao registrar contato', details: errData }),
      { status: 400, headers: responseHeaders }
    );
  } catch (error) {
    return new Response(
      JSON.stringify({ success: false, error: 'Erro interno ao processar inscrição' }),
      { status: 500, headers: responseHeaders }
    );
  }
};
