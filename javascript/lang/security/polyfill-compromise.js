const hostname = 'https://polyfill.io/';


export async function getPolyfill() {
  const url = new URL("", hostname);
  const result = await fetch(url);

  return result;
}
