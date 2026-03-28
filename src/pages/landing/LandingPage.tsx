import { Link } from 'react-router-dom';
import { AFFILIATE_SIGNUP_URL } from '@/constants/affiliate';
import { PATH_DASHBOARD, PATH_LANDING } from '@/constants/platform-routes';
import { site_display_name } from '@/utils/site-config';
import './landing-page.scss';

const LandingPage = () => {
    return (
        <div className='landing-page'>
            <header className='landing-page__top'>
                <Link to={PATH_LANDING} className='landing-page__logo'>
                    {site_display_name}
                </Link>
                <div className='landing-page__top-actions'>
                    <Link to={PATH_DASHBOARD} className='landing-page__btn landing-page__btn--secondary'>
                        Log in
                    </Link>
                </div>
            </header>

            <main>
                <section className='landing-page__hero'>
                    <h1 className='landing-page__headline'>Automated Trading Made Simple — Free Access!</h1>
                    <p className='landing-page__sub'>{site_tagline}</p>
                    <div className='landing-page__cta-row'>
                        <a
                            className='landing-page__btn landing-page__btn--primary'
                            href={AFFILIATE_SIGNUP_URL}
                            rel='noopener noreferrer'
                            target='_blank'
                        >
                            Start Trading Free
                        </a>
                        <Link to={PATH_DASHBOARD} className='landing-page__btn landing-page__btn--secondary'>
                            Already have an account? Open dashboard
                        </Link>
                    </div>
                    <p className='landing-page__note'>
                        New users: use <strong>Start Trading Free</strong> to create a Deriv account with our partner
                        link, then return here and use <strong>Log in</strong> to connect.
                    </p>
                </section>

                <section className='landing-page__section' aria-labelledby='benefits-heading'>
                    <h2 id='benefits-heading' className='landing-page__section-title'>
                        Why traders use this
                    </h2>
                    <div className='landing-page__grid'>
                        <div className='landing-page__card'>
                            <h3>Free bot templates</h3>
                            <p>Launch pre-built strategies and adapt them in the visual builder.</p>
                        </div>
                        <div className='landing-page__card'>
                            <h3>Secure Deriv login</h3>
                            <p>Sign in with Deriv OAuth. We don&apos;t hold your funds.</p>
                        </div>
                        <div className='landing-page__card'>
                            <h3>Automated execution</h3>
                            <p>Let the bot follow your rules on your account — start and stop when you want.</p>
                        </div>
                    </div>
                </section>

                <section className='landing-page__section'>
                    <p className='landing-page__trust'>
                        Trusted by active Deriv users exploring automation — results vary; past activity is not a promise
                        of future performance.
                    </p>
                </section>

                <section className='landing-page__section' aria-labelledby='faq-heading'>
                    <h2 id='faq-heading' className='landing-page__section-title'>
                        FAQ
                    </h2>
                    <dl>
                        <div className='landing-page__faq-item'>
                            <dt>Do I need to deposit?</dt>
                            <dd>
                                You trade on your own Deriv account. Practice on demo first; any deposit is between you
                                and Deriv.
                            </dd>
                        </div>
                        <div className='landing-page__faq-item'>
                            <dt>Do bots guarantee profit?</dt>
                            <dd>
                                No. Bots help automate a strategy you choose. Markets are risky; you can lose money.
                            </dd>
                        </div>
                    </dl>
                </section>
            </main>

            <footer className='landing-page__disclaimer'>
                Trading carries risk. This interface links to Deriv services. Read Deriv&apos;s terms and risk
                disclosures before trading.
            </footer>
        </div>
    );
};

export default LandingPage;
