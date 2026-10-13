import Link from 'next/link';
import {ArrowRight, ArrowUpRight, BookOpen, Headphones, Library, Sprout} from 'lucide-react';
import ArticleCard from '@/components/ArticleCard';
import ResourceCard from '@/components/ResourceCard';
import {articles,resources,settings} from '@/lib/sanity';

const sampleArticles = [
  { title: 'The Word of God and Daily Life', category: 'Faith', excerpt: 'Making room for Scripture to shape our choices, habits, and everyday conversations.', image: '/images/daily-bible.jpg' },
  { title: 'Growing in Christ', category: 'Spiritual Growth', excerpt: 'A reflection on the quiet, faithful work of becoming more like Jesus.', image: '/images/faith-mountains.jpg' },
  { title: 'Faith in the Waiting', category: 'Purpose', excerpt: 'Learning to trust God and remain attentive through seasons that take time.', image: '/images/forest-path.jpg' },
];
const sampleResources = [
  {title:'Audio Teachings', type:'LISTEN & REFLECT', description:'A dedicated space for Bible-centred messages and conversations as teachings become available.', icon:'audio'},
  {title:'Free E-books', type:'READ & GROW', description:'Thoughtful reading resources designed to support your walk with Christ.', icon:'book'},
  {title:'Study Resources', type:'LEARN & APPLY', description:'Guides and materials to help you return to Scripture with attention and purpose.', icon:'study'},
];

export default async function Home(){
  const [s,allArticles,allResources]:any[] = await Promise.all([settings(),articles(),resources()]);const portraitUrl = s?.portrait?.asset?.url;
  const featuredArticles=(allArticles||[]).filter((a:any)=>a.featured).slice(0,3);
  const featuredResources=(allResources||[]).filter((r:any)=>r.featured).slice(0,3);
  return <>
    <section className="hero hero-image"><div className="hero-shade"/><div className="container hero-content"><div className="eyebrow">A ministry of the Word</div><h1>{s?.homeHeadline||'Pursuing the knowledge of Christ.'}</h1><p className="hero-copy">{s?.homeIntro||'Biblical truth, devotional reflections, and resources to help believers grow in their understanding of God and His Word.'}</p><div className="button-row"><Link className="button button-primary" href="/articles">Explore Articles <ArrowRight size={16}/></Link><Link className="button button-secondary hero-outline" href="/community">Join Petra’s Community <ArrowUpRight size={15}/></Link></div><div className="hero-footnote">“That I may know him…” <span>— Philippians 3:10</span></div></div></section>

    <section className="section section-white"><div className="container two-col intro-grid"><div><div className="eyebrow">A personal introduction</div><h2>Faith that seeks to understand.</h2><p className="section-intro">This is a place for careful reflection on Scripture, the person of Christ, and the shape of a life formed by the truth of God’s Word.</p><p className="section-intro">{s?.biography||'Learn more about Temitope Ayegbusi and the heart behind this ministry.'}</p><Link className="text-link" href="/contact">Get in touch <ArrowUpRight size={15}/></Link></div><div className="portrait-placeholder" role="img" aria-label="Portrait of Temitope Ayegbusi">
  {portraitUrl ? (
    <img src={portraitUrl} alt="Temitope Ayegbusi" style={{width:'100%',height:'100%',objectFit:'cover',objectPosition:'center top',display:'block'}} />
  ) : (
    <div className="portrait-inner">
      <div className="portrait-initials">T.A.</div>
      <strong>Temitope Ayegbusi</strong>
      <span>Ministry and teaching</span>
    </div>
  )}
</div></div></section>

    <section className="section featured-section"><div className="container"><div className="section-heading"><div><div className="eyebrow">Read, reflect, grow</div><h2>Thoughtful writing for the life of faith.</h2><p className="section-intro">Biblical teaching, devotional writing, and theological reflections intended to invite deeper attention to Christ and Scripture.</p></div><Link className="text-link" href="/articles">All articles <ArrowRight size={15}/></Link></div>{featuredArticles.length?<div className="article-grid">{featuredArticles.map((a:any)=><ArticleCard key={a._id} article={a}/>)}</div>:<div className="article-grid">{sampleArticles.map((a)=><article className="visual-article-card" key={a.title}><Link className="visual-card-image" href="/articles" aria-label={`Explore articles: ${a.title}`}><img src={a.image} alt=""/></Link><div className="visual-card-copy"><span className="card-meta">{a.category}</span><h3><Link href="/articles">{a.title}</Link></h3><p>{a.excerpt}</p><Link className="text-link" href="/articles">Read reflections <ArrowRight size={14}/></Link></div></article>)}</div>}</div></section>

    <section className="section section-dark"><div className="container two-col"><div><div className="eyebrow">A community of believers</div><h2>Petra’s Community</h2><p className="section-intro">{s?.communityDescription||'A community centred on prayer, spiritual growth, and the shared pursuit of knowing Christ more deeply.'}</p><Link className="button button-secondary" href="/community">Discover the community <ArrowRight size={15}/></Link></div><div className="feature-list"><div className="feature-item"><span className="feature-number">01</span><div><strong>Rooted in the Word</strong><p>{s?.communityVision||'Making space to learn, reflect, and grow together in faith.'}</p></div></div><div className="feature-item"><span className="feature-number">02</span><div><strong>Faith in everyday life</strong><p>Encouragement to carry biblical truth beyond a gathering and into daily living.</p></div></div></div></div></section>

    <section className="section section-white"><div className="container"><div className="section-heading"><div><div className="eyebrow">Listen and learn</div><h2>Resources for continued growth.</h2><p className="section-intro">Audio teachings, free e-books, and study materials gathered to support reflection beyond the page.</p></div><Link className="text-link" href="/resources">Explore resources <ArrowRight size={15}/></Link></div>{featuredResources.length?<div className="resource-grid">{featuredResources.map((r:any)=><ResourceCard key={r._id} resource={r}/>)}</div>:<div className="resource-grid">{sampleResources.map((r)=><article className="resource-card visual-resource" key={r.title}><div className="resource-icon">{r.icon==='audio'?<Headphones size={21}/>:r.icon==='book'?<BookOpen size={21}/>:<Library size={21}/>}</div><div className="resource-type">{r.type}</div><h3>{r.title}</h3><p>{r.description}</p><Link className="text-link" href="/resources">Explore resources <ArrowRight size={14}/></Link></article>)}</div>}</div></section>

    <section className="petra-landscape"><div className="container petra-content"><div><div className="eyebrow">A community for the journey</div><h2>Petra’s Community</h2><p>Prayer · Equipping · Transformation · Restoration</p></div><div className="petra-copy"><p>A space for deeper prayer, practical teaching, and spiritual renewal. Come and be refreshed.</p><Link className="button button-secondary" href="/community">Learn more <ArrowRight size={15}/></Link></div></div></section>
    <section className="section final-cta"><div className="container community-band"><div><div className="eyebrow">Continue the journey</div><h2>Make room for deeper understanding.</h2><p>Explore the writing, spend time with the resources, or learn more about Petra’s Community.</p></div><Link className="button button-primary" href="/articles">Begin exploring <ArrowRight size={16}/></Link></div></section>
  </>;
}
