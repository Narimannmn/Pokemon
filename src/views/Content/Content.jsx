import React from 'react';
import welcome from '../../static/welcome.jpg'
import pikachu from '../../static/pikachu.jpg'
import PsyDuck from '../../static/PsyDuck.jpg'
import style from'./Content.module.css'
import PokemonSection from "../../components/PokemonSection/PokemonSection";
function Content() {
    return (
        <div className={style.content}>
            <section style={{display: 'grid', placeItems: 'center'}}>
                <img src={welcome} style={{width: '100%'}} alt=""/>
            </section>

            <section className={style.info}>
                <h3>
                    Lorem ipsum dolor sit amet, consectetur adip non pro id, sed diam nonum vulputate velit. Lore mauris
                    et justo vitae just ut aliquet
                </h3>
                <img src={pikachu} style={{width: '45%', height: '100%'}}/>
            </section>
            <section className={style.info}>
                <img src={PsyDuck} style={{width: '45%', height: '100%'}}/>
                <h3>
                    Lorem ipsum dolor sit amet, consectetur adip non pro id, sed diam nonum vulputate velit. Lore mauris
                    et justo vitae just ut aliquet
                </h3>

            </section>
            <section>
                <h1>
                    Our Favourites Pokemons
                </h1>
                <PokemonSection/>
            </section>

        </div>
    );
}

export default Content;
