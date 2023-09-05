export const isStage = ['https://stage3.staging.uspacy.tech', 'http://localhost:8180'].includes(window.location.origin);
export const SENDPULSE_API = isStage ? 'http://test-sendpulse.alterego.biz.ua/sendpulse/v1' : 'https://sendpulse.alterego.digital/sendpulse/v1';
