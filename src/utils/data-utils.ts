export function extractIdByUrl(url: string): number {
  const id = Number(url.split("/")[0]);
  return isNaN(id) ? 0 : id;
}
