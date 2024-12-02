"use client";

// pages/dashboard.tsx
import { withPageAuthRequired } from '@auth0/nextjs-auth0';
import { useEffect, useRef } from 'react';

const Page = () => {
  const vizRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://public.tableau.com/javascripts/api/tableau.embedding.3.latest.min.js';
    script.async = true;
    script.onload = () => {
      if (vizRef.current) {
        const vizElement = document.createElement('tableau-viz');
        vizElement.src = 'https://public.tableau.com/views/complaint_customer/Dashboard1?:language=en-GB&:sid=&:redirect=auth&:display_count=n&:origin=viz_share_link';
        vizElement.style.width = '100%';
        vizElement.style.height = '802px';
        vizRef.current.appendChild(vizElement);
      }
    };
    document.body.appendChild(script);
  }, []);

  return (
    <div>
      <h1>Dashboard de Tableau</h1>
      <div ref={vizRef}></div>
    </div>
  );
};

export default withPageAuthRequired(Page);

{/* <script type='module' src='https://us-east-1.online.tableau.com/javascripts/api/tableau.embedding.3.latest.min.js'></script><tableau-viz id='tableau-viz' src='https://us-east-1.online.tableau.com/t/nicolasneiralopez-9cdb353c2d/views/ExecutiveDashboard/ExecutiveDashboard' width='1080' height='802' toolbar='bottom' ></tableau-viz> */ }



