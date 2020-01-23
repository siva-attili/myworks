import * as React from 'react';
import Slides from '../components/Slides'
export const Home = () => {
    return (
        <React.Fragment>
           <div className="piMT70  pihome-slides">
           <Slides/>
           </div>
           <div className="piabout piMT20">
                <div></div>
                <div>At Print Ideas, we are impulsively inclined towards transforming your deliberations into designs. Yes, you read
                  it right. Any brand is undone without the branding material ensembles and that is when we come into the picture.
                  We create one of a kind identities for corporate, business and individual firms by designing user interfaces,
                  digital marketing, logos, flyers, brochures, presentations and much more... </div>
                <div></div>
            </div>
        </React.Fragment>
    );
}