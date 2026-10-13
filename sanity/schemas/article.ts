import {defineField, defineType} from 'sanity';
export default defineType({name:'article', title:'Articles', type:'document', fields:[
 defineField({name:'title',title:'Title',type:'string',validation:r=>r.required().max(120)}),
 defineField({name:'slug',title:'URL slug',type:'slug',options:{source:'title',maxLength:96},validation:r=>r.required()}),
 defineField({name:'subtitle',title:'Subtitle (optional)',type:'string'}),
 defineField({name:'excerpt',title:'Excerpt',type:'text',rows:3,validation:r=>r.required().max(300)}),
 defineField({name:'body',title:'Article body',type:'array',of:[{type:'block',styles:[{title:'Normal',value:'normal'},{title:'Heading 2',value:'h2'},{title:'Heading 3',value:'h3'},{title:'Quote',value:'blockquote'}],marks:{decorators:[{title:'Bold',value:'strong'},{title:'Italic',value:'em'}],annotations:[{name:'link',type:'object',title:'Link',fields:[{name:'href',type:'url',title:'URL',validation:r=>r.uri({scheme:['http','https','mailto']})}]}]}},{type:'image',options:{hotspot:true},fields:[{name:'alt',type:'string',title:'Alternative text',validation:r=>r.required()}]}],validation:r=>r.required()}),
 defineField({name:'coverImage',title:'Cover image',type:'image',options:{hotspot:true},fields:[{name:'alt',type:'string',title:'Alternative text'}]}),
 defineField({name:'categories',title:'Categories',type:'array',of:[{type:'reference',to:[{type:'category'}]}]}),
 defineField({name:'tags',title:'Tags',type:'array',of:[{type:'string'}],options:{layout:'tags'}}),
 defineField({name:'publishedAt',title:'Publication date',type:'datetime',initialValue:()=>new Date().toISOString(),validation:r=>r.required()}),
 defineField({name:'updatedAt',title:'Updated date',type:'datetime'}),
 defineField({name:'author',title:'Author',type:'string',initialValue:'Temitope Ayegbusi',validation:r=>r.required()}),
 defineField({name:'featured',title:'Feature on homepage',type:'boolean',initialValue:false}),
 defineField({name:'seoTitle',title:'SEO title',type:'string'}),defineField({name:'seoDescription',title:'SEO description',type:'text',rows:2})
], preview:{select:{title:'title',subtitle:'publishedAt',media:'coverImage'}}});
