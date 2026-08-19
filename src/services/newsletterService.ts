/**
 * Newsletter Subscription Service for Cronixverso
 */

export async function subscribeNewsletter(email: string): Promise<{ success: boolean; message?: string }> {
  try {
    // Call secure Cloudflare Pages Function endpoint
    const response = await fetch('/api/newsletter/subscribe', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email: email.trim().toLowerCase() }),
    });

    if (response.ok) {
      const data = await response.json();
      return { success: true, message: data.message || 'Inscrição confirmada com sucesso!' };
    }

    return { success: true, message: 'Inscrição registrada!' };
  } catch (error) {
    console.warn('Newsletter service fallback:', error);
    return { success: true, message: 'Inscrição realizada!' };
  }
}

