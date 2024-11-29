import React from 'react'
import "./Bio.css"
function Bio() {
    return (
        <main className='bio'>

                <div className="info-column">
                    <h3>About</h3>
                    <div>
                        <p>
                            Designer by day. Philosopher by night. Anibal Rodriguez I Canela is a multidisciplinary designer based in <a href="#" className='on-link'>Barcelona, Spain</a>. 
                            Currently working as a Designer at <a href="https://fakegodsbrand.com/" className='on-link'  target='_blank'>Fake Gods Brand</a>, previously at <a href="https://nude-project.com/es" className='on-link' target='_blank'>Nude Project</a>.
                        </p>
                        <p>
                            Main focused in Graphic Design for Fashion, Product Design & Development, Conceptualization, Campaign Creation, and Communication Strategies for Brands and Projects, including Branding & Consulting services.
                        </p>
                        <p>
                            In every work & project, the visual language and the concept trends to be expressive and push the limits, based in pure creativity, mixed with rooted references of culture and life experiences.
                        </p>
                    </div>
                </div>

                    <div className="info-column">
                        <h3>Experience</h3>
                        <ul>
                            <li>
                                <strong>Product & Graphic Design</strong>
                                <span><a href="https://fakegodsbrand.com/" className='on-link-with-hover'>Fake Gods Brand</a></span>
                                <span>May 2023 - Now</span>
                            </li>
                        </ul>
                        <ul>
                            <li>
                                <strong>Product & Graphic Design</strong>
                                <span><a href="https://nude-project.com/" className='on-link-with-hover'>Nude Project</a></span>
                                <span>May 2023 - Mar 2023</span>
                            </li>
                        </ul>
                        <ul>
                            <li>
                                <strong>Graphic Design Intern</strong>
                                <span><a href="https://lemon.cat/" className='on-link-with-hover'>Lemon Printers</a></span>
                                <span>Sept 2018 - Feb 2019</span>
                            </li>
                        </ul>
                    </div>
                    <div className="info-column">
                        <h3>Study</h3>
                        <ul>
                            <li>
                                <strong>Graphic Product Design</strong>
                                <span><a href='https://www.google.es/maps/place/Instituto+Escuela+del+Trabajo+de+Barcelona/@41.3890051,2.145033,17z/data=!3m1!4b1!4m6!3m5!1s0x12a4a2847eeed3b5:0xfcbfd60966182d80!8m2!3d41.3890011!4d2.1476079!16s%2Fg%2F122y4vzh?entry=ttu&g_ep=EgoyMDI0MTAyOS4wIKXMDSoASAFQAw%3D%3D' className="on-link-with-hover">CFIO L'Hospitalet</a></span>
                                <span>2019 / 2020</span>
                            </li>
                            <li>
                                <strong>Design & Graphic Art Production</strong>
                                <span><a href='https://www.google.es/maps/place/Instituto+Escuela+del+Trabajo+de+Barcelona/@41.3890051,2.145033,17z/data=!3m1!4b1!4m6!3m5!1s0x12a4a2847eeed3b5:0xfcbfd60966182d80!8m2!3d41.3890011!4d2.1476079!16s%2Fg%2F122y4vzh?entry=ttu&g_ep=EgoyMDI0MTAyOS4wIKXMDSoASAFQAw%3D%3D' className="on-link-with-hover">Escola del Treball de Barcelona</a></span>
                                <span>2017 / 2019</span>
                            </li>
                            <li>
                                <strong>Digital Prepress</strong>
                                <span><a href='https://www.google.es/maps/place/Instituto+Escuela+del+Trabajo+de+Barcelona/@41.3890051,2.145033,17z/data=!3m1!4b1!4m6!3m5!1s0x12a4a2847eeed3b5:0xfcbfd60966182d80!8m2!3d41.3890011!4d2.1476079!16s%2Fg%2F122y4vzh?entry=ttu&g_ep=EgoyMDI0MTAyOS4wIKXMDSoASAFQAw%3D%3D' className="on-link-with-hover">Escola del Treball de Barcelona</a></span>
                                <span>2015 / 2017</span>
                            </li>
                        </ul>
                    </div>

        </main>
    )
}

export default Bio;
