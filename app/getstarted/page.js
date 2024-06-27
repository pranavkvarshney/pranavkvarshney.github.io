"use client"
import Head from 'next/head'
import Image from 'next/image'

export default function Home() {
    const price = () => {
        alert(`Please contact AVTech Sales Team.
        Email: info@avtechnosoftindia.com
        Phone: 01141421924`)
    }
    return (
        <>
            <div className="container">
                <Head>
                    <title>VisitorPro - Advanced Visitor Management System</title>
                    <meta name="description" content="Streamline your visitor check-in process with VisitorPro" />
                    <link rel="icon" href="/favicon.ico" />
                </Head>



                <div className="nav">
                    <a href="#features" className="nav-link">Features</a>
                    <a href="#how-it-works" className="nav-link">How It Works</a>
                    <a href="#testimonials" className="nav-link">Testimonials</a>
                    <a href="#contact" className="nav-link">Contact</a>
                </div>


                <main className="main">
                    <section className="hero">
                        <div className="hero-content">
                            <h1 className="hero-title">Revolutionize Your Visitor Management</h1>
                            <p className="hero-description">
                                VisitorPro streamlines check-ins, enhances security, and provides valuable insights for your organization.
                            </p>
                            <button onClick={price} className="m-4  professional-button"><span class="button-text">Ask For Price</span>
                                <span class="button-icon">→</span></button>
                        </div>
                    </section>

                    <section id="features" className="features">
                        <h2 className="section-title">Key Features</h2>
                        <div className="features-grid">

                            <div className="feature-item">
                                <div className="feature-icon">
                                    <Image src="" width={50} height={50} priority />
                                </div>
                                <h3 className="feature-title">Quick Check-In</h3>
                                <p className="feature-description">Effortlessly record attendance and monitor arrivals with a streamlined check-in process, enhancing efficiency and ensuring seamless event management.</p>
                            </div>


                            <div className="feature-item">
                                <div className="feature-icon">
                                    <Image src="" width={50} height={50} priority />
                                </div>
                                <h3 className="feature-title">Security Alerts</h3>
                                <p className="feature-description">Stay informed with real-time notifications about potential security issues, ensuring proactive protection for your data and systems.</p>
                            </div>
                            <div className="feature-item">
                                <div className="feature-icon">
                                    <Image src="" width={50} height={50} priority />
                                </div>
                                <h3 className="feature-title">Customizable Workflows</h3>
                                <p className="feature-description">Tailor workflows to fit your unique business needs, enhancing efficiency and streamlining processes across your organization.</p>
                            </div>

                            <div className="feature-item">
                                <div className="feature-icon">
                                    <Image src="" width={50} height={50} priority />
                                </div>
                                <h3 className="feature-title">Reporting & Analytics</h3>
                                <p className="feature-description">Gain valuable insights and make informed decisions with comprehensive reporting and analytics tools, enabling data-driven strategies.</p>
                            </div>

                        </div>
                    </section>

                    <section id="how-it-works" className="how-it-works">
                        <h2 className="section-title">How It Works</h2>
                        <div className="steps">

                            <div className="step">
                                <div className="step-number">1</div>
                                <h3 className="step-title">Register</h3>
                                <p className="step-description">Create your account and sign up for our platform to get started.</p>
                            </div>
                            <div className="step">
                                <div className="step-number">2</div>
                                <h3 className="step-title">Customize</h3>
                                <p className="step-description">Tailor your settings and preferences to fit your specific needs and requirements.</p>
                            </div>
                            <div className="step">
                                <div className="step-number">3</div>
                                <h3 className="step-title">Go Live</h3>
                                <p className="step-description">Launch your application or service and start operating in a live environment.</p>
                            </div>
                            <div className="step">
                                <div className="step-number">4</div>
                                <h3 className="step-title">Analyze</h3>
                                <p className="step-description">Evaluate performance metrics and gather insights to optimize your operations.</p>
                            </div>
                        </div>
                    </section>

                    <section id="testimonials" className="testimonials">
                        <h2 className="section-title">What Our Clients Say</h2>
                        <div className="testimonial-grid">

                            <div className="testimonial-item">
                                <p className="testimonial-text">"VisitorPro has transformed our reception area. The sleek check-in process impresses our clients and keeps our lobby organized. It's a game-changer for our corporate image."</p>
                                <div className="testimonial-author">

                                    <div>
                                        <p className="testimonial-name">Sarah Johnson</p>
                                        <p className="testimonial-position">Operations Manager,</p><p> TechCorp</p>
                                    </div>
                                </div>
                            </div>
                            <div className="testimonial-item">
                                <p className="testimonial-text">"The customizable workflows in VisitorPro have streamlined our contractor check-in process. We've cut wait times by 70% and improved overall site safety."</p>
                                <div className="testimonial-author">

                                    <div>
                                        <p className="testimonial-name">Michael Chen</p>
                                        <p className="testimonial-position">Head of Security,</p><p> GlobalBank</p>
                                    </div>
                                </div>
                            </div>
                            <div className="testimonial-item">
                                <p className="testimonial-text">"Security is our top priority, and this visitor management system delivers. Real-time alerts and detailed visitor logs give us peace of mind we never had before."</p>
                                <div className="testimonial-author">
                                    <div>
                                        <p className="testimonial-name">Emily Rodriguez</p>
                                        <p className="testimonial-position"> Facility Manager, </p><p>IndustrialTech</p>
                                    </div>
                                </div>
                            </div>


                        </div>
                    </section>

                    <section id="contact" className="contact">
                        <h2 className="section-title">Ready to Get Started?</h2>
                        <p className="contact-description">Contact us today for a personalized demo of VisitorPro.</p>
                        <form className="contact-form">
                            <input type="text" placeholder="Your Name" className="form-input" />
                            <input type="email" placeholder="Your Email" className="form-input" />
                            <textarea placeholder="Your Message" className="form-input" rows="4"></textarea>
                            <button type="submit" className="submit-button">Send Message</button>
                        </form>
                    </section>
                </main>

                <footer className="footer">
                    <div className="footer-content">
                        <div className="footer-section">
                            <h3 className="footer-title">VisitorPro</h3>
                            <p>Advanced Visitor Management Solutions</p>
                        </div>
                        <div className="footer-section">
                            <h3 className="footer-title">Quick Links</h3>
                            <a href="#features" className="footer-link">Features</a>
                            <a href="#how-it-works" className="footer-link">How It Works</a>
                            <a href="#testimonials" className="footer-link">Testimonials</a>
                        </div>
                        <div className="footer-section">
                            <h3 className="footer-title">Contact Us</h3>
                            <p>A V Techno Soft India Private Limited</p>
                            <p>  Plot No. 116-B , Kh No. 8/7/2 Kotla Vihar 2 , Tilang Kotla , Nangloi</p>
                            <p>     New Delhi - Delhi (India.) - 110041</p>
                            <p>Email: info@avtechnosoftindia.com</p>
                            <p>Phone: 01141421924</p>
                        </div>
                    </div>
                    <div className="footer-bottom">
                        <p>Copyright 2024&copy; A V Techno Soft India Private Limited . All Rights Reserved.</p>
                    </div>
                </footer>
            </div>
        </>
    )
}