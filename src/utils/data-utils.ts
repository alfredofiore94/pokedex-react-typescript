export function extractIdByUrl(url: string): number {
  const id = Number(url.split("/").filter(Boolean).pop());

  return isNaN(id) ? 0 : id;
}
