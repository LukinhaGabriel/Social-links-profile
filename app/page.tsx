export default function Page(){
    const year = new Date().getFullYear();
    return(
        <main>
            <header className="profile">
                <img className="profile-picture" 
                src="https://avatars.githubusercontent.com/u/51276883?v=4" 
                alt="Foto-Perfil" />
                <div className="content">
                    <h2 className="name">Lucas Gabriel Moya</h2>
                    <p className="description">
                        Web Designer e Desenvolvedor Frontend
                    </p>
                </div>
            </header>
            <section className="social-fields">
                <div className="list-social-field">
                    <a className="social-field instagram"
                    href="https://www.instagram.com/lucas.gabriel.moya/">
                        <i className="fab fa-instagram" />
                        <p className="text">Instagram</p>
                    </a>
                    <a className="social-field linkedin" 
                    href="https://www.linkedin.com/in/lucas-gabriel-moya/">
                        <i className="fab fa-linkedin-in" />
                        Linkedin
                    </a>
                    <a className="social-field behance"
                    href="https://www.behance.net/lucasgmoya">
                        <i className="fab fa-behance" />
                        Behance
                    </a>
                    <a className="social-field pintrest" 
                    href="https://br.pinterest.com/lukinhamoyapereira/_created/">
                        <i className="fab fa-pinterest" />
                        Pinterest
                    </a>
                    <a className="social-field github" 
                    href="https://github.com/LukinhaGabriel">
                        <i className="fab fa-github" />
                        Github
                    </a>
                    <a className="social-field portfolio" 
                    href="https://codepen.io/lukinhagabriel/pens/public">
                        <i className="fab fa-codepen" />
                        CodePen
                    </a>
                    <a className="social-field twitch" 
                    href="https://www.twitch.tv/lukinhagabriel7">
                        <i className="fab fa-twitch" />
                        Twitch
                    </a>
                    <a className="social-field portfolio" 
                    href="https://portfolio.fateclins.edu.br/~1920831821007/Html/home.php">
                        <i className="fas fa-link" />
                        Portfólio
                    </a>
                </div>
            </section>
            <footer className="footer">
                <p className="copyright">© {year} • Lucas Gabriel Moya</p>
            </footer>
        </main>
    )
}