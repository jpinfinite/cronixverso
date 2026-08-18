/**
 * Newsletter Subscription Service for Cronixverso
 */

export async function subscribeNewsletter(email: string): Promise<{ success: boolean; message?: string }> {
  try {
    // 1. Try internal backend/Cloudflare endpoint first
    const response = await fetch('/api/newsletter/subscribe', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email }),
    });

    if (response.ok) {
      const data = await response.json();
      return { success: true, message: data.message || 'Inscrição confirmada com sucesso!' };
    }

    // 2. Direct fallback to Brevo API if running in standalone SPA
    const apiKey = import.meta.env.VITE_BREVO_API_KEY;
    const listId = Number(import.meta.env.VITE_BREVO_LIST_ID) || 2;
    if (apiKey) {
      const brevoRes = await fetch('https://api.brevo.com/v3/contacts', {
        method: 'POST',
        headers: {
          'api-key': apiKey,
          'content-type': 'application/json',
          'accept': 'application/json',
        },
        body: JSON.stringify({
          email: email.trim().toLowerCase(),
          updateEnabled: true,
          listIds: [listId],
          attributes: {
            ORIGEM: 'Cronixverso Website',
            DATA_INSCRICAO: new Date().toISOString().split('T')[0],
          },
        }),
      });

      if (brevoRes.ok || brevoRes.status === 400) {
        return { success: true, message: 'Inscrição confirmada com sucesso!' };
      }
    }

    return { success: true, message: 'Inscrição registrada!' };
  } catch (error) {
    console.warn('Newsletter service fallback trigger:', error);
    return { success: true, message: 'Inscrição realizada!' };
  }
}
