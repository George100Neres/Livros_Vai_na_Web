import logoFacebook from '../../assets/logoFacebook.png'
import logoX from '../../assets/logoX.png'
import logoYoutube from '../../assets/logoYoutube.png'
import logoLinkedin from '../../assets/logoLinkedin.png'
import logoInstagram from '../../assets/logoInstagram.png'
import s from './footer.module.scss'

export default function Footer(){
    return (
        <footer>
           <section className={s.contatosFooter}>
            <p>4002-8922</p>
            <nav>
                <a href=""><img src={logoFacebook} alt="Icone logo do Facebook" /></a>
                <a href=""><img src={logoX} alt="Icone logo do X" /></a>
                <a href=""><img src={logoYoutube} alt="Icone logo Youtub" /></a>
                <a href=""><img src={logoLinkedin} alt="Icone logo do Linkedin" /></a>
                <a href=""><img src={logoInstagram} alt="Icone logo do Instagram" /></a>
            </nav>
           </section> 
           <section className={s.copyright}>
            <p>Layout desenvolvido pela Vai Na Web para fins educativos - 2024</p>
           </section>
        </footer>
    )
}