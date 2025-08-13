export function required(v) { return v ? null : 'This field is required' }
export function email(v) { return /\S+@\S+\.\S+/.test(v) ? null : 'Invalid email' }
