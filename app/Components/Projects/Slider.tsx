import React, { CSSProperties } from 'react';

import landingpage from '@/public/project/3d-landing-page.png'
import landingpage2 from '@/public/project/3d-landing-page2.png'
import pdflex from '@/public/project/pdflex.png'
import imageai from '@/public/project/imageai.png'
import flamingo from '@/public/project/FLAMINGO.png'
import dailyblog from '@/public/project/DAILY BLOG.png'
import infiniteScroll from '@/public/project/infinite-scroll.png'
import mytodo from '@/public/project/myTodo.png'
import mywether from '@/public/project/myweather.png'
import protfolio from '@/public/project/portfolio.png'
import sg2 from '@/public/project/sg2.png'
import Image from 'next/image';










const Slider: React.FC = () => {
  return (
    <>
      <div className="slider" >
        <div className="list">
          <div className="item item1" >
            <Image src={dailyblog} alt="Daily Blog" />
          </div>
          <div className="item item5">
            <Image src={infiniteScroll} alt="Infinite Scroll" />
          </div>
          <div className="item item2" >
            <Image src={flamingo} alt="Flamingo" />
          </div>
          <div className="item item3" >
            <Image src={imageai} alt="Image AI" />
          </div>
          <div className="item item4" >
            <Image src={mytodo} alt="My Todo" />
          </div>
          <div className="item item5">
            <Image src={infiniteScroll} alt="Infinite Scroll" />
          </div>
        </div>
      </div>

      <div className="slider-reverse" >
        <div className="list-reverse">
          
          <div className="item-reverse" >
            <Image src={mywether} alt="My Weather" />
          </div>
          <div className="item-reverse itemr1" >
            <Image src={pdflex} alt="PDF Lex" />
          </div>
          <div className="item-reverse itemr2" >
            <Image src={protfolio} alt="Portfolio" />
          </div>
          <div className="item-reverse itemr3" >
            <Image src={sg2} alt="SG2" />
          </div>
          <div className="item-reverse itemr4" >
            <Image src={landingpage} alt="3D Landing Page" />
          </div>
          <div className="item-reverse itemr5" >
            <Image src={landingpage2} alt="3D Landing Page 2" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Slider;
