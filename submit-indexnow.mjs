import fs from 'fs';

const HOST = 'cronixverso.com.br';
const KEY = 'c8f12d4a9b6e4e838127f8a7d1e5b3c4';
const KEY_LOCATION = `https://${HOST}/${KEY}.txt`;

async function submitIndexNow() {
  try {
    const sitemapContent = fs.readFileSync('public/sitemap.xml', 'utf-8');
    const urls = [];
    const locMatches = sitemapContent.matchAll(/<loc>(.*?)<\/loc>/g);
    for (const match of locMatches) {
      urls.push(match[1]);
    }

    if (urls.length === 0) {
      console.log('Nenhuma URL encontrada no sitemap.');
      return;
    }

    console.log(`Submetendo ${urls.length} URLs para o protocolo IndexNow (${HOST})...`);

    const payload = {
      host: HOST,
      key: KEY,
      keyLocation: KEY_LOCATION,
      urlList: urls.slice(0, 1000)
    };

    const res = await fetch('https://api.indexnow.org/indexnow', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json; charset=utf-8'
      },
      body: JSON.stringify(payload)
    });

    if (res.status === 200 || res.status === 202) {
      console.log(`[SUCESSO] IndexNow aceitou ${urls.length} URLs para indexação instantânea! (Status: ${res.status})`);
    } else {
      console.warn(`[AVISO] Resposta do IndexNow: ${res.status} - ${res.statusText}`);
    }
  } catch (err) {
    console.error('[ERRO] Falha ao enviar para IndexNow:', err.message);
  }
}

submitIndexNow();
