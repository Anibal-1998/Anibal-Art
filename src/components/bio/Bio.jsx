import React from 'react'
import "./Bio.css"
function Bio() {
    return (
        <main className='bio'>
            <section className='writing'>
                <div>
                    <p>
                        ES - Me encanta mucho el dise&ntilde;o, la comunicación y el <strong>arte</strong>.
                        Mis estudios y mi experiencia me centran en el &aacute;mbito del <strong>dise&ntilde;o gr&aacute;fico, </strong>
                        soy un creativo ilusionado, con objetivos claros, gran constancia y ambici&oacute;n.
                    </p>
                    <p>
                        De ah&iacute;, mi facilidad de adaptaci&oacute; al proyecto que se me ponga en frente y dar
                        el <strong>100%</strong>. Con muchas ganas y buena actitud de mejorar tanto a nivel personal como profesional.
                    </p>
                </div>
                <div>
                    <p>
                        EN - I love the world of design, communinacation and <strong>art</strong>.
                        My studies and my experience focus me in the field of <strong>graphic design</strong>,
                        I am an excited creative, with clear objectives, great <strong>constancy</strong> and
                        <strong> ambition</strong>.
                    </p>
                    <p>
                        Hence, my ease of adaptation to the project that is put in front of me and give <strong>100%</strong>.
                        With great desire and good attitude to improve both personally and professionally.
                    </p>
                </div>
            </section>
            <section className='info-grid'>
                <div className="info-column">
                    <h3>Clients</h3>
                    <ul>
                        <li>
                            <strong>Agencies & Studios</strong>
                            <span>TheBits</span>
                            <span>Lemon Printers</span>
                        </li>
                    </ul>
                    <ul>
                        <li>
                            <strong>Media & Publishers</strong>
                            <span>Smartbranding</span>
                            <span>Techbox</span>
                        </li>
                    </ul>
                    <ul>
                        <li>
                            <strong>Music Industry</strong>
                            <span>Saint Cardona</span>
                            <span>Seyka</span>
                            <span>Cloud Musix</span>
                            <span>Albert Freixas</span>
                        </li>
                        <span>+ MORE</span>
                    </ul>
                </div>
                <div className="info-column">
                    <h3>Experience</h3>
                    <ul>
                        <li>
                            <strong>Graphic Designer & Creative</strong>
                            <span>Freelance</span>
                            <span>2019 / Present</span>
                        </li>
                        <li>
                            <strong>Designer & Printer</strong>
                            <span>Lemon Printers</span>
                            <span>2018 / 2019</span>
                        </li>
                        <li>
                            <strong>Copywriter & Content Creator</strong>
                            <span>Techbox.es</span>
                            <span>2018</span>
                        </li>
                        <li>
                            <strong>Marketing & Designer Intern</strong>
                            <span>MicrodigiT Informática S.L.</span>
                            <span>2016 / 2017</span>
                        </li>
                    </ul>
                </div>
                <div className="info-column">
                    <h3>Study</h3>
                    <ul>
                        <li>
                            <strong>Graphic Product Design</strong>
                            <span>CFIO L'Hospitalet</span>
                            <span>2019 / 2020</span>
                        </li>
                        <li>
                            <strong>Design & Graphic Art Production</strong>
                            <span>Escola del Treball de Barcelona</span>
                            <span>2017 / 2019</span>
                        </li>
                        <li>
                            <strong>Digital Prepress</strong>
                            <span>Escola del Treball de Barcelona</span>
                            <span>2015 / 2017</span>
                        </li>
                    </ul>
                </div>
            </section>
        </main>
    )
}

export default Bio;
