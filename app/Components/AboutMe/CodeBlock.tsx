import React from 'react'

type Props = {}

const CodeBlock = (props: Props) => {
  return (
    <div className='flex-1 overflow-x-auto text-[16px]'>
        <pre className='text-white'><span >&lt;<span className="pl-ent">div</span> <span className="pl-e">name</span>=<span className="pl-s"><span className="pl-pds">&quot;</span>kumar-ayush<span className="pl-pds">&quot;</span></span>&gt;</span></pre>
        <pre className='text-white'><span >  &lt;<span className="pl-ent">div</span> <span className="pl-e">profession</span>=<span className="pl-s"><span className="pl-pds">&quot;</span>software-engineer<span className="pl-pds">&quot;</span></span>&gt;</span></pre>
        <pre className='text-white'><span >    &lt;<span className="pl-ent">div</span> <span className="pl-e">graduation</span>=<span className="pl-s"><span className="pl-pds">&quot;</span>bachelor-of-technology<span className="pl-pds">&quot;</span><span className="pl-e"> major</span>=<span className="pl-s"><span className="pl-pds">&quot;</span>cse<span className="pl-pds">&quot;</span></span><span className="pl-e"> year</span>=<span className="pl-s"><span className="pl-pds">&quot;</span>2025<span className="pl-pds">&quot;</span></span></span>&gt;</span></pre>
        <pre className='text-white'><span >        &lt;<span className="pl-ent">introduction</span>&gt;</span></pre>
        <pre className='text-white'><span >          &lt;<span className="pl-ent">college</span>&gt;</span>Kalinga Institue Of Technology<span >&lt;/<span className="pl-ent">college</span>&gt;</span></pre>
        <pre className='text-white'><span >          &lt;<span className="pl-ent">skill</span>&gt;</span>Fullstack Developer<span >&lt;/<span className="pl-ent">skill</span>&gt;</span></pre>

        <pre className='text-white'><span >          &lt;<span className="pl-ent">experience</span> <span className='pl-e'>start</span>=<span className='pl-s'><span className='pl-pds'>&quot;Jun-23&quot;</span></span> <span className='pl-e'>end</span>=<span className='pl-s'><span className='pl-pds'>&quot;Sept-23&quot;</span></span>&gt;</span>Enterprise Minds<span > &lt;/<span className="pl-ent">experience</span>&gt;</span></pre>
        <pre className='text-white'><span >          &lt;<span className="pl-ent">experience </span><span className='pl-e'>start</span>=<span className='pl-s'><span className='pl-pds'>&quot;May-24&quot;</span> <span className='pl-e'>current</span></span>&gt;</span>HighRadius<span >&lt;/<span className="pl-ent">experience</span>&gt;</span></pre>
        <pre className='text-white'><span >          &lt;<span className="pl-ent">p</span> <span className="pl-e">className</span>=<span className="pl-s"><span className="pl-pds">&quot;</span>about-me<span className="pl-pds">&quot;</span></span>&gt;</span></pre>
        <pre className='text-white'>            I graduated from KIIT University, Bhubaneswar,</pre>
        <pre className='text-white'>            where I honed my skills in Computer Science and Engineering.</pre>
        <pre className='text-white'>            Currently, I’m working as a Software Engineer Intern at HighRadius. </pre>
        <pre className='text-white'>            My journey in tech is driven by a passion for creating impactful solutions and a love for continuous learning. </pre>
        <pre className='text-white'>            Let’s connect and build something extraordinary together!</pre>
        <pre className='text-white'><span >          &lt;/<span className="pl-ent">p</span>&gt;</span></pre>
        <pre className='text-white'><span >        &lt;/<span className="pl-ent">intorduction</span>&gt;</span></pre>
        <pre className='text-white'><span >    &lt;/<span className="pl-ent">div</span>&gt;</span></pre>
        <pre className='text-white'><span >  &lt;/<span className="pl-ent">div</span>&gt;</span></pre>
        <pre className='text-white'><span >&lt;/<span className="pl-ent">div</span>&gt;</span></pre>
    </div>
  )
}

export default CodeBlock