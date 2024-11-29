import React from "react";
import './longCard.css';
import war from '../../assets/war2.webp';
import mark from '../../assets/mark.webp';

const LongCard = () => {
    return(
        <div className="long_card">
            <div className="long_card_item">
                <div className="long_card_header">
                    <div className="long_card_header_bar"></div>
                    <p>ABOUT ME</p>
                    <div className="long_card_header_bar"></div>
                </div>
                <div className="long_card_body" style={{background:"linear-gradient(var(--color-third), var(--color-blue-dark))"}}>
                    <div className="long_card_tag">ACIAKLA</div>
                    <div className="long_card_body_content">
                        <h1 style={{color:"rgba(0, 0, 0, 0.1)"}}>ABOUT ME</h1>
                        <p style={{color:"var(--color-white)"}}>
                        In the heart of a war-torn realm, where tumultuous skies reflect the fury of countless battles, a formidable 
                        warrior named Kael stands as a beacon of strength and sacrifice. Born to a lineage of revered guardians in 
                        the war-ravaged village of Ashrend, his childhood was steeped in the echoes of clashing steel and embers of 
                        lost hope. Surrounded by the teachings of honor, valor, and the burden of family legacy, Kael learned not 
                        only to wield a sword but to temper his heart against the pain of loss. The weight of expectations shaped 
                        his resolute spirit, yet the scars of grief left him with a restless soul, seeking redemption through the 
                        fires of conflict.
                        </p>
                        <img src={war} alt="testing" />
                        <p style={{color:"var(--color-white)"}}>
                        Kael’s imposing figure is a striking presence on any battlefield, clad in battle-scarred armor that tells 
                        tales of various skirmishes — deep scratches from crude weapons and burn marks from elemental fires. His 
                        raven-black hair, kept short for practicality, contrasts sharply with piercing green eyes that gleam with 
                        determination and an unyielding spirit. The grip of his great sword, Marrow&#39;s Edge, is worn with use, and 
                        his calloused hands speak to a life devoted to the art of war. As he stands amidst the ruins of what was 
                        once a thriving village now engulfed in the flames of invasion, Kael feels the pulse of despair calling to 
                        him — a reminder of his duty to protect the remaining hope of his people against encroaching darkness.
                        </p>
                        <img src={mark} alt="testing" />
                        <p style={{color:"var(--color-white)"}}>
                        With each confrontation against the relentless tide of foes, Kael grapples with his deepest fears — the 
                        fear of failure and the disappearance of his village amid the encroaching shadows. As he slices through
                         enemies, he wrestles with moments of doubt, haunted by the faces of fallen comrades. His greatest desire 
                         is a chance to prove his worth, to shatter the cycle of loss that haunts him. Yet, as victories turn to 
                         ashes in the face of unending conflict, Kael must navigate the fine line between vengeance and justice. 
                         The battlefield transforms him, pushing him to evolve while threatening to consume his very essence. A 
                         fateful decision looms ahead, one that will not only determine the fate of Ashrend but also uncover the 
                         true warrior lurking within.
                        </p>
                    </div>
                </div>
            </div>
            
            <div className="long_card_item">
                <div className="long_card_header">
                    <div className="long_card_header_bar"></div>
                    <p>ABOUT ME</p>
                    <div className="long_card_header_bar"></div>
                </div>
                <div className="long_card_body" style={{background:"var(--color-yellow)"}}>
                <div className="long_card_tag">ACIAKLA</div>
                    <div className="long_card_body_content">
                        <h1  style={{color:"rgba(0, 0, 0, 0.5)"}}>ABOUT ME</h1>
                        <p style={{color:"var(--color-bg)"}}>
                        In the heart of a war-torn realm, where tumultuous skies reflect the fury of countless battles, a formidable 
                        warrior named Kael stands as a beacon of strength and sacrifice. Born to a lineage of revered guardians in 
                        the war-ravaged village of Ashrend, his childhood was steeped in the echoes of clashing steel and embers of 
                        lost hope. Surrounded by the teachings of honor, valor, and the burden of family legacy, Kael learned not 
                        only to wield a sword but to temper his heart against the pain of loss. The weight of expectations shaped 
                        his resolute spirit, yet the scars of grief left him with a restless soul, seeking redemption through the 
                        fires of conflict.
                        </p>
                        <img src={war} alt="testing" />
                        <p style={{color:"var(--color-bg)"}}>
                        Kael’s imposing figure is a striking presence on any battlefield, clad in battle-scarred armor that tells 
                        tales of various skirmishes — deep scratches from crude weapons and burn marks from elemental fires. His 
                        raven-black hair, kept short for practicality, contrasts sharply with piercing green eyes that gleam with 
                        determination and an unyielding spirit. The grip of his great sword, Marrow&#39;s Edge, is worn with use, and 
                        his calloused hands speak to a life devoted to the art of war. As he stands amidst the ruins of what was 
                        once a thriving village now engulfed in the flames of invasion, Kael feels the pulse of despair calling to 
                        him — a reminder of his duty to protect the remaining hope of his people against encroaching darkness.
                        </p>
                        <img src={mark} alt="testing" />
                        <p style={{color:"var(--color-bg)"}}>
                        With each confrontation against the relentless tide of foes, Kael grapples with his deepest fears — the 
                        fear of failure and the disappearance of his village amid the encroaching shadows. As he slices through
                         enemies, he wrestles with moments of doubt, haunted by the faces of fallen comrades. His greatest desire 
                         is a chance to prove his worth, to shatter the cycle of loss that haunts him. Yet, as victories turn to 
                         ashes in the face of unending conflict, Kael must navigate the fine line between vengeance and justice. 
                         The battlefield transforms him, pushing him to evolve while threatening to consume his very essence. A 
                         fateful decision looms ahead, one that will not only determine the fate of Ashrend but also uncover the 
                         true warrior lurking within.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LongCard;