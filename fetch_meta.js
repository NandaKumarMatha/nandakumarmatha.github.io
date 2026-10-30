const urls = [
  'https://credentials.databricks.com/1cc60e16-3d1d-4330-a489-5dafb8c2ac27',
  'https://catalog-education.oracle.com/ords/certview/sharebadge?id=EC82B9BDC3AA833C2A99FBC29639E98E91B2E2F630103A6BE3F3C20B6A20B5DC',
  'https://catalog-education.oracle.com/ords/certview/sharebadge_m?id=C316BB6934F500CE4F3EB5F2ADDFA61E636B609EF5C0218EE7780A0C4709D07D'
];

async function run() {
  for (let i = 0; i < urls.length; i++) {
    try {
      const res = await fetch(urls[i], {
        headers: { 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)' }
      });
      const text = await res.text();
      const titleMatch = text.match(/<title[^>]*>([\s\S]*?)<\/title>/i);
      const title = titleMatch ? titleMatch[1].trim() : 'No title';
      
      // Look for badge/cert name or og:title
      const ogTitleMatch = text.match(/<meta[^>]*property=["']og:title["'][^>]*content=["'](.*?)["']/i);
      const ogDescMatch = text.match(/<meta[^>]*property=["']og:description["'][^>]*content=["'](.*?)["']/i);
      const ogImgMatch = text.match(/<meta[^>]*property=["']og:image["'][^>]*content=["'](.*?)["']/i);
      
      console.log(`\n=== URL ${i} ===\nTitle: ${title}\nOG Title: ${ogTitleMatch ? ogTitleMatch[1] : ''}\nOG Desc: ${ogDescMatch ? ogDescMatch[1] : ''}\nOG Img: ${ogImgMatch ? ogImgMatch[1] : ''}`);
    } catch (e) {
      console.error(`Error fetching URL ${i}:`, e.message);
    }
  }
}

run();

