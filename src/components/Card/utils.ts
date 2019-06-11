function getLastSpaceIndex(str: string, threshold: number): number {
  let index = 0;

  while ((index = str.indexOf(' ', index + 1)) > 0 && index < threshold) {
    continue;
  }

  return index;
}

export function getTextWithDots(str: string, threshold: number): string {
  return str.length > threshold
    ? str.substring(0, getLastSpaceIndex(str, threshold)) + '...'
    : str;
}
