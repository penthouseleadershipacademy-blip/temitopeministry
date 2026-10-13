export function formatDate(value?:string){if(!value)return '';return new Intl.DateTimeFormat('en',{dateStyle:'long'}).format(new Date(value));}
export function siteUrl(){return (process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000').replace(/\/$/,'');}
export function safeExternalUrl(value?:string){if(!value)return null;try{const u=new URL(value);return u.protocol==='https:'?u.toString():null;}catch{return null;}}
