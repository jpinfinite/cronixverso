export interface ChatMessage {
  role: 'system' | 'user' | 'assistant';
  content: string;
}

export interface AIGatewayOptions {
  messages: ChatMessage[];
  maxTokens?: number;
  temperature?: number;
}

class CronixAIGateway {
  private inceptionKey: string;

  constructor() {
    this.inceptionKey = (typeof import.meta !== 'undefined' && (import.meta as any).env?.VITE_INCEPTIONLABS_API_KEY) || 
      'sk_7c66847eb841ed2be3450cae8f415772';
  }

  public async generateText(options: AIGatewayOptions): Promise<string> {
    if (this.inceptionKey) {
      try {
        const controller = new AbortController();
        const timeoutId = setTimeout(() => controller.abort(), 6000);

        const res = await fetch('https://api.inceptionlabs.ai/v1/chat/completions', {
          method: 'POST',
          headers: {
            'Authorization': `Bearer ${this.inceptionKey}`,
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            model: 'mercury-2',
            messages: options.messages,
            max_tokens: options.maxTokens || 500,
            temperature: options.temperature || 0.6
          }),
          signal: controller.signal
        });

        clearTimeout(timeoutId);

        if (res.ok) {
          const data = await res.json();
          const content = data.choices?.[0]?.message?.content;
          if (content) return content;
        }
      } catch (err) {
        console.warn('[Cronix AI Gateway] Fallback acionado...', err);
      }
    }

    return 'No universo da computação quântica e inteligência artificial, os limites da física clássica são redefinidos através de superposição quântica e arquiteturas de redes neurais profundas.';
  }
}

export const cronixAIGateway = new CronixAIGateway();
