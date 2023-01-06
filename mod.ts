export const BASE_URL = "https://cleanuri.com/api/v1";

interface CleanuriResponse {
  result_url: string;
}

export async function cleanuri(url: string): Promise<string> {
  url = encodeURI(url);

  const response = await fetch(`${BASE_URL}/shorten`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ url }),
  });

  const data: CleanuriResponse = await response.json();

  return data.result_url;
}
