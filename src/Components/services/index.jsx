import React from 'react';
import { Data } from './ServicesData';
import { IconServices, ImgWapper, ServicesBody, ServicesCard, ServicesContiner, ServicesTitle, ServicesWapper, ServivesIcon, ServivesTitlte } from './servicesElement';


function Services() {
    return ( 
        <>
            
            <ServicesContiner>
                <ServivesTitlte>
                    our coureses feature
                </ServivesTitlte>
                <ServicesWapper>
                    {Data.map(item=>{
                      return  (
                    <ServicesCard>
                            <ImgWapper>
                                <IconServices src={item.img} />
                            </ImgWapper>
                        <ServicesTitle> {item.title} </ServicesTitle>
                        <ServicesBody>
                            {item.body}
                        </ServicesBody>
                    </ServicesCard>)
                    })}
                </ServicesWapper>
            </ServicesContiner>

        </>
     );
}

export default Services;