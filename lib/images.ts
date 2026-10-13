import imageUrlBuilder from '@sanity/image-url'; import {sanity} from '@/lib/sanity';
const builder=imageUrlBuilder(sanity);
export function imageUrl(source:any,width=900){try{return source?.asset?builder.image(source).width(width).auto('format').url():undefined}catch{return undefined}}
