import { OIV_CORPUS } from '../src/data/oivCorpus';

const urls = [...new Set(
  OIV_CORPUS.flatMap((d) => [d.officialUrl, d.pdfUrl])
    .filter((u): u is string => typeof u === 'string' && u.length > 0)
)];

async function check(url: string): Promise<{ url: string; dead: boolean; final: string; status: number }> {
  try {
    const res = await fetch(url, { method: 'GET', headers: { Range: 'bytes=0-0' }, redirect: 'follow' });
    const final = res.url;
    const from = new URL(url);
    const to = new URL(final);
    let dead = false;
    if (from.pathname !== '/' && from.pathname !== to.pathname) dead = true;
    if (to.pathname === '/' || to.pathname === '/fr' || to.pathname === '/en') dead = true;
    return { url, dead, final, status: res.status };
  } catch (e) {
    return { url, dead: true, final: String(e), status: 0 };
  }
}

(async () => {
  console.log('Verification de ' + urls.length + ' URL(s) unique(s)...');
  const results = await Promise.all(urls.map(check));
  const dead = results.filter((r) => r.dead);
  if (dead.length === 0) {
    console.log('OK: aucun lien mort (' + results.length + ' URL(s) verifiee(s)).');
    process.exit(0);
  }
  console.log('ERREUR: ' + dead.length + ' lien(s) mort(s) :');
  for (const r of dead) console.log('  - ' + r.url + '  ->  ' + r.final + ' (HTTP ' + r.status + ')');
  process.exit(1);
})();
