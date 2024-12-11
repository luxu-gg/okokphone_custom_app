declare global {
  interface Window {
    GetParentResourceName: () => string;
  }
}

export async function fetchNui<T = unknown>(
  eventName: string,
  data?: unknown,
  delay?: number
): Promise<T> {
  if (import.meta.env.DEV)
    return new Promise((_, reject) => {
      reject();
    });
  const options = {
    method: "post",
    headers: {
      "Content-Type": "application/json; charset=UTF-8",
    },
    body: data ? JSON.stringify(data) : undefined,
  };
  const resourceName = window.GetParentResourceName();

  const resp = await fetch(`https://${resourceName}/${eventName}`, options);
  const json = await resp.json();
  if (delay) {
    await new Promise((resolve) => setTimeout(resolve, delay));
  }

  return json;
}
