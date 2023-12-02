export function encodeArgs(args: object) {
  if (!args || typeof args === 'undefined') return '';

  return Buffer.from(JSON.stringify(args)).toString('base64');
}
export function decodeArgs(args: number[]) {
  if (!args || typeof args === 'undefined') return {};

  const encodedString = Buffer.from(args).toString('base64');
  return JSON.parse(Buffer.from(encodedString, 'base64').toString());
}

export function txnMethod(actions: { action: string; method: string }[]) {
  const count = actions?.length || 0;

  if (!count) return 'Unknown';
  if (count > 1) return 'Batch Transaction';

  const action = actions[0];

  if (action.action === 'FUNCTION_CALL') {
    return action.method;
  }

  return action.action;
}
