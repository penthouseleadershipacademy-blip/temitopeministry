import {defineField, defineType} from 'sanity';
const safeUrl = (r:any) => r.uri({scheme:['https']});
export default defineType({name:'resource',title:'Resources',type:'document',fields:[
 defineField({name:'title',title:'Title',type:'string',validation:r=>r.required().max(120)}),defineField({name:'slug',title:'Slug',type:'slug',options:{source:'title'},validation:r=>r.required()}),defineField({name:'description',title:'Description',type:'text',rows:4,validation:r=>r.required()}),
 defineField({name:'type',title:'Resource type',type:'string',options:{list:[{title:'Audio teaching',value:'audio'},{title:'Free e-book',value:'ebook'},{title:'PDF study material',value:'pdf'},{title:'Other',value:'other'}]},validation:r=>r.required()}),
 defineField({name:'category',title:'Topic or category',type:'reference',to:[{type:'category'}]}),defineField({name:'coverImage',title:'Cover image',type:'image',options:{hotspot:true},fields:[{name:'alt',type:'string',title:'Alternative text'}]}),
 defineField({name:'audioUrl',title:'External audio URL (HTTPS)',type:'url',description:'Supported: Spotify, SoundCloud, YouTube, or a direct MP3 URL.',hidden:({document})=>document?.type!=='audio',validation:r=>r.uri({scheme:['https']})}),
 defineField({name:'downloadUrl',title:'Download URL (HTTPS)',type:'url',description:'Public file URL for a resource you have permission to distribute.',hidden:({document})=>!['ebook','pdf'].includes(String(document?.type)),validation:r=>r.uri({scheme:['https']})}),
 defineField({name:'notes',title:'Accompanying notes',type:'array',of:[{type:'block'}]}),defineField({name:'publishedAt',title:'Publication date',type:'datetime'}),defineField({name:'featured',title:'Feature on homepage',type:'boolean',initialValue:false})
],preview:{select:{title:'title',subtitle:'type',media:'coverImage'}}});
